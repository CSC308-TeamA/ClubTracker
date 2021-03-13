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
        { "_id": ObjectId(self._id) }, self)
    self._id = str(self._id)

  def reload(self):
    if self._id:
      result = self.collection.find_one({"_id": ObjectId(self._id)})
      if result :
        self.update(result)
        self._id = str(self._id)
        return True
    return False

  def remove(self):
    if self._id:
      resp = self.collection.delete_one({"_id": ObjectId(self._id)})
      return resp.deleted_count

class User(Model):
  db_client = pymongo.MongoClient('127.0.0.1', 27017)
  collection = db_client["TeamProject"]["TeamRoster"]

  def find_by_filter(self, name, status, role, position, specialization):
    filters = {}
    if name != None:
      filters['name'] = name
    if status != None:
      filters['status'] = status
    if role != None:
      filters['role'] = role
    if position != None:
      filters['position'] = position
    if specialization != None:
      filters['specialization'] = specialization
      
    users = list(self.collection.find(filters))
    
    for user in users:
      user["_id"] = str(user["_id"])
    return users
  
  def add_user(self, user):
    user_added = self.collection.insert(user)
    user_added._id = str(user_added._id)
    return user_added
  
  
@app.route('/test')
def hello_world():
  test = request.args.get('test')
  if (test != None):
    return test
  else:
    return "fail"

@app.route('/teamroster', methods=['GET', 'POST'])
def get_team_roster():
  if request.method == 'GET':
    name = request.args.get('name')
    status = request.args.get('status')
    role = request.args.get('role')
    position = request.args.get('position')
    specialization = request.args.get('specialization')

    filtered = User.find_by_filter(User, name, status, role, position, specialization)

    return jsonify(filtered)

  elif request.method == 'POST':
    usertoAdd = request.get_json()
    User.add_user(User, usertoAdd)
    resp = jsonify(usertoAdd)
    resp.status_code = 201
    return resp