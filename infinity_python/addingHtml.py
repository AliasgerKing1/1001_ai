from functions.navTextConditions import nav_text_conditions
from detectRectangle import detection
import requests
import os
div_str = ""
nav_text = nav_text_conditions(2, "social")

image_path = "input_1.png"
output_directory = "cut_rectangles"

all_rectangles = detection(image_path, output_directory)

for i, rect_num in enumerate(os.listdir("cut_rectangles")):
    splited_rect = rect_num.split("_")
    first_num = splited_rect[1]
    second_num = splited_rect[2]
    third_num_by_dot = splited_rect[3]
    third_num = third_num_by_dot.split(".")[0]
    response = requests.get(
        f"https://api.ocr.space/parse/imageurl?apikey=K88933154488957&url=https://2430-122-175-178-174.ngrok-free.app/cut_rectangles/rectangle_{first_num}_{second_num}_{third_num}.png")
    if response.status_code == 200:
        # Success: Extract text from the response
        response_data = response.json()
        parsed_text = response_data['ParsedResults'][0]['ParsedText']
        text = parsed_text.strip()
        print("detected text -", text)
