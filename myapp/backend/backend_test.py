import pytest
from mockito import *
from backend import app as flask_app
from backend import *

'''
Note that these tests are designed to not interact with any actual MongoDB databases and focus more on testing
the logic of the backend (refactoring as needed to separate processing logic from any request/external calls).

Fixtures set-up an instance of our flask app for testing purposes.
'''


@pytest.fixture
def app():
    yield flask_app


@pytest.fixture
def client(app):
    return app.test_client()


def test_hello_world(client):
    res = client.get("/test")
    assert res.status_code == 200


def test_dynamic_routes(client):
    res = client.get("/test/dynamic")
    assert res.status_code == 200
    assert res.json == "dynamic"


def test_mock_user_delete_fail(client):
    when(User).get_collection(...).thenReturn()
    when(User).remove_user(...).thenReturn(False)

    res = client.delete("/teamroster?_id=1234")
    assert res.json == {"error": "User not found"}
    assert res.status_code == 404


def test_mock_user_delete_pass(client):
    when(User).get_collection(...).thenReturn()
    when(User).remove_user(...).thenReturn(True)

    res = client.delete("/teamroster?_id=abcd5678")
    assert res.json == "abcd5678"
    assert res.status_code == 201


def test_mock_user_discussion_post_already_exists(client):
    when(User).add_thread(...).thenReturn(None)

    res = client.post("/discussion")
    assert res.json == {"error": "Thread already exists"}
    assert res.status_code == 409


def test_mock_user_discussion_delete_fail(client):
    when(User).remove_thread(...).thenReturn(False)

    res = client.delete("/discussion")
    assert res.json == {"error": "Thread not found"}
    assert res.status_code == 404


def test_roster_get_only_single_name():
    response = roster_get_link_parse("Steve", None, None, None)

    assert response[0] == {}
    assert response[1] == "Steve"


def test_roster_get_full_name():
    response = roster_get_link_parse("Steve N", None, None, None)

    assert response[0]["member_first_name"] == {'$regex': "Steve", '$options': 'i'}
    assert response[0]["member_last_name"] == {'$regex': "N", '$options': 'i'}
    assert response[1] is None


def test_roster_get_all_parameters1():
    response = roster_get_link_parse("Steve", "Active", "Advisor", "Assembly")

    assert response[0]["member_status"] == "Active"
    assert response[0]["member_position"] == "Advisor"
    assert response[0]["member_specialization"] == {'$in': ["Assembly"]}
    assert response[1] == "Steve"


def test_roster_get_all_parameters2():
    response = roster_get_link_parse("Evets Abc", "Inactive", "Lead", "Design")

    assert response[0]["member_status"] == "Inactive"
    assert response[0]["member_position"] == "Lead"
    assert response[0]["member_specialization"] == {'$in': ["Design"]}
    assert response[0]["member_first_name"] == {'$regex': "Evets", '$options': 'i'}
    assert response[0]["member_last_name"] == {'$regex': "Abc", '$options': 'i'}
    assert response[1] is None