from flask import Blueprint, jsonify, request
from Shared.SharingImageData import set_image_details, get_image_details
import cv2
import os

image_blueprint = Blueprint('image', __name__)

@image_blueprint.route('/upload', methods=['POST'])
def upload_image():
    try:
        # Access the data sent from Node.js
        data_from_node = request.json  # Assuming data is sent as JSON
        input_image = data_from_node['image']  # Assuming the 'image' variable contains the path to the PNG image
        output_folder = './jpg'  # Replace with the path where you want to save the JPG image
        
        # Check if there is an image path in the 'image' variable
        if input_image and isinstance(input_image, str) and input_image.lower().endswith('.png'):
            # Convert the provided PNG image to JPG
            convert_to_jpg(input_image, output_folder)
        else:
            # Handle the case where no valid image path is provided
            return jsonify({'status': '400', 'message': 'No valid image path provided'})

        # Return a response
        return jsonify({'status': '200', 'message': 'Data received and processed successfully'})
    except Exception as e:
        return jsonify({'status': '500', 'message': 'Error processing data: ' + str(e)})

@image_blueprint.route('/download', methods=['GET'])
def download_image():
    try:
        image = get_image_details()

        # Return a response
        return jsonify({'status': '200', 'message': 'Image converted and saved successfully'})
    except Exception as e:
        return jsonify({'status': '500', 'message': 'Error processing data: ' + str(e)})

# Define a function to convert an image to JPG
def convert_to_jpg(input_image, output_folder):
    # Here, you can use OpenCV or any other library to convert the image to JPG
    # Example:
    img = cv2.imread(input_image)
    jpg_file = os.path.splitext(os.path.basename(input_image))[0] + '.jpg'
    jpg_path = os.path.join(output_folder, jpg_file)
    cv2.imwrite(jpg_path, img)

    # You should implement the actual conversion logic based on your requirements