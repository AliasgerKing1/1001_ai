from flask import Flask
from Routes import image_blueprint

app = Flask(__name__)

app.register_blueprint(image_blueprint, url_prefix='/image/get')
if __name__ == '__main__' :
    app.run(debug=True)
