from flask import Flask, request, jsonify 
from flask_cors import CORS 
import pymongo
from pymongo import ReturnDocument
import urllib.parse
import datetime
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
  #client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
  
  def get_collection(name):
    if(not User.check_for_collection(name)):
      return None
    client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
    collection = client.get_database("TeamProj").get_collection(name)
    return collection

  def create_collection(name):
    client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
    try:
      return client.get_database("TeamProj").create_collection(name)
    except pymongo.errors.CollectionInvalid:
      return None

  def delete_collection(name):
    client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
    try:
      return client.get_database("TeamProj").drop_collection(name)
    except pymongo.errors.OperationFailure:
      return None

  def check_for_collection(name):
    client = pymongo.MongoClient("mongodb+srv://TeamProjAdmin:teamproject308@cluster0.3xlma.mongodb.net/TeamProj?retryWrites=true&w=majority&tls=true&tlsAllowInvalidCertificates=true")
    if(client.get_database("TeamProj").list_collection_names(filter = {"name": name}) != None):
      return True
    return False
    
  def id_to_string_post(retPost):
    retPost['_id'] = str(retPost['_id'])
    retPost['user'] = str(retPost['user'])
    for reply in retPost['replies']:
      reply['_id'] = str(reply['_id'])
      reply['user'] = str(reply['user'])
    return retPost

  def add_post(posttoAdd, board):
    if(not User.check_for_collection(board)):
      return None
    collection = User.get_collection('Discussion_' + urllib.parse.quote(board))
    posttoAdd['date'] = datetime.datetime.utcnow()
    posttoAdd['user'] = ObjectId(posttoAdd['user'])
    posttoAdd['replies'] = []
    retID = collection.insert_one(posttoAdd)
    posttoAdd['_id'] = str(retID.inserted_id)
    posttoAdd = User.id_to_string_post(posttoAdd)
    return posttoAdd

  def reply_to_post(posttoAdd, toReplyTo, board):
    if(not User.check_for_collection(board)):
      return None
    collection = User.get_collection('Discussion_' + urllib.parse.quote(board))
    posttoAdd['date'] = datetime.datetime.utcnow()
    posttoAdd['user'] = ObjectId(posttoAdd['user'])
    retPost = collection.find_one_and_update(
      {'user': toReplyTo['user'], 'date': toReplyTo['date']},
      {'$push': 
        {'replies': posttoAdd}
      },
      upsert=True,
      return_document=ReturnDocument.AFTER
    )
    retPost = User.id_to_string_post(retPost)
    return retPost

  def add_thread(threadtoAdd):
    groupName = threadtoAdd['groupName']
    threads = threadtoAdd['threads']
    collection = User.get_collection('Discussion_Index')
    group = collection.find({'groupName': groupName})
    out = list()
    for thread in threads:
      thread['url'] = urllib.parse.quote(thread['name'], safe='')
      thread['numPosts']  = 0
      thread['dateCreated'] = datetime.datetime.utcnow()
      thread['lastModified'] = datetime.datetime.utcnow()
      if(User.create_collection("Discussion_" + thread['url']) != None):
        out.append(collection.find_one_and_update(
          {'groupName': groupName},
          {'$push': 
            { 'threads' : thread}
          },
          upsert=True,
          return_document=ReturnDocument.AFTER
        ))
      else:
        return None
    for thread in out:
      thread['_id'] = str(thread['_id'])
    return out

  def update_thread(threadtoUpdate):
    groupName = threadtoUpdate['groupName']
    threads = threadtoUpdate['threads']
    collection = User.get_collection('Discussion_Index')
    group = collection.find({'groupName': groupName})
    out = list()
    for thread in threads:
      thread['url'] = urllib.parse.quote(thread['name'], safe='')
      thread['lastModified'] = datetime.datetime.utcnow()
      if(User.create_collection("Discussion_" + thread['url']) != None):
        out.append(collection.find_one_and_update(
          {'groupName': groupName},
          {'$push': 
            { 'threads' : thread}
          },
          upsert=True,
          return_document=ReturnDocument.AFTER
        ))
      else:
        return None
    for thread in out:
      thread['_id'] = str(thread['_id'])
    return out
             
  def remove_thread(thread):
    groupName = thread['groupName']
    threads = thread['threads']
    collection = User.get_collection('Discussion_Index')
    group = collection.find({'groupName': groupName})
    out = list()
    for thread in threads:
      User.delete_collection("Discussion_" + thread['url'])
      out.append(collection.find_one_and_update(
        {'groupName': groupName},
        {'$pull': 
          {'threads': { 'url': thread['url']}},
        }
      ))
      if(collection.find_one({'groupName': groupName})['threads'] == []):
        collection.find_one_and_delete({'groupName': groupName})
    return out

    def remove_post(post, board):
      collection = User.get_collection('Discussion_' + urllib.parse.quote(board))
      if (collection.find_one() == None):
        return None
      retID = collection.delete_one({'_id' : posttoAdd['_id']})
      
      return posttoAdd

  # print(collection)
  def find_by_filter(self, name, status, role, position, specialization):
    collection = User.get_collection('TeamRoster')
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
      
    users = list(collection.find(filters))
    
    for user in users:
      user["_id"] = str(user["_id"])
    return users
  
  def add_user(self, user):
    collection = User.get_collection('TeamRoster')
    user_added = collection.insert(user)
    user_added = str(user_added)
    return user_added

  def get_thread(self, thread):
    collection = User.get_collection('Discussion_' + urllib.parse.quote(thread))
    if (collection.find_one() == None):
      return None
    posts = list(collection.find())

    for post in posts:
      post['_id'] = str(post['_id'])
      post['user'] = str(post['user'])
    return posts

  # def get_posts_in_thread(self, thread, name):
  #   collection = User.get_collection('Discussion_' + thread)
  #   groups = list(collection.find())
    
  #   for group in groups:
  #     group["_id"] = str(group["_id"])
  #   return groups


  def get_discussion_index(self):
    collection = User.get_collection('Discussion_Index')
    groups = list(collection.find())
    
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

