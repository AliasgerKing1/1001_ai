from flask import Blueprint,jsonify, request
image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/generation', methods=['POST'])
def generateImage():
    
    return jsonify({'status' : "200"})
