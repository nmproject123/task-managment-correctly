from pymongo import MongoClient
from bson import ObjectId

class TasksBL:
    def __init__(self):
       self.__client = MongoClient(port=27017)
       self.__db = self.__client["Tasks"]
       self.__collection = self.__db["task"]

    def get_all_tasks(self):
        tasks = list(self.__collection.find({}))
        return tasks
    
    def get_task(self,id):
        task = self.__collection.find_one({"_id":ObjectId(id)})
        return task
    
    def add_task(self,obj):
        tasks = self.__collection.insert_one(obj)
        return 'Created with ID' + str(obj["_id"])
    
    def delete_task(self,id):
        print("id in deleated task : ",id)
        task = self.__collection.delete_one({"_id":ObjectId(id)})
        print("id tasks : ",task)
        return id
    
    def update_task(self,id,obj):
        task = self.__collection.update_one({"_id":ObjectId(id)},{"$set" : obj})
        # .find_one({"_id":ObjectId(id)})
        return 'updated'
    