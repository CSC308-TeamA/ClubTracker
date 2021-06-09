import urllib.parse
import datetime
from flask import jsonify
import pymongo
from pymongo import ReturnDocument
from bson import ObjectId
import bcrypt
from uuid import uuid4

class User:
    '''
    Class to represent a user

        Attributes
        ----------
        mdb_username : String
            MongoDB Atlas username
        sdb_password : String
            MongoDB Atlas password
        client : String
            URL to connect to the TeamProj database

        Methods
        -------
        def get_collection(self, name):
            Returns a collection from the "TeamProj" database.
        def find_by_filter(self, name, status, role, position, specialization, collection):
            Returns the documents in a collection, filtered by user inputted criteria.
        def add_user(self, user, collection):
            Adds a user to a collection.
        def remove_user(self, user_id, collection):
            Removes a user from a collection.
    '''

    mdb_username = 'TeamProjAdmin'
    sdb_password = 'teamproject308'

    # client = pymongo.MongoClient(
    #     f'mongodb+srv://{mdb_username}:{sdb_password}@cluster0.3xlma.' +
    #     'mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&' +
    #     'tlsAllowInvalidCertificates=true'
    # )
    client = pymongo.MongoClient(f'mongodb+srv://{mdb_username}:{sdb_password}@cluster0.3xlma.' +
        'mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&' +
        'tlsAllowInvalidCertificates=true')

    def get_collection(self, name):
        '''
        Returns a collection from the "TeamProj" database.

            Parameters:
                self (class): User class that contains this method
                name (string): Name of the collection in the database

            Returns:
                mongoDB collection or None if no such collection exists
        '''
        if not self.check_for_collection(name):
            return None
        return self.client.get_database("TeamProj").get_collection(name)

    def create_collection(self, name):
        '''
        Creates a collection in the "TeamProj" database and returns it.

            Parameters:
                self (class): User class that contains this method
                name (string): Name of the collection in the database

            Returns:
                a new mongoDB collection or None if the collection would be invalid
        '''
        try:
            return self.client.get_database("TeamProj").create_collection(name)
        except pymongo.errors.CollectionInvalid:
            return None

    def delete_collection(self, name):
        '''
        Deletes a collection from the "TeamProj" database.

            Parameters:
                self (class): User class that contains this method
                name (string): Name of the collection in the database

            Returns:
                the dropped collection or None if there was an Operation Failure
        '''
        try:
            return self.client.get_database("TeamProj").drop_collection(name)
        except pymongo.errors.OperationFailure:
            return None

    def check_for_collection(self, name):
        '''
        Checks for a collection with the name given in the "TeamProj" database.

            Parameters:
                self (class): User class that contains this method
                name (string): Name of the collection in the database

            Returns:
                True if the collection exists and false otherwise
        '''

        if self.client.get_database("TeamProj").list_collection_names(filter={"name": name}) is not None:
            return True
        return False

    def id_to_string_post(ret_post):
        '''
        Modifies a post (in the format of this discussion board) recieved from mongoDB for return to a browser by converting ObjectID objects to strings

            Parameters:
                ret_post (post): Post to modify and return

            Returns:
                ret_post after modification
        '''
        ret_post['_id'] = str(ret_post['_id'])
        ret_post['user'] = str(ret_post['user'])

        for reply in ret_post['replies']:
            reply['user'] = str(reply['user'])

        return ret_post

    def get_thread(self, board):
        '''
        Gets all the posts from a specifed thread in the discussion board

            Parameters:
                self (class): User class that contains this method
                board (String): name of the discussion board to get

            Returns:
                a list of all posts in 'Discussion_<board>' with IDs converted to strings
        '''
        collection = self.get_collection('Discussion_' + urllib.parse.quote(board))

        if collection == None:
            return None

        posts = list(collection.find())
        for post in posts:
            post = User.id_to_string_post(post)

        return posts

    def get_discussion_index(self):
        '''
        Gets all the posts from the Discussion_Index thread

            Parameters:
                self (class): User class that contains this method

            Returns:
                a list of all groups in 'Discussion_Index' with IDs converted to strings
        '''
        collection = self.get_collection('Discussion_Index')
        groups = list(collection.find())

        for group in groups:
            group["_id"] = str(group["_id"])
        return groups

    def add_post(self, post_to_add, board):
        '''
        Gives a post it's date and an empty replies array then adds it to the specified discussion board

            Parameters:
                self (class): User class that contains this method
                post_to_add (post): Post to modify and  add
                board (String): name of the discussion board to add the post to

            Returns:
                the post after added to the collection and converted to a response using id_to_string_post or None if the board can not be found
        '''
        if not self.check_for_collection(board):
            return None
        collection = self.get_collection('Discussion_' + urllib.parse.quote(board))
        post_to_add['date'] = datetime.datetime.utcnow()
        post_to_add['user'] = ObjectId(post_to_add['user'])
        post_to_add['replies'] = []
        ret_id = collection.insert_one(post_to_add)
        post_to_add['_id'] = str(ret_id.inserted_id)
        post_to_add = User.id_to_string_post(post_to_add)
        return post_to_add

    def reply_to_post(self, toReplyTo, board):
        '''
        Gives a reply it's date then adds it to the specified post in the specifed discussion board

            Parameters:
                self (class): User class that contains this method
                toReplyTo (post): Post to modify and add with replies in it's replies array
                board (String): name of the discussion board to add the post to

            Returns:
                the post after added to the collection and converted to a response using id_to_string_post or None if the baord can not be found
        '''
        if not self.check_for_collection(board):
            return None

        collection = self.get_collection('Discussion_' + urllib.parse.quote(board))
        for post_to_add in toReplyTo['replies']:
            post_to_add['date'] = datetime.datetime.utcnow()
            post_to_add['user'] = ObjectId(post_to_add['user'])
            ret_post = collection.find_one_and_update(
                {'_id': ObjectId(toReplyTo['_id'])},
                {'$push':
                     {'replies': post_to_add}
                 },
                upsert=True,
                return_document=ReturnDocument.AFTER
            )
        ret_post = User.id_to_string_post(ret_post)
        return ret_post

    def add_thread(self, thread_to_add):
        '''
        Adds a thread to the Discussion_Index Collection and creates the collection for the thread

            Parameters:
                self (class): User class that contains this method
                thread_to_add (thread): A thread formatted inside of a group to add to Discussion Index

            Returns:
                the thread in group with information such as url, numPosts, dateCreated and lastModified added
        '''
        group_name = thread_to_add['groupName']
        threads = thread_to_add['threads']
        collection = self.get_collection('Discussion_Index')
        out = list()
        for thread in threads:
            thread['url'] = urllib.parse.quote(thread['name'], safe='')
            thread['numPosts'] = 0
            thread['dateCreated'] = datetime.datetime.utcnow()
            thread['lastModified'] = datetime.datetime.utcnow()
            if self.create_collection("Discussion_" + thread['url']) is not None:
                out.append(collection.find_one_and_update(
                    {'groupName': group_name},
                    {'$push':
                         {'threads': thread}
                     },
                    upsert=True,
                    return_document=ReturnDocument.AFTER
                ))
            else:
                return None
        for thread in out:
            thread['_id'] = str(thread['_id'])
        return out

    def update_thread(self, request, inc_post):
        '''
        updates the last modifed date of a specifed thread and increments it's numPosts by inc_post

            Parameters:
                self (class): User class that contains this method
                board (String): name of the discussion board to update
                thread (thread): A thread formatted inside of a group to update
                inc_post (int): the amount to increment the number of posts by

            Returns:
                a JSON statement refering to the updated thread or None if the thread could not be found
        '''
        collection = self.get_collection('Discussion_Index')
        out = list()
        for thread in request['threads']:
            if self.get_collection("Discussion_" + thread['url']) is not None:
                filters=[{'thread.url': thread['url']}]
                collection.find_one_and_update(
                    {'groupName': request['groupName']},
                    {'$set':
                        {'threads.$[thread].lastModified': datetime.datetime.utcnow()}
                    },
                    array_filters=filters,
                    return_document=ReturnDocument.AFTER
                )
                to_add = (collection.find_one_and_update(
                    {'groupName': request['groupName']},
                    {'$inc':
                        {'threads.$[thread].numPosts': inc_post}
                    },
                    array_filters=filters,
                    return_document=ReturnDocument.AFTER
                ))
                to_add['_id'] = str(to_add['_id'])
                out.append(to_add)
        return out

    def remove_thread(self, thread):
        '''
        Removes a thread to the Discussion_Index Collection and deletes the collection for the thread

            Parameters:
                self (class): User class that contains this method
                thread (thread): A thread formatted inside of a group to remove from Discussion Index

            Returns:
                the threads in group that were removed
        '''
        group_name = thread['groupName']
        threads = thread['threads']
        collection = self.get_collection('Discussion_Index')
        out = list()
        for thread in threads:
            self.delete_collection("Discussion_" + thread['url'])
            out.append(collection.find_one_and_update(
                {'groupName': group_name},
                {'$pull':
                     {'threads': {'url': thread['url']}},
                 }
            ))
            if collection.find_one({'groupName': group_name})['threads'] == []:
                collection.find_one_and_delete({'groupName': group_name})
        return out

    def remove_post(self, post, board):
        '''
        Removes a post from the specifed thread

            Parameters:
                self (class): User class that contains this method
                post (post): The post to remove, referenced by its ObjectID
                board (String): A thread name to remove the post from

            Returns:
                the post that was removed or None if the collection was not found
        '''
        if not self.check_for_collection('Discussion_' + urllib.parse.quote(board)):
            return None
        collection = self.get_collection('Discussion_' + urllib.parse.quote(board))
        collection.delete_one({'_id': ObjectId(post['_id'])})
        return post

    def find_by_filter(self, filters, collection, single_name):
        '''
        Returns the documents in a collection, filtered by user inputted criteria.

            Parameters:
                self (class): User class that contains this method
                name (string): Name to filter by
                status (string): Status to filter by
                role (string): Role to filter by
                specialization (string): Specialization to filter by
                collection (string): Collection to filter

            Returns:
                Filtered documents in the collection
        '''

        users = list(collection.find(filters))

        if single_name is not None:
            temp = list()
            for user in users:
                if (single_name in user["member_first_name"]) or (single_name in user["member_last_name"]):
                    temp.append(user)
            users = temp

        for user in users:
            user["_id"] = str(user["_id"])

        return users

    def add_user(self, user, collection):
        '''
        Adds a user to a collection. Returns the user that was added.

            Parameters:
                self (class): User class that contains this method
                user (JSON): JSON of user to be added to the collection
                collection (mongoDB collection): Collection in mongoDB to add the user to

            Returns:
                user_added (JSON): JSON of user added to the collection
        '''

        user_added = collection.insert(user)
        user_added = str(user_added)
        return user_added

    def remove_user(self, user_id, collection):
        '''
        Removes a user from a collection. Returns the number of users removed from the collection.

            Parameters:
                self (class): User class that contains this method
                user_id (string): id of user to be removed from the collection
                collection (mongoDB collection): Collection in mongoDB to remove the user from

            Returns:
                count (int): The number of users removed from the collection
        '''

        count = 0

        if user_id:
            resp = collection.delete_one({"_id": ObjectId(user_id)})
            count = resp.deleted_count
        return count

    def generate_session_token(self):
        return str(uuid4())

    def create_account(self, account_to_create):
        '''
        Creates an account in the Accounts collection. Returns a string and status code.

            Status Codes
            ------------
            200: Email associated with an existing account or username already taken
            201: Account successfully created

            Parameters:
                self (class): User class that contains this method
                account_to_create (JSON): JSON object of account to be created.

            Returns:
                message (string): Either an error message or session_token
                status_code (int): Status code
        '''
        collection = self.get_collection('Accounts')

        email = account_to_create['email']
        if collection.count({'email': email}) != 0:
            return (f'Account with email {email} already exists', 200)

        username = account_to_create['username']
        if collection.count({'username': username}) != 0:
            return (f'Username {username} already exists', 200)

        password = bytes(account_to_create['password'], encoding='utf-8')
        hashed = bcrypt.hashpw(password, bcrypt.gensalt())
        account_to_create['password'] = hashed

        session_token = self.generate_session_token()
        account_to_create['session_token'] = session_token

        collection.insert(account_to_create)
        return (session_token, 201)

    def login_account(self, account_to_login):
        '''
        Creates a new session token when an account successfully logs in.
        Returns a string and status code.

            Status Codes
            ------------
            200: Incorrect password or no account associated with the given email
            201: Account successfully logged in

            Parameters:
                self (class): User class that contains this method
                account_to_login (JSON): JSON object of account to be legged in.

            Returns:
                message (string): Either an error message or session_token
                status_code (int): Status code
        '''
        collection = self.get_collection('Accounts')

        email = account_to_login['email']
        account = collection.find_one({'email': email})
        if not account:
            return (f'No account associated to email: {email}', 200)

        given_pswd = bytes(account_to_login['password'], encoding='utf-8')
        if not bcrypt.checkpw(given_pswd, account['password']):
            print('here')
            return ('Incorrect password', 200)

        logged_in = collection.find_one_and_update(
            {'email': email},
            {'$set': {'session_token': self.generate_session_token()}},
            return_document=ReturnDocument.AFTER
        )

        return (logged_in['session_token'], 201)

    def is_account_logged_in(self, cookie_session):
        '''
        Checks if the session_token stored in the cookie is in the Accounts collection. Returns a string and status code.

            Status Codes
            ------------
            200: No account associated with the given session token
            201: Account is logged in

            Parameters:
                self (class): User class that contains this method
                cookie_session (String): Session token stored in the cookie

            Returns:
                message (string): Message stating if user is logged in or not.
                status_code (int): Status code
        '''
        collection = self.get_collection('Accounts')

        if collection.count({'session_token': cookie_session}) == 0:
            return ('Session token not linked to a logged in account', 200)

        return ('Account logged in', 201)

    def get_userid(self, cookie_session):
        '''
        Gets the userid associated to the session_token stored in the cookie. Returns a string and status code.

            Status Codes
            ------------
            200: No account associated with the given session token
            201: Account found

            Parameters:
                self (class): User class that contains this method
                cookie_session (String): Session token stored in the cookie

            Returns:
                message (string): Either an error message or the user id associated with the session token
                status_code (int): Status code
        '''
        collection = self.get_collection('Accounts')

        resp = self.is_account_logged_in(cookie_session)
        if resp[1] != 201:
            return resp

        account = collection.find_one({'session_token': cookie_session})
        return (str(account['_id']), 201)

    def get_username(self, user_id):
        '''
        Gets the username associated to the session_token stored in the cookie. Returns a string and status code.

            Status Codes
            ------------
            200: No account associated with the given session token
            201: Account found

            Parameters:
                self (class): User class that contains this method
                user_id (String): ObjectId of desired user

            Returns:
                message (string): Either an error message or the username associated with the user id
                status_code (int): Status code
        '''
        collection = self.get_collection('Accounts')

        account = collection.find_one({'_id': ObjectId(user_id)})
        if not account:
            return (f'No account with userid {user_id}', 200)
        return (account['username'], 201)

    def logout_account(self, session_token):
        collection = self.get_collection('Accounts')

        if collection.count({'session_token': session_token}) == 0:
            return ('Session token not linked to a logged in account', 200)

        collection.find_one_and_update(
            {'session_token': session_token},
            {'$set': {'session_token': ''}},
            return_document=ReturnDocument.AFTER
        )
        return ('Account logged out', 201)
