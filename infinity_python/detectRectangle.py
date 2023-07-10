import cv2
import os

from functions.cropImages import crop_image


def is_rectangle_contained(outer_rect, inner_rect):
    outer_x, outer_y, outer_w, outer_h = outer_rect["X"], outer_rect[
        "Y"], outer_rect["Width"], outer_rect["Height"]
    inner_x, inner_y, inner_w, inner_h = inner_rect["X"], inner_rect[
        "Y"], inner_rect["Width"], inner_rect["Height"]

    if (
        inner_x >= outer_x and
        inner_y >= outer_y and
        inner_x + inner_w <= outer_x + outer_w and
        inner_y + inner_h <= outer_y + outer_h
    ):
        return True
    else:
        return False


def detection(image_path, output_directory):
    # read input image
    image = cv2.imread(image_path)

    # Get the width height, x and y coordinate
    width, height, channels = image.shape

    # Convert the image to grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Apply adaptive thresholding to obtain a binary image
    _, threshold = cv2.threshold(
        gray, 0, 255, cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)

    # Find contours in the binary image
    contuors, _ = cv2.findContours(
        threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
    # Create the output directory if it doesn't exist
    if not os.path.exists(output_directory):
        os.mkdir(output_directory)

    # Store the rectangles' information in a list
    all_rectangles = []
    for i, contuor in enumerate(contuors):
        # Approximate the contour to a polygon
        perimeter = cv2.arcLength(contuor, True)
        approx = cv2.approxPolyDP(contuor, 0.04 * perimeter, True)
        # Check if the polygon has four sides (a rectangle)
        if len(approx) == 4:
            # Get the bounding box of the rectangle
            x, y, width, height = cv2.boundingRect(approx)

            # Crop the rectangle from the original image
            cropped_image = image[y: y + height, x: x + width]
            # Save the cropped image as a separate file
            output_path = os.path.join(
                "parent_rectangles", f"rectangle{i + 1}.png")
            cv2.imwrite(output_path, cropped_image)
            print(f"Saved rectangle{i + 1} as {output_path}")
            # Store the rectangle's information
            all_rectangele_info = {
                "X": x,
                "Y": y,
                "Width": width,
                "Height": height,
                "Output_path": output_path
            }
            all_rectangles.append(all_rectangele_info)
            last_i = i + 1  # Update last_i with the current value of i
            img = crop_image(f"parent_rectangles/rectangle{i + 1}.png", 20)
            cv2.imwrite(output_path, img)

            # Convert the image to grayscale
            gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
            # Apply adaptive thresholding to obtain a binary image
            _, threshold = cv2.threshold(
                gray, 0, 255,  cv2.THRESH_BINARY_INV + cv2.THRESH_OTSU)
            # Find contours in the binary image
            child_contours, _ = cv2.findContours(
                threshold, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)
            # loop over child contour
            for j, child_contour in enumerate(child_contours):
                # Approximate the contour to a polygon
                child_perimiter = cv2.arcLength(child_contour, True)
                child_approx = cv2.approxPolyDP(
                    child_contour, 0.04 * child_perimiter, True)
                # Check if the polygon has four sides (a rectangle)
                if (len(child_approx) == 4):
                    child_x, child_y, child_width, child_height = cv2.boundingRect(
                        child_approx)
                    # Crop the child rectangle from the original image
                    child_cropped_image = img[child_y:child_y +
                                              child_height, child_x:child_x + child_width]
                    if last_i == 1:
                        # Save the child cropped image as a separate file
                        child_outputh_path = os.path.join(
                            output_directory, f"rectangle_{last_i}_{last_i + i}_{j + 1}.png")
                        cv2.imwrite(child_outputh_path, child_cropped_image)
                    elif last_i > 1:
                        # Save the child cropped image as a separate file
                        child_outputh_path = os.path.join(
                            output_directory, f"rectangle_{last_i}_{last_i + i - 1}_{j + 1}.png")
                        cv2.imwrite(child_outputh_path, child_cropped_image)
                    print(
                        f"saved child ractangle {last_i + i + 1}_{j + 1} as {child_outputh_path}")
                    # Store the child rectangle's information
                    child_rectangle_info = {
                        "x": child_x,
                        "y": child_y,
                        "width": child_width,
                        "height": child_height,
                        "output_path": child_outputh_path,
                    }
                    all_rectangles.append(child_rectangle_info)
                    # Iterate over the detected rectangles and check containment

                    inner_rectangles = []
                    outer_rectangles = []
                    for i, contuor in enumerate(contuors):
                        # Approximate the contour to a polygon
                        perimeter = cv2.arcLength(contuor, True)
                        approx = cv2.approxPolyDP(
                            contuor, 0.04 * perimeter, True)
                        # Check if the polygon has four sides (a rectangle)
                        if len(approx) == 4:
                            # Get the bounding box of the rectangle
                            x, y, width, height = cv2.boundingRect(approx)

                            # Crop the rectangle from the original image
                            cropped_image = image[y: y + height, x: x + width]
                            # Save the cropped image as a separate file
                            output_path = os.path.join(
                                "parent_rectangles", f"rectangle{i + 1}.png")
                            cv2.imwrite(output_path, cropped_image)
                            print(f"Saved rectangle{i + 1} as {output_path}")
                            # Store the rectangle's information
                            outer_rectangele_info = {
                                "X": x,
                                "Y": y,
                                "Width": width,
                                "Height": height,
                                "Output_path": output_path
                            }
                            inner_rectangles.append(outer_rectangele_info)
                            print(outer_rectangles)
                    for i, outer_rect in enumerate(outer_rectangles):
                        for j, inner_rect in enumerate(inner_rectangles):
                            print(outer_rect)
                            if i != j and is_rectangle_contained(outer_rect, inner_rect):
                                print(
                                    f"Rectangle{i + 1} contains Rectangle{j + 1}")
                    # Remove the parent rectangle image
                    if os.path.exists(os.path.join(output_directory, f"rectangle_{last_i}.png")):
                        os.remove(os.path.join(output_directory,
                                f"rectangle_{last_i}.png"))
                        all_rectangles.pop(last_i - 1)

    return all_rectangles
    # Get the width height, x and y coordinate


image_path = "input_2.png"
output_directory = "cut_rectangles"
detection(image_path, output_directory)
