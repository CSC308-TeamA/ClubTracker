import pymongo, re
from connection import Connect
from pymongo import MongoClient
from bson import ObjectId

# class Connect(object):
#     @staticmethod    
#     def get_connection():
#         return MongoClient("")
class Database(dict):

    __getattr__ = dict.get
    __delattr__ = dict.__delitem__
    __setattr__ = dict.__setitem__

    

# Correct format for inserting to database
    # {
    #   "name": "MemberONE",                  
    #   "status" : "Active",
    #   "role": "Member",   
    #   "position" : "Member",
    #   "specialization" : "N/A",
    #   "photo": "", 
    #   "email": "memberone@gmail.com",   
    #   "phone_number": "805-555-0001",   
    #   "quote" : "this is my quote here"
    # }

    @staticmethod    
    def get_connection():
        return Connect.get_connection()

    # def get_database():
    #     client = Database.get_connection()
    #     return client.get_database('2046Webpage')

    def save(self):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        if not self._id:
            db.TeamRoster.insert(self)
        else:
            db.TeamRoster.update(
                { "_id": ObjectId(self._id) }, self)
        self._id = str(self._id)
        client.close

    def reload(self):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        if self._id:
            result = db.TeamRoster.find_one({"_id": ObjectId(self._id)})
            if result :
                self.update(result)
                self._id = str(self._id)
                client.close
                return True
        client.close
        return False

    def remove(self):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        if self._id:
            resp = db.TeamRoster.delete_one({"_id": ObjectId(self._id)})
            client.close
            return resp.deleted_count
        client.close

class TeamRoster(Database):

    

    def find_all(self):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        users = list(db.TeamRoster.find())
        for user in users:
            user["_id"] = str(user["_id"]) #converting ObjectId to str
        client.closev
        return users

        #db.products.find( { name: { $regex: /^name/i } } )
        #regx = ({'files':{'$regex':'^File'}})
        #name, status, role, specialization
    def find_by_search(self, name, status, role, position, specialization):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        binaryCase = 0
        if name != None: binaryCase + 1
        if status != None: binaryCase + 2
        if role != None: binaryCase + 4
        if position != None: binaryCase + 8
        if specialization != None: binaryCase + 16
        users = None

        switch = {
            0: list(db.TeamRoster.find()),
            1: db.TeamRoster.find({ 'name': { '$regex': '^'+name , '$options': 'i' }}),
            5: db.TeamRoster.find({ 'name': { '$regex': '^'+name , '$options': 'i' }, 'role': { '$regex': '^'+role , '$options': 'i' } }),
            31: db.TeamRoster.find({'name': { '$regex': '^'+name , '$options': 'i' }, 'status': { '$regex': '^'+status , '$options': 'i' }, 'role': { '$regex': '^'+role , '$options': 'i' }, 'position': { '$regex': '^'+position , '$options': 'i' }, 'specialization': { '$regex': '^'+specialization , '$options': 'i' }})
        }
        users = switch[binaryCase]()
        
        for user in users:
            user["_id"] = str(user["_id"]) #converting ObjectId to str
        client.close
        return users

    def instert_one(user):
        client = Database.get_connection()
        db = client.get_database('2046Webpage')
        results = db.TeamRoster.instert_one(user)
        client.close
        return results.inserted_id

    def find_by_name(self, name):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        client.close
        return users

    def find_by_status(self, status):
        regx = re.compile("^"+status, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_role(self, role):
        regx = re.compile("^"+role, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_position(self, position):
        regx = re.compile("^"+position, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  


    def find_by_specialization(self, specialization):
        regx = re.compile("^"+specialization, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_name_status(self, name, status):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name_status(self, name, status):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(db.TeamRoster.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users
