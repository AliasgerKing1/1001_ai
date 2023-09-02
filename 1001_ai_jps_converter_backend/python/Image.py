from flask_cors import CORS
from flask import Flask
from Routes import image_blueprint

app = Flask(__name__)

CORS(app)
app.register_blueprint(image_blueprint, url_prefix='/image')
if __name__ == '__main__' :
    app.run(debug=True)
