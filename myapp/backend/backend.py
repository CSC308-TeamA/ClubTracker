from flask import Flask, request, jsonify
from flask_cors import CORS
import pymongo
from bson import ObjectId

app = Flask(__name__)
CORS(app)


class Model(dict):
    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    def save(self):
        if not self._id:
            self.collection.insert(self)
        else:
            self.collection.update(
                {"_id": ObjectId(self._id)}, self)
        self._id = str(self._id)

    def reload(self):
        if self._id:
            result = self.collection.find_one({"_id": ObjectId(self._id)})
            if result:
                self.update(result)
                self._id = str(self._id)
                return True
        return False

    def remove(self):
        if self._id:
            resp = self.collection.delete_one({"_id": ObjectId(self._id)})
            return resp.deleted_count


class User(Model):
    mdb_username = 'TeamProjAdmin'
    sdb_password = 'teamproject308'

    client = pymongo.MongoClient(
        f'mongodb+srv://{mdb_username}:{sdb_password}@cluster0.3xlma.' +
        'mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&' +
        'tlsAllowInvalidCertificates=true'
    )

    def getCollection(self, id):
        return self.client.get_database("TeamProj").get_collection(id)

    def find_by_filter(self, name, status, role, position, specialization, collection):
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

        users = list(collection.find(filters))

        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def add_user(self, user, collection):
        user_added = collection.insert(user)
        user_added = str(user_added)
        return user_added

    def remove_user(self, user_id, collection):
        if user_id:
            resp = collection.delete_one({"_id": ObjectId(user_id)})
            return resp.deleted_count


@app.route('/test')
def hello_world():
    test = request.args.get('test')
    if test is not None:
        return test
    else:
        return "fail"


@app.route('/teamroster', methods=['GET', 'POST', 'DELETE'])
def get_team_roster():
    collection = User.getCollection(User, 'TeamRoster')

    if request.method == 'GET':
        name = request.args.get('name')
        status = request.args.get('status')
        role = request.args.get('role')
        position = request.args.get('position')
        specialization = request.args.get('specialization')

        resp = jsonify(
            User.find_by_filter(
                User, name, status, role, position, specialization, collection
            )
        )
        resp.status_code = 201
        return resp

    elif request.method == 'POST':
        usertoAdd = request.get_json()
        User.add_user(User, usertoAdd, collection)

        resp = jsonify(usertoAdd)
        resp.status_code = 201
        return resp

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
    return board
