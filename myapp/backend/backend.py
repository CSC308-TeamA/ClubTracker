'''
Classes:
    User

Functions:
    hello_world() --> string,         route: /test
    get_team_roster() --> JSON,       route: /teamroster
    discussion_board(board) --> JSON, route: /discussions/<board>

Misc Variables:
    app
'''

from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from bson import ObjectId

app = Flask(__name__)
CORS(app)


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
                mongoDB collection
        '''

        return self.client.get_database("TeamProj").get_collection(name)

    def find_by_filter(self, filters, collection):
        '''
        Returns the documents in a collection, filtered by user inputted criteria.

            Parameters:
                self (class): User class that contains this method
                name (string): Name to filter by
                status (string): Status to filter by
                role (string): Role to filter by
                position (string): Position to filter by
                specialization (string): Specialization to filter by
                collection (string): Collection to filter

            Returns:
                Filtered documents in the collection
        '''

        users = list(collection.find(filters))

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
        

@app.route('/test')
def hello_world():
    '''
    Test route. Returns the "test" request argument. If request argument is none, returns "fail".

        Parameters:
            None

        Returns:
            String: "test" request argument or "fail"
    '''

    test = request.args.get('test')
    if test is not None:
        return test
    return "fail"


@app.route('/teamroster', methods=['GET', 'POST', 'DELETE'])
def get_team_roster():
    '''
    Team Roster page: Performs GET, POST, or DELETE action based on the requet method.

        Parameters:
            None

        Returns:
            resp (JSON): Contains status code and object based on the request method.
    '''

    collection = User.get_collection(User, 'TeamRoster')

    if request.method == 'GET':
        name = request.args.get('name')
        status = request.args.get('status')
        role = request.args.get('role')
        position = request.args.get('position')
        specialization = request.args.get('specialization')

        filters = {}
        if name is not None:
            filters['name'] = {'$regex': f'{name}', '$options': 'i'}
        if status is not None:
            filters['status'] = status
        if role is not None:
            filters['role'] = role
        if position is not None:
            filters['position'] = position
        if specialization is not None:
            filters['specialization'] = specialization

        resp = jsonify(
            User.find_by_filter(
                User, filters, collection
            )
        )
        resp.status_code = 201

    elif request.method == 'POST':
        user_to_add = request.get_json()
        User.add_user(User, user_to_add, collection)

        resp = jsonify(user_to_add)
        resp.status_code = 201

    elif request.method == 'DELETE':
        user_id = request.args.get('_id')

        if User.remove_user(User, user_id, collection):
            resp = jsonify(user_id)
            resp.status_code = 201
        else:
            resp = jsonify({"error": "User not found"})
            resp.status_code = 404

    return resp


@app.route('/discussions/<board>', methods=['GET', 'POST', 'DELETE'])
def discussion_board(board):
    '''
    Discussion Board page: Performs GET, POST, or DELETE action based on the requet method.

        Parameters:
            board

        Returns:
            board
    '''

    return board
