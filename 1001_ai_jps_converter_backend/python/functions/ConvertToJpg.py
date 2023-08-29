import cv2
import os

# Define a function to convert an image to JPG
def convert_to_jpg(input_image, output_folder):
    # Here, you can use OpenCV or any other library to convert the image to JPG
    # Example:
    img = cv2.imread(input_image)
    jpg_file = os.path.splitext(os.path.basename(input_image))[0] + '.jpg'
    jpg_path = os.path.join(output_folder, jpg_file)
    cv2.imwrite(jpg_path, img)
