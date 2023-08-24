import cv2
import os

def convert_png_to_jpg(input_folder, output_folder):
    # Create the output folder if it doesn't exist
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # List all PNG files in the input folder
    png_files = [f for f in os.listdir(input_folder) if f.endswith('.png')]

    for png_file in png_files:
        # Read the PNG image
        png_path = os.path.join(input_folder, png_file)
        img = cv2.imread(png_path)

        # Create the output JPG file path
        jpg_file = os.path.splitext(png_file)[0] + '.jpg'
        jpg_path = os.path.join(output_folder, jpg_file)

        # Save the image as a JPG
        cv2.imwrite(jpg_path, img)

        print(f'Converted {png_file} to {jpg_file}')

if __name__ == "__main__":
    input_folder = './png'  # Replace with the path to your PNG images folder
    output_folder = './jpg'  # Replace with the path where you want to save the JPG images

    convert_png_to_jpg(input_folder, output_folder)
