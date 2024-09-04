from flask import Flask
from bson import ObjectId
import json


from flask_cors import CORS

from Routers.tasks import tasks
from Routers.users import users
class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)

app = Flask(__name__)
CORS(app)
app.url_map.strict_slashes = False
app.json_encoder = CustomJSONEncoder

app.register_blueprint(tasks, url_prefix="/tasks")
app.register_blueprint(users, url_prefix="/users")

app.run()
