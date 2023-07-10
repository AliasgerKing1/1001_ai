import os
import shutil

WebsiteName = "mkyd_react"


data = ""
with open("index.html", "r") as file:
    data = file.read()

# Specify the source and destination paths
source_path = r"C:\Users\ACER\Desktop\1001_ai\ReactApp"
destination_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
shutil.copytree(source_path, destination_path)


# Specify the source and destination paths
source_path2 = r"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\assets"
destination_path2 = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"
shutil.copytree(source_path2, destination_path2, dirs_exist_ok=True)

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


word_to_search = "<script src="
links = ""

with open("index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word

# Read the contents of the index.html file
with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
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
with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)

word_to_search = "<link rel"
links = ""

with open("index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word

# Read the contents of the index.html file
with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
    content = file.readlines()

# Find the line index where <div id="root"></div> appears
index = None
for i, line in enumerate(content):
    if '<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />' in line:
        index = i
        break

# Insert the new line after <div id="root"></div>
if index is not None:
    new_line = "\n" + links
    content.insert(index + 1, new_line)

# Write the modified content back to the file
with open(fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)


# """.replace("#name#", WebsiteName))

#     # Write the HTML output to file
# # with open("code/index.js", "w") as wFile:
# #     wFile.write("""
# # import React from 'react'

# # const Home = () => {
# #     return (
# #         <>
# #             #content#
# #         </>
# #     )
# # }

# # export default Home
# # """.replace("#content#", data))
    