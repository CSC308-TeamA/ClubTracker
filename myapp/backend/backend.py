import database
from flask import Flask, request, jsonify 
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

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

    if (request.args == {}):
      return {"team_roster": database.TeamRoster().find_all()}

    return {"team_roster": database.TeamRoster().find_by_search(name, status, role, position, specialization)}

  elif request.method == 'POST':
    userToAdd = request.get_json()
    newUser = database.TeamRoster(userToAdd)
    newUser.save()
    resp = jsonify(newUser), 201
    return resp

# def filter():
#   filtered = []
#     for p in proj_db['team_roster']:
#       if name != None and p['name'] != name:
#         continue
#       if status != None and p['status'] != status:
#         continue
#       if role != None and p['role'] != role:
#         continue
#       if position != None and p['position'] != position:
#         continue
#       if specialization != None and p['specialization'] != specialization:
#         continue
#       filtered.append(p)
#     return jsonify(filtered)