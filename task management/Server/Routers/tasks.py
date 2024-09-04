from flask import Blueprint,jsonify,request
# from BL.tasks_bl import TasksBL
from BL.tasks_bl import TasksBL

from bson import ObjectId


tasks = Blueprint('tasks',__name__)

tasks_bl=TasksBL()

# get all
@tasks.route("/",methods=['GET'])
def get_all_tasks():
    tasks = tasks_bl.get_all_tasks()
    for task in tasks:
        task['_id'] = str(task['_id'])
    return jsonify(tasks)

@tasks.route("/<id>",methods=["GET"])
def get_task(id):
    task=tasks_bl.get_task(id)
    task['_id'] = str(task['_id'])
    return jsonify(task)

# add one
@tasks.route("/",methods=['POST'])
def add_task():
    t = request.json
    status = tasks_bl.add_task(t)
    return jsonify(status)
# delete one
@tasks.route("/<id>/",methods=['DELETE'])
def delete_task(id):
    task = tasks_bl.delete_task(id)
    return jsonify(task)

# update one
@tasks.route("/<id>/",methods=['PUT'])
def update_task(id):
    t = request.json
    task = tasks_bl.update_task(id,t)
    return jsonify(task)

