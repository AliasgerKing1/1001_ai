from flask import Flask
from Routes import image_blueprint

app = Flask(__name__)

app.register_blueprint(image_blueprint, url_prefix='/image')
if __name__ == '__main__' :
    app.run(debug=True)

# import cv2

# image_path = 'automate_it.jpg'
# image = cv2.imread(image_path)
# height, width = image.shape[:2]

# print(f"Width: {width}, Height: {height}")
