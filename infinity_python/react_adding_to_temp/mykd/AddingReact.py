import os
import shutil
import re
WebsiteName = "mkyd_react"

# Specify the directory where you want to search for HTML files
def find_html_files(directory):
    html_files = []
    html_count = 0
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(".html"):
                html_files.append(os.path.join(root, file))
                html_count += 1
                if html_count > 4:
                    return html_files
    return html_files

directoryx = "H:\Mkyd\mykd"
# Call the function to find HTML files
html_files = find_html_files(directoryx)
file_path_xy = ""
# Print the list of HTML files
file_path_xy = html_files[0].rsplit("\\", 1)[0]

source_pathx = file_path_xy
# destination_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
destination_pathx = fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\{WebsiteName}"
# destination_pathx = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\{WebsiteName}"
shutil.copytree(source_pathx, destination_pathx)

lst1= os.listdir(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\{WebsiteName}")
# lst1= os.listdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\{WebsiteName}")
# lst1= os.listdir(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\{WebsiteName}")

unique_values = set()  # Create an empty set to store unique values

for index, router in enumerate(lst1) :

  routes0 = router.split(".")[0]
  router00 = routes0.split("-")[0]

  if router00 not in unique_values:
      unique_values.add(router00)
# ----------------------------------------------------------------------------------------------------------------   
# Specify the source and destination paths
source_path = r"H:\\1001_ai\ReactApp"
# source_path = r"C:\Users\ACER\Desktop\1001_ai\ReactApp"
# source_path = r"C:\Users\hp\Desktop\1001_ai\ReactApp"

# destination_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
destination_path = fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
# destination_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
shutil.copytree(source_path, destination_path)


# ----------------------------------------------------------------------------------------------------------------  

def check_and_copy_folders(directory):
    required_folders = ['bootstrap', 'css', 'fonts', 'images', 'js', 'video', 'dist', 'libs', 'jquery', 'audio']
    folder_count = 0

    # Iterate over the contents of the directory
    for folder_name in os.listdir(directory):
        folder_path = os.path.join(directory, folder_name)
        
        # Check if the current item is a directory and is in the required folders list
        if os.path.isdir(folder_path) and folder_name in required_folders:
            folder_count += 1

            # If at least two required folders are found, copy the entire directory
            if folder_count >= 2:
                destination_folder = r"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"
                shutil.copytree(directory, destination_folder)
                print("Folders copied successfully!")
                return

    print("Not enough folders found.")

# Specify the directory where you want to search for the required folders
directory = directoryx

# Call the function to check and copy folders if found
check_and_copy_folders(directory)




# ----------------------------------------------------------------------------------------------------------------  

    # Write the HTML output to file
with open("code/mkyd_react/package.json", "w") as wFile:
    wFile.write("""
{
    "name": "#name#",
    "version": "0.1.0",
    "private": true,
    "dependencies": {
      "@reduxjs/toolkit": "^1.9.5",
      "@testing-library/jest-dom": "^5.16.5",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
      "react": "^18.2.0",
      "react-dom": "^18.2.0",
      "react-redux": "^8.1.1",
      "react-router-dom": "^6.14.1",
      "react-scripts": "5.0.1",
      "web-vitals": "^2.1.4"
    },
    "scripts": {
      "start": "react-scripts start",
      "build": "react-scripts build",
      "test": "react-scripts test",
      "eject": "react-scripts eject"
    },
    "eslintConfig": {
      "extends": [
        "react-app",
        "react-app/jest"
      ]
    },
    "browserslist": {
      "production": [
        ">0.2%",
        "not dead",
        "not op_mini all"
      ],
      "development": [
        "last 1 chrome version",
        "last 1 firefox version",
        "last 1 safari version"
      ]
    }
  }
  
""".replace("#name#", WebsiteName))
  # ----------------------------------------------------------------------------------------------------------------  

word_to_search = "<script src="
links = ""

with open(f"theme/{WebsiteName}/index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word
  # ----------------------------------------------------------------------------------------------------------------  

# Read the contents of the index.html file
with open(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
# with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
# with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
    content = file.readlines()

# Find the line index where <div id="root"></div> appears
index = None
for i, line in enumerate(content):
    if '<div id="root"></div>' in line:
        index = i
        break

# Insert the new line after <div id="root"></div>
if index is not None:
    new_line = "\n" + links
    content.insert(index + 1, new_line)

# Write the modified content back to the file
with open(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
# with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
# with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)
  # ----------------------------------------------------------------------------------------------------------------  


word_to_search = "<link"
links = ""

with open(f"theme/{WebsiteName}/index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word
  # ----------------------------------------------------------------------------------------------------------------  

# Read the contents of the index.html file
with open(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
# with open(fr"C:\Users\hp\DesDktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
# with open(fr"C:\Users\ACER\DesDktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
    content = file.readlines()

# Find the line index where <div id="root"></div> appears
index2 = None
for i, line in enumerate(content):
    if ' <title>React App</title>' in line:
        index2 = i
        break

# Insert the new line after <div id="root"></div>
if index2 is not None:
    new_line2 = "\n" + links
    content.insert(index2 + 1, new_line2)

# Write the modified content back to the file
with open(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
# with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
# with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)
  # ----------------------------------------------------------------------------------------------------------------  
folder_path = fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages"  # Replace with the desired folder path
# folder_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages"  # Replace with the desired folder path
# folder_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages"  # Replace with the desired folder path

if "assets" in unique_values:
    unique_values.remove("assets")
    # print(f'directory "{"assets"}" removed from the array.')
else:
    print(f'directory "{"assets"}" does not exist in the array.')

  # ----------------------------------------------------------------------------------------------------------------  

capitalized_list = []
for string in unique_values:
    words = string.split()  # Split the string into words
    if words:
        capitalized_word = words[0].capitalize()  # Capitalize the first word
        words[0] = capitalized_word
        capitalized_string = ' '.join(words)  # Join the modified words back into a string
        capitalized_list.append(capitalized_string)
    else:
        capitalized_list.append(string)  # If the string is empty, keep it as it is
unique_values = capitalized_list
# Create multiple files
for i, x in enumerate( unique_values):  # Change the range or use any other method to generate different file names
  file_name = f'{x}.js'  # Example: file1.txt, file2.txt, ...
  file_path = os.path.join(folder_path, file_name)
  data = ""
  not_found = []
  if os.path.exists(f"theme/{WebsiteName}/{x}.html") :
    with open(f"theme/{WebsiteName}/{x}.html", "r") as file:
        data = file.read()
  else :
      not_found.append(f"theme/{WebsiteName}/{x}.html")
      # print(not_found)
  # Check if the file already exists
  if not os.path.exists(file_path):
      with open(file_path, 'w') as file:
          file.write("""
import React from 'react'

 const #page_name# = () => {
   return (
       <>
           #content#
       </>
   )
 }

 export default #page_name#

 """.replace("#content#", data).replace("#page_name#", x.capitalize())) # Write content to the file
      # print(f'Created file: {file_path}')
  else:
      print(f'File already exists: {file_path}')


    # ----------------------------------------------------------------------------------------------------------------  

  file_path = fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{x}.js"
  # file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{x}.js"
  # file_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{x}.js"
  # print(file_path)
  with open(file_path, 'r') as file:
    file_contents = file.read()

  modified_contents = file_contents.replace("<!--", "{/*").replace("-->", "*/}")

  with open(file_path, 'w') as file:
    file.write(modified_contents)

    # ----------------------------------------------------------------------------------------------------------------  

  with open(file_path, 'r') as file:
    file_contents = file.read()


  modified_contents = re.sub(r'<head>.*?</head>', '', file_contents, flags=re.DOTALL)

  with open(file_path, 'w') as file:
      file.write(modified_contents)

    # ---------------------------------------------------------------------------------------------------------------- 

  word_to_remove = '<!DOCTYPE'
  with open(file_path, 'r') as file:
      lines = file.readlines()

  modified_lines = [line for line in lines if word_to_remove not in line]

  with open(file_path, 'w') as file:
      file.writelines(modified_lines)

    # ----------------------------------------------------------------------------------------------------------------  

  word_to_remove = '<!doctype'
  with open(file_path, 'r') as file:
      lines = file.readlines()

  modified_lines = [line for line in lines if word_to_remove not in line]

  with open(file_path, 'w') as file:
      file.writelines(modified_lines)

    # ----------------------------------------------------------------------------------------------------------------  

  word_to_remove = '<html'
  with open(file_path, 'r') as file:
      lines = file.readlines()

  modified_lines = [line for line in lines if word_to_remove not in line]

  with open(file_path, 'w') as file:
      file.writelines(modified_lines)

    # ----------------------------------------------------------------------------------------------------------------    

  with open(file_path, 'r') as file:
    file_contents = file.read()

  modified_contents = file_contents.replace("<body", "<div").replace("</body", "</div")

  with open(file_path, 'w') as file:
    file.write(modified_contents)

    # ----------------------------------------------------------------------------------------------------------------  

  with open(file_path, 'r') as file:
      file_contents = file.read()

  modified_contents = re.sub(r'<img([^/]*?)>', r'<img\1/>', file_contents)

  with open(file_path, 'w') as file:
      file.write(modified_contents)

    # ----------------------------------------------------------------------------------------------------------------  

  
  with open(file_path, 'r') as file:
      file_contents = file.read()

  modified_contents = re.sub(r'<input([^/]*?)>', r'<input\1/>', file_contents)

  with open(file_path, 'w') as file:
      file.write(modified_contents)

    # ---------------------------------------------------------------------------------------------------------------- 
  
  with open(file_path, 'r') as file:
      file_contents = file.read()

  modified_contents = re.sub(r'<img(.*?)src=["\'](.*?)["\'](.*?)>', lambda match: f'<img{match.group(1)}src="/assets/{match.group(2).split("/assets/")[-1]}"{match.group(3)}>', file_contents)

  with open(file_path, 'w') as file:
      file.write(modified_contents)

    # ----------------------------------------------------------------------------------------------------------------  
  
  with open(file_path, 'r') as file:
    file_contents = file.read()

  modified_contents = file_contents.replace("/assets/assets/", "/assets/")

  with open(file_path, 'w') as file:
    file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------
  lines = []
  word = "Mirrored from" 
  new_line3 = "{/*This site Mirrored & recreated by 1001_ai*/}"
  # Read the file and store lines with the line replaced
  with open(file_path, 'r') as file:
      for line in file:
          if word not in line:
              lines.append(line)
          else:
              lines.append(new_line3 + '\n')

  # Rewrite the file with the modified lines
  with open(file_path, 'w') as file:
      for line in lines:
          file.write(line)
  # ----------------------------------------------------------------------------------------------------------------  
  

if not os.path.exists(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes"):
    os.mkdir(fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes")

file_path = fr"H:\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes\Router.js"

# if not os.path.exists(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes"):
#     os.mkdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes")

# file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes\Router.js"

# if not os.path.exists(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes"):
#     os.mkdir(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes")

# file_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes\Router.js"

with open(file_path, "w") as wFile:
    # Write the initial part of the file
    wFile.write("""
import { useRoutes } from "react-router-dom";
import React from 'react';

""")

    # Iterate over routes_arr and write each route
    for route in unique_values:
        wFile.write(f"import {route} from '../components/pages/{route}.js';\n")

    # Write the rest of the file
    wFile.write("""
const Router = () => {
    const router = useRoutes([
""")

    # Iterate over unique_values and write each route element
    for route in unique_values:
        wFile.write(f"        {{\n")
        wFile.write(f"            path: \"/{route.lower()}\",\n")
        wFile.write(f"            element: <{route} />\n")
        wFile.write(f"        }},\n")

    wFile.write("""
    ]);
    return router;
}

export default Router;
""")

  # ---------------------------------------------------------------------------------------------------------------- 