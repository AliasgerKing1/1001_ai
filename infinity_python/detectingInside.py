# from functions.navTextConditions import nav_text_conditions
from detectRectangle import detection
import requests
import os
div_str = ""
# nav_text = nav_text_conditions(2, "social")

image_path = "input_2.png"
output_directory = "cut_rectangles2"

all_rectangles = detection(image_path, output_directory)
