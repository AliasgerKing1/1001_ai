import cv2
def crop_image(image_path, crop_size) :
    # read input image
    image = cv2.imread(image_path)
    if image is None :
        print("Errors in loading image in path :", image_path)
        return None
    else :
        # Get the original image dimensions
        height, width, _ = image.shape

        # Calculate the crop coordinates
        left = crop_size
        top = crop_size
        right = width - crop_size
        bottom = height - crop_size

        # Crop the image
        cropped_image = image[top:bottom, left:right]

        return cropped_image
