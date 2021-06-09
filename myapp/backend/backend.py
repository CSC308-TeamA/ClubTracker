'''
Routes
------
    /test
        hello_world():
    /test/<test_rule>
        hello_world_test(test_rule):
    /
        check_user_logged_in():
    /teamroster
        get_team_roster():
        roster_get_link_parse(name, status, position, specialization):
    /discussion/<board>
        discussion_board(board):
    /discussion
        discussion():
    /userid/<session>
        user_id(session):
    /username/<userid>
        username(userid):
    /signup
        signup():
    /login
        login():
'''

import datetime
import urllib.parse
from uuid import uuid4
from flask import Flask, session, request, jsonify, make_response
from flask_cors import CORS
import pymongo
from pymongo import ReturnDocument
from bson import ObjectId
import bcrypt
from user_class import User


app = Flask(__name__)
app.config['SECRET_KEY'] = 'hey'
CORS(app, supports_credentials=True)

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

@app.route('/', methods=['GET'])
def check_user_logged_in():
    if request.method == 'GET':
        session_token = request.cookies.get('session_token')

        if session_token is None:
            resp = jsonify({"error": "No session token stored in cookie"})
            resp.status_code = 200
        else:
            login_check = User().is_account_logged_in(session_token)
            resp = make_response(session.get('session_token'))
            resp.status_code = login_check[1]

    return resp

@app.route('/teamroster', methods=['GET', 'POST', 'DELETE'])
def get_team_roster():
    '''
    Team Roster page: Performs GET, POST, or DELETE action based on the request method.

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
            User().find_by_filter(filters[0], collection, filters[1])
        )
        resp.status_code = 201

    elif request.method == 'POST':
        user_to_add = request.get_json()
        User().add_user(user_to_add, collection)

        resp = jsonify(user_to_add)
        resp.status_code = 201

    elif request.method == 'DELETE':
        user_id = request.args.get('_id')

        if User().remove_user(user_id, collection):
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

@app.route('/discussion/<board>', methods=['GET', 'POST', 'DELETE', 'PUT'])
def discussion_board(board):
    '''
    Discussion Board Thead pages: Performs GET, POST, DELETE, PUT, or PATCH action based on the requet method.

        Parameters:
            board

        Returns:
            dependant on method
    '''
    if request.method == 'GET':
        resp = User().get_thread(board)
        if resp is None:
            return jsonify({"error": "Thread not found"}), 404

        resp = jsonify(resp)
        resp.status_code = 200
        return resp

    elif request.method == 'POST':
        post_to_add = request.get_json()
        resp = User().add_post(post_to_add, board)
        if resp is None:
            return jsonify({"error": "Thread not found"}), 404

        resp = jsonify(post_to_add)
        resp.status_code = 201
        return resp

    elif request.method == 'DELETE':
        post = request.get_json()
        if User().remove_post(post, board):
            return post
        return jsonify({"error": "Post not found"}), 404

    elif request.method == 'PUT':
        reply = request.get_json()
        resp = User().reply_to_post(reply, board)
        if resp is None:
            return jsonify({"error": "Thread or Post not found"}), 404

        resp = jsonify(resp)
        resp.status_code = 201
        return resp

@app.route('/discussion', methods=['GET', 'POST', 'DELETE', 'PUT', 'PATCH'])
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

    elif request.method == 'POST':
        thread_to_add = request.get_json()
        resp = User().add_thread(thread_to_add)

        if resp is None:
            resp = jsonify({"error": "Thread already exists"})
            resp.status_code = 409
        else:
            resp = jsonify(resp)
            resp.status_code = 201

    elif request.method == 'DELETE':
        thread = request.get_json()
        if User().remove_thread(thread):
            resp = jsonify(thread)
            resp.status_code = 201
        else:
            resp = jsonify({"error": "Thread not found"})
            resp.status_code = 404

    elif request.method == 'PUT':
        thread =  request.get_json()
        out = User().update_thread(thread, 1)
        resp = jsonify(out)
        resp.status_code = 203

    elif request.method == 'PATCH':
        thread =  request.get_json()
        out = User().update_thread(thread, -1)
        resp = jsonify(out)
        resp.status_code = 203

    return resp

@app.route('/userid/<session>', methods=['GET'])
def user_id(session):
    '''
    Discussion Board: Performs GET action to acquire user id from session id.

        Parameters:
            session

        Returns:
            resp (JSON): Contains status code and either an error message or the ObjectId string of the user id.
    '''
    if request.method == 'GET':
        resp = jsonify(User().get_userid(session))
        resp.status_code = 201

    return resp

@app.route('/username/<userid>', methods=['GET'])
def username(userid):
    '''
    Discussion Board: Performs GET action to acquire username from userid

        Parameters:
            userid

        Returns:
            resp (JSON): Contains status code and either an error message or the username.
    '''
    if request.method == 'GET':
        resp = jsonify(User().get_username(userid))
        resp.status_code = 201

    return resp

@app.route('/signup', methods=['POST'])
def signup():
    '''
    Signup page: Performs POST action to create a new account.

        Parameters:
            None

        Returns:
            resp (JSON): Contains status code and either an error message or the ObjectId string of the account created.
    '''
    if request.method == 'POST':
        account_to_create = request.get_json()
        creating_account = User().create_account(account_to_create)

        resp = jsonify(creating_account[0])
        if creating_account[1] == 201:
            session['session_token'] = creating_account[0]
        resp.status_code = creating_account[1]

    return resp

@app.route('/login', methods=['PATCH'])
def login():
    '''
    Login page: Performs PATCH action to login the user.

        Parameters:
            None

        Returns:
            resp (JSON): Contains status code and object of account logged in
    '''
    if request.method == 'PATCH':
        account_to_login = request.get_json()
        login_account = User().login_account(account_to_login)

        resp = make_response(login_account[0])
        if login_account[1] == 201:
            session['session_token'] = login_account[0]
            
        resp.status_code = login_account[1]

    return resp
