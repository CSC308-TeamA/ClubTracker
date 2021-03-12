import pymongo, re
from bson import ObjectId

class Database(dict):

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

class TeamRoster(Database):
    users = list(self.collection.find())
        for user in users:
            user["_id"] = str(user["_id"]) #converting ObjectId to str
        return users

    def find_all(self):
        users = list(self.collection.find())
        for user in users:
            user["_id"] = str(user["_id"]) #converting ObjectId to str
        return users

        #db.products.find( { name: { $regex: /^name/i } } )
        #regx = ({'files':{'$regex':'^File'}})
        #name, status, role, specialization
    def find_by_search(self, name, status, role, position, specialization)
        int binaryCase
        if name != None: case + 1
        if status != None: case + 2
        if role != None: case + 4
        if position != None: case + 8
        if specialization != None: case + 16
        users = None

        switch(binaryCase) {
            case 0: users = list(self.collection.find())
            case 1: users = self.collection.find({'name':{'$' + name:'^Name'}})
            case 31: users = self.collection.find({'name':{'$' + name:'^Name'}, 'status':{'$' + status:'^Status'}, 'role':{'$' + role:'^Role'}, 'position':{'$' + position:'^Position'}, 'specialization':{'$' + specialization:'^Specialization'}})
        }
        for user in users:
            user["_id"] = str(user["_id"]) #converting ObjectId to str
        return users

    def find_by_name(self, name):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_status(self, status):
        regx = re.compile("^"+status, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_role(self, role):
        regx = re.compile("^"+role, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_position(self, position):
        regx = re.compile("^"+position, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  


    def find_by_specialization(self, specialization):
        regx = re.compile("^"+specialization, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users  

    def find_by_name_status(self, name, status):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users

    def find_by_name_status(self, name, status):
        regx = re.compile("^"+name, re.IGNORECASE)
        users = list(self.collection.find({ name: regx }))
        for user in users:
            user["_id"] = str(user["_id"])
        return users