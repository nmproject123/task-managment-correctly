from flask import Blueprint,jsonify,request
# from BL.tasks_bl import TasksBL
# from BL.tasks_bl import TasksBL
from BL.users_bl import UsersBl

from bson import ObjectId


users = Blueprint('users',__name__)

users_bl=UsersBl()

# get all
@users.route("/",methods=['GET'])
def get_all_users():
    print("get before send")
    users = users_bl.get_all_users()
    for user in users:
        user['_id'] = str(user['_id'])
    return jsonify(users)

@users.route("/<id>",methods=["GET"])
def get_task(id):
    user=users_bl.get_user(id)
    user['_id'] = str(user['_id'])
    return jsonify(user)

# add one
@users.route("/",methods=['POST'])
def add_user():
    # print("data:n ")
    data= request.json
    # print("data: ",data)
    status = users_bl.add_user(data)
    return jsonify(status)

@users.route("/check_user",methods=['POST'])
def check_user():
    # print("data:n ")
    data= request.json
    # print("data: ",data)
    status = users_bl.check_user(data)
    return jsonify(status)

@users.route("/check_user",methods=['POST'])
def check_user_exist():
    data= request.json
    print("data from check: ",data)
    status = users_bl.add_user(data)
    return jsonify(status)

# delete one
@users.route("/<id>/",methods=['DELETE'])
def delete_user(id):
    user = users_bl.delete_user(id)
    return jsonify(user)

# update one
@users.route("/<id>/",methods=['PUT'])
def update_user(id):
    u= request.json
    user = users_bl.update_user(id,u)
    return jsonify(user)