@app.route('/test/<test_rule>')
def hello_world_test(test_rule):
  return jsonify(test_rule)

@app.route('/teamroster', methods=['GET', 'POST'])
def get_team_roster():
  if request.method == 'GET':
    name = request.args.get('name')
    status = request.args.get('status')
    role = request.args.get('role')
    position = request.args.get('position')
    specialization = request.args.get('specialization')

    resp = jsonify(User.find_by_filter(User, name, status, role, position, specialization))
    resp.status_code = 200
    return resp

  elif request.method == 'POST':
    usertoAdd = request.get_json()
    User.add_user(User, usertoAdd)

    resp = jsonify(usertoAdd)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE' :
    user = request.get_json()
    if user.remove():
      return user
    else :
      return jsonify({"error": "User not found"}), 404

@app.route('/discussion/<string:board>', methods=['GET', 'POST', 'DELETE', 'PUT', 'PATCH'])
def discussion_board(board):
  if request.method == 'GET':
    resp = User.get_thread(User, board)
    if resp == None:
      return jsonify({"error": "Thread not found"}), 404

    resp = jsonify(resp)
    resp.status_code = 200
    return resp

  elif request.method == 'POST':
    posttoAdd = request.get_json()
    resp = User.add_post(posttoAdd, board)
    if resp == None:
      return jsonify({"error": "Thread not found"}), 404

    resp = jsonify(posttoAdd)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE' :
    post = request.get_json()
    if User.remove_post(post) :
      return post
    else:
      return jsonify({"error": "Post not found"}), 404

  elif request.method == 'PUT' :
    return None

@app.route('/discussion', methods=['GET', 'POST', 'DELETE', 'PUT'])
def discussion():
  if request.method == 'GET':
    resp = jsonify(User.get_discussion_index(User))
    resp.status_code = 201
    return resp

  # New threads should be of this form 
  # (multiple threads can be added at one time)
  # {
  #     "groupName": "Robot",
  #     "threads": [{
  #         "name": "Frame Stuff",
  #         "description": "This is a thread about the robot frame"
  #     }]
  # }
  elif request.method == 'POST':
    threadtoAdd = request.get_json()
    resp = User.add_thread(User, threadtoAdd)
    if resp == None:
      return jsonify({"error": "Thread already exists"}), 409

    resp = jsonify(resp)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE' :
    thread = request.get_json()
    if User.remove_thread(thread) :
      return thread
    else :
      return jsonify({"error": "Thread not found"}), 404

  elif request.method == 'PUT' :
    return None
