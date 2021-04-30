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
  client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
  
  def get_collection(name):
    return client.get_database("TeamProj").get_collection(name)
  # db = client.TeamProj

  def create_collection(name):
    return client.get_database("TeamProj").createCollection(name)

  def delete_collection(name):
    return client.get_database("TeamProj").deleateCollection(name)

  # print(collection)
  def find_by_filter(self, name, status, role, position, specialization):
    collection = get_collection('TeamRoster')
    filters = {}
    if name != None:
      filters['name'] = { '$regex': f'{name}', '$options': 'i'}
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
    collection = get_collection('TeamRoster')
    user_added = self.collection.insert(user)
    user_added = str(user_added)
    return user_added

  def get_thread(self, thread):
    collection = get_collection('Discussion_' + thread)
    posts = list(self.collection.find())
    
    for post in posts:
      post["_id"] = str(post["_id"])
    return posts

  def get_posts_in_thread(self, thread, name):
    collection = get_collection('Discussion_' + thread)
    groups = list(self.collection.find())
    
    for group in groups:
      group["_id"] = str(group["_id"])
    return groups


  def get_discussion_index(self):
    collection = get_collection('Discussion_Index')
    groups = list(self.collection.find())
    
    for group in groups:
      group["_id"] = str(group["_id"])
    return groups

 
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

    resp = jsonify(User.find_by_filter(User, name, status, role, position, specialization))
    resp.status_code = 201
    return resp

  elif request.method == 'POST':
    usertoAdd = request.get_json()
    User.add_user(User, usertoAdd)
    
    resp = jsonify(usertoAdd)
    resp.status_code = 201
    return resp

@app.route('/discussion/<board>', methods=['GET', 'POST', 'DELETE'])
def discussion_board(board):
  if request.method == 'GET':
    resp = jsonify(User.get_thread(User, board))
    resp.status_code = 201
    return resp

  elif request.method == 'POST':
    posttoAdd = request.get_json()
    User.add_post(User, posttoAdd)

    resp = jsonify(posttoAdd)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE':
    posttoAdd = request.get_json()
    User.remove_post(User, posttoAdd)

    resp = jsonify(posttoAdd)
    resp.status_code = 201
    return resp

@app.route('/discussion', methods=['GET', 'POST', 'DELETE'])
def discussion_board(board):
  if request.method == 'GET':
    resp = jsonify(User.get_index(User))
    resp.status_code = 201
    return resp

  elif request.method == 'POST':
    posttoAdd = request.get_json()
    User.add_post(User, posttoAdd)

    resp = jsonify(posttoAdd)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE':
    return None
    
    
  return board
