from pymongo import MongoClient
from bson import ObjectId

class UsersBl:
    def __init__(self):
       self.__client = MongoClient(port=27017)
       self.__db = self.__client["Tasks"]
       self.__collection = self.__db["user"]

    def get_all_users(self):
        users = list(self.__collection.find({}))
        return users
    
    def get_user(self,id):
        user = self.__collection.find_one({"_id":ObjectId(id)})
        return user


        
    def add_user(self,obj):
        self.__collection.insert_one(obj)
        return str(obj["_id"])
    
    def check_user(self,obj):
        name=obj.get('name')
        password=obj.get('password')
        user= self.__collection.find_one({"name": name})
        if user:
            id_user = user['_id']
            if user.get('password')==password:
                print("id_user : ",id_user)
                return f"{id_user}"
            else:
                print("you have error in password")
                return ("you have error in password")
        else:
            return("user not exist")
    
    def delete_user(self,id):
        user = self.__collection.delete_one({"_id":ObjectId(id)})
        return 'Deleted!'
    
    def update_user(self,id,obj):
        user = self.__collection.update_one({"_id":ObjectId(id)},{"$set" : obj})
        # .find_one({"_id":ObjectId(id)})
        return 'updated'
    