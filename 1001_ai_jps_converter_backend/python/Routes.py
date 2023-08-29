from flask import Blueprint, jsonify, request
import os
import cv2

image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/upload', methods=['POST'])
def upload_image():
    try:
        # Access the data sent from Node.js
        data_from_node = request.json  # Assuming data is sent as JSON
        input_image = data_from_node['image']  # Assuming the 'image' variable contains the path to the image
        output_folder = './jpg'  # Replace with the path where you want to save the JPG image

        # Construct the output path for the JPG image
        split_url_by_slash = input_image.split('/')
        split_image_name_by_dot = split_url_by_slash[4].split('.')
        image_name = split_image_name_by_dot[0]
        ext = split_image_name_by_dot[1]
        jpg_output_path = os.path.join(output_folder, f'{image_name}.jpg')
        if ext == 'png':
            # If it's a PNG image, use OpenCV to load and save it as JPG
            input_imagePath = fr'C:\Users\Aliasger B\1001_ai\1001_ai_jps_converter_backend\assets\images\{image_name}.{ext}'

            if input_imagePath and isinstance(input_imagePath, str) and input_imagePath.lower().endswith('.png'):
                image = cv2.imread(input_imagePath)
                if image is not None:
                    cv2.imwrite(jpg_output_path, image)
                else:
                    return jsonify({'status': '500', 'message': 'Failed to load PNG image'})

        elif ext == 'svg':
                return jsonify({'status': '500', 'message': 'Failed to load SVG image'})

    except Exception as e:
        return jsonify({'status': '500', 'message': 'Error processing data: ' + str(e)})
