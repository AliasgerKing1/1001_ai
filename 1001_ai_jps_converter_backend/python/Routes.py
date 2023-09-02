from flask import Blueprint, jsonify, request
import os
import cv2
import requests
import json


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
        # If it's a PNG image, use OpenCV to load and save it as JPG
        input_imagePath = fr'C:\Users\Aliasger B\1001_ai\1001_ai_jps_converter_backend\assets\images\{image_name}.{ext}'

        if input_imagePath and isinstance(input_imagePath, str) and input_imagePath.lower().endswith('.png'):
            image = cv2.imread(input_imagePath)
            if image is not None:
                cv2.imwrite(jpg_output_path, image)
            else:
                return jsonify({'status': '500', 'message': 'Failed to load PNG image'})
    except Exception as e:
        return jsonify({'status': '500'})
@image_blueprint.route('/upload/png', methods=['POST'])
def upload_image_to_png():
    try:
        # Access the data sent from Node.js
        data_from_node = request.json  # Assuming data is sent as JSON
        input_image = data_from_node['image']  # Assuming the 'image' variable contains the path to the image
        output_folder = 'png'  # Replace with the path where you want to save the JPG image

        # Construct the output path for the JPG image
        split_url_by_slash = input_image.split('/')
        split_image_name_by_dot = split_url_by_slash[4].split('.')
        image_name = split_image_name_by_dot[0]
        ext = split_image_name_by_dot[1]
        jpg_output_path = os.path.join(output_folder, f'{image_name}.jpg')
        # If it's a PNG image, use OpenCV to load and save it as JPG
        input_imagePath = fr'C:\Users\Aliasger B\1001_ai\1001_ai_jps_converter_backend\assets\images\{image_name}.{ext}'

        url = "https://api.picsart.io/tools/1.0/removebg"
        payload = {
            "format": "PNG",
            "output_type": "cutout",
            "image_url": "https://i.ibb.co/BfgyF7B/Dream-Shaper-32-A-detailed-illustration-japan-citymagic-tshirt-0.jpg"  # Replace with the actual image URL
        }
        headers = { 
            "accept": "application/json",  # Add a comma here
            "x-picsart-api-key": "YeqqeloQrktlp8w1DpJlEApX0D8s1YVh"
        }

        response = requests.post(url, headers=headers, data=payload)


        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response
            data = json.loads(response.text)
            
            # Extract the "url" value
            url = data["data"]["url"]
                        
            # Send a GET request to the image URL
            response = requests.get(url)

            # Check if the request was successful (status code 200)
            if response.status_code == 200:
                # Extract the image content and save it to a file
                with open(f'{output_folder}/{image_name}.png', 'wb') as file:
                    file.write(response.content)
                print('Image downloaded successfully.')
            else:
                print('Failed to download the image.')
                        

        else:
            print(f"Error: {response.status_code}")

    except Exception as e:
        return jsonify({'status': '500'})
