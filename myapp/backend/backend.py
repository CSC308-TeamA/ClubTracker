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
from user_class import User

app = Flask(__name__)
CORS(app)


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


@app.route('/test/<test_rule>')
def hello_world_test(test_rule):
  '''
    Test route. Returns the "test_rule" request argument to test dynamic routes

        Parameters:
            test_rule (String): a url string to return

        Returns:
            String: test_rule
    '''
  return jsonify(test_rule)


@app.route('/teamroster', methods=['GET', 'POST', 'DELETE'])
def get_team_roster():
    '''
    Team Roster page: Performs GET, POST, or DELETE action based on the requet method.

        Parameters:
            None

        Returns:
            resp (JSON): Contains status code and object based on the request method.
    '''

    collection = User().get_collection('TeamRoster')

    if request.method == 'GET':
        name = request.args.get('name')
        status = request.args.get('member_status')
        position = request.args.get('position')
        specialization = request.args.get('specialization')
        filters = roster_get_link_parse(name, status, position, specialization)

        resp = jsonify(
            User.find_by_filter(
                User, filters[0], collection, filters[1]
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


def roster_get_link_parse(name, status, position, specialization):
    filters = {}

    single_name = None
    if name is not None:
        split_names = name.split()

        if len(split_names) == 2:
            filters['member_first_name'] = {'$regex': f'{split_names[0]}', '$options': 'i'}
            filters['member_last_name'] = {'$regex': f'{split_names[1]}', '$options': 'i'}
            single_name = None
        else:
            single_name = split_names[0]

    if status is not None:
        filters['member_status'] = status
    if position is not None:
        filters['member_position'] = position
    if specialization is not None:
        filters['member_specialization'] = {'$in': [f'{specialization}']}

    return filters, single_name


@app.route('/discussions/<board>', methods=['GET', 'POST', 'DELETE'])
def discussion_board(board):
  '''
    Discussion Board Thead pages: Performs GET, POST, DELETE, PUT, or PATCH action based on the requet method.

        Parameters:
            board

        Returns:
            dependant on method
    '''
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
    if User.remove_post(post, board):
      return post
    else:
      return jsonify({"error": "Post not found"}), 404

  elif request.method == 'PUT' :
    reply = request.get_json()
    resp = User.reply_to_post(reply, board) 
    if resp == None:
      return jsonify({"error": "Thread or Post not found"}), 404

    resp = jsonify(reply)
    resp.status_code = 201
    return resp

  elif request.method == 'PATCH' :
    thread =  request.get_json()
    User.update_thread(board, thread)
    return None

@app.route('/discussion', methods=['GET', 'POST', 'DELETE'])
def discussion():
  '''
    Discussion Board Index page: Performs GET, POST, or DELETE action based on the requet method.

        Parameters:
            None

        Returns:
            dependant on method
    '''
  if request.method == 'GET':
    resp = jsonify(User().get_discussion_index())
    resp.status_code = 201
    return resp

  elif request.method == 'POST':
    threadtoAdd = request.get_json()
    resp = User().add_thread(threadtoAdd)
    if resp == None:
      return jsonify({"error": "Thread already exists"}), 409

    resp = jsonify(resp)
    resp.status_code = 201
    return resp

  elif request.method == 'DELETE':
    thread = request.get_json()
    if User().remove_thread(thread):
      return thread
    else:
      return jsonify({"error": "Thread not found"}), 404
