from flask import jsonify
import pymongo
from pymongo import ReturnDocument
import urllib.parse
import datetime
from bson import ObjectId

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

    client = pymongo.MongoClient(
        f'mongodb+srv://{mdb_username}:{sdb_password}@cluster0.3xlma.' +
        'mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&' +
        'tlsAllowInvalidCertificates=true'
    )

    def get_collection(self, name):
        '''
        Returns a collection from the "TeamProj" database.

            Parameters:
                self (class): User class that contains this method
                name (string): Name of the collection in the database

            Returns:
                mongoDB collection or None if no such collection exists
        '''
        if (not self.check_for_collection(self, name)):
            return None
        else:
            return self.client.get_database("TeamProj").get_collection(name)

    def create_collection(self, name):
        '''
          Createes a collection in the "TeamProj" database and returns it.

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
        if (self.client.get_database("TeamProj").list_collection_names(filter={"name": name}) != None):
            return True
        return False

    def id_to_string_post(retPost):
        '''
          Modifies a post (in the format of this discussion board) recieved from mongoDB for return to a browser by converting ObjectID objects to strings

              Parameters:
                  retPost (post): Post to modify and return

              Returns:
                  retPost after modification
          '''
        retPost['_id'] = str(retPost['_id'])
        retPost['user'] = str(retPost['user'])
        for reply in retPost['replies']:
            reply['_id'] = str(reply['_id'])
            reply['user'] = str(reply['user'])
        return retPost

    def get_thread(self, board):
        '''
          Gets all the posts from a specifed thread in the discussion board

              Parameters:
                  self (class): User class that contains this method
                  board (String): name of the discussion board to get

              Returns:
                  a list of all posts in 'Discussion_<board>' with IDs converted to strings
          '''
        collection = self.get_collection(self, 'Discussion_' + urllib.parse.quote(board))
        if (collection == None):
            return None
        posts = list(collection.find())

        for post in posts:
            post = self.id_to_string_post(post)
        return posts

    def get_discussion_index(self):
        '''
          Gets all the posts from the Discussion_Index thread

              Parameters:
                  self (class): User class that contains this method

              Returns:
                  a list of all groups in 'Discussion_Index' with IDs converted to strings
          '''
        collection = self.get_collection(self, 'Discussion_Index')
        groups = list(collection.find())

        for group in groups:
            group["_id"] = str(group["_id"])
        return groups

    def add_post(self, posttoAdd, board):
        '''
          Gives a post it's date and an empty replies array then adds it to the specified discussion board

              Parameters:
                  self (class): User class that contains this method
                  posttoAdd (post): Post to modify and  add
                  board (String): name of the discussion board to add the post to

              Returns:
                  the post after added to the collection and converted to a response using id_to_string_post or None if the board can not be found
          '''
        if (not self.check_for_collection(self, board)):
            return None
        collection = self.get_collection(self, 'Discussion_' + urllib.parse.quote(board))
        posttoAdd['date'] = datetime.datetime.utcnow()
        posttoAdd['user'] = ObjectId(posttoAdd['user'])
        posttoAdd['replies'] = []
        retID = collection.insert_one(posttoAdd)
        posttoAdd['_id'] = str(retID.inserted_id)
        posttoAdd = self.id_to_string_post(posttoAdd)
        return posttoAdd

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
        if (not self.check_for_collection(board)):
            return None
        collection = self.get_collection(self, 'Discussion_' + urllib.parse.quote(board))
        for posttoAdd in toReplyTo['replies']:
            posttoAdd['date'] = datetime.datetime.utcnow()
            posttoAdd['user'] = ObjectId(posttoAdd['user'])
            retPost = collection.find_one_and_update(
                {'_id': ObjectId(toReplyTo['_id'])},
                {'$push':
                     {'replies': posttoAdd}
                 },
                upsert=True,
                return_document=ReturnDocument.AFTER
            )
        retPost = self.id_to_string_post(retPost)
        return retPost

    def add_thread(self, threadtoAdd):
        '''
          Adds a thread to the Discussion_Index Collection and creates the collection for the thread

              Parameters:
                  self (class): User class that contains this method
                  threadtoAdd (thread): A thread formatted inside of a group to add to Discussion Index

              Returns:
                  the thread in group with information such as url, numPosts, dateCreated and lastModified added
          '''
        groupName = threadtoAdd['groupName']
        threads = threadtoAdd['threads']
        collection = self.get_collection(self, 'Discussion_Index')
        out = list()
        for thread in threads:
            thread['url'] = urllib.parse.quote(thread['name'], safe='')
            thread['numPosts'] = 0
            thread['dateCreated'] = datetime.datetime.utcnow()
            thread['lastModified'] = datetime.datetime.utcnow()
            if (self.create_collection("Discussion_" + thread['url']) != None):
                out.append(collection.find_one_and_update(
                    {'groupName': groupName},
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

    def update_thread(self, board, thread, incPost):
        '''
            updates the last modifed date of a specifed thread and increments it's numPosts by incPost

              Parameters:
                  self (class): User class that contains this method
                  board (String): name of the discussion board to update
                  thread (thread): A thread formatted inside of a group to update
                  incPost (int): the amount to increment the number of posts by

              Returns:
                  a JSON statement refering to the updated thread or None if the thread could not be found
          '''
        collection = self.get_collection(self, 'Discussion_Index')
        if (self.get_collection(self, "Discussion_" + urllib.parse.quote(board)) != None):
            collection.find_one_and_update(
                {'groupName': thread['groupName']},
                {'$push':
                     {'threads': {'lastModified': datetime.datetime.utcnow()}}
                 },
                array_filters={'url': urllib.parse.quote(board)},
                return_document=ReturnDocument.AFTER
            )
            collection.find_one_and_update(
                {'groupName': thread['groupName']},
                {'$inc':
                     {'threads': {'numPosts': incPost}}
                 },
                array_filters={'url': urllib.parse.quote(board)},
                return_document=ReturnDocument.AFTER
            )
        else:
            return None
        return jsonify("" + thread['url'] + "Has been updated"), 204

    def remove_thread(self, thread):
        '''
          Removes a thread to the Discussion_Index Collection and deletes the collection for the thread

              Parameters:
                  self (class): User class that contains this method
                  thread (thread): A thread formatted inside of a group to remove from Discussion Index

              Returns:
                  the threads in group that were removed
          '''
        groupName = thread['groupName']
        threads = thread['threads']
        collection = self.get_collection(self, 'Discussion_Index')
        out = list()
        for thread in threads:
            self.delete_collection(self, "Discussion_" + thread['url'])
            out.append(collection.find_one_and_update(
                {'groupName': groupName},
                {'$pull':
                     {'threads': {'url': thread['url']}},
                 }
            ))
            if (collection.find_one({'groupName': groupName})['threads'] == []):
                collection.find_one_and_delete({'groupName': groupName})
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
        if (not self.check_for_collection(self, 'Discussion_' + urllib.parse.quote(board))):
            return None
        collection = self.get_collection(self, 'Discussion_' + urllib.parse.quote(board))
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