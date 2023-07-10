import os

import shutil

import re

WebsiteName = "mkyd_react"

routes_arr = "Home"

small_routes_arr = routes_arr.lower()

data = ""
with open("theme/index.html", "r") as file:
    data = file.read()

# Specify the source and destination paths
# source_path = r"C:\Users\ACER\Desktop\1001_ai\ReactApp"
source_path = r"C:\Users\hp\Desktop\1001_ai\ReactApp"
# destination_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
destination_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
shutil.copytree(source_path, destination_path)


# Specify the source and destination paths
# source_path2 = r"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme/assets"
source_path2 = r"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme/assets"
# destination_path2 = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"

destination_path2 = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"
shutil.copytree(source_path2, destination_path2, dirs_exist_ok=True)
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

with open("theme/index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word
  # ----------------------------------------------------------------------------------------------------------------  

# Read the contents of the index.html file
with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
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
  # ----------------------------------------------------------------------------------------------------------------  

# Write the modified content back to the file
with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)

word_to_search = "<link rel"
links = ""

with open("theme/index.html", "r") as file:
    lines = file.readlines()  # Read all lines of the file into a list
    
    for line in lines:
        if word_to_search in line:
            links += line  # Append the line to the 'links' variable

# 'links' now contains all the lines that contain the specific word
  # ----------------------------------------------------------------------------------------------------------------  

# Read the contents of the index.html file
with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
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


  # ----------------------------------------------------------------------------------------------------------------  

# Write the modified content back to the file
with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
    file.writelines(content)

if not os.path.exists(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\home") :
    os.mkdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\home")
#     Write the HTML output to file
with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\home\Home.js", "w") as wFile:
    wFile.write("""
import React from 'react'

const Home = () => {
    return (
        <>
            #content#
        </>
    )
}

export default Home
""".replace("#content#", data))
  # ----------------------------------------------------------------------------------------------------------------  

file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"
with open(file_path, 'r') as file:
  file_contents = file.read()

modified_contents = file_contents.replace("<!--", "{/*").replace("-->", "*/}")

with open(file_path, 'w') as file:
  file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------  

file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"
with open(file_path, 'r') as file:
  file_contents = file.read()


modified_contents = re.sub(r'<head>.*?</head>', '', file_contents, flags=re.DOTALL)

with open(file_path, 'w') as file:
    file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------  
file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"

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

word_to_remove = '</html>'
with open(file_path, 'r') as file:
    lines = file.readlines()

modified_lines = [line for line in lines if word_to_remove not in line]

with open(file_path, 'w') as file:
    file.writelines(modified_lines)

  # ----------------------------------------------------------------------------------------------------------------  

file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"
with open(file_path, 'r') as file:
  file_contents = file.read()

modified_contents = file_contents.replace("<body", "<div").replace("</body", "</div")

with open(file_path, 'w') as file:
  file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------  

file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"

with open(file_path, 'r') as file:
    file_contents = file.read()

modified_contents = re.sub(r'<img(.*?)>', r'<img\1/>', file_contents)

with open(file_path, 'w') as file:
    file.write(modified_contents)


  # ----------------------------------------------------------------------------------------------------------------  
file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"

with open(file_path, 'r') as file:
      file_contents = file.read()

modified_contents = re.sub(r'<input(.*?)>', r'<input\1/>', file_contents)

with open(file_path, 'w') as file:
    file.write(modified_contents)

  # ---------------------------------------------------------------------------------------------------------------- 
  #  
file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"

with open(file_path, 'r') as file:
    file_contents = file.read()

modified_contents = re.sub(r'<img(.*?)src=["\'](.*?)["\'](.*?)>', lambda match: f'<img{match.group(1)}src="/assets/{match.group(2).split("/assets/")[-1]}"{match.group(3)}>', file_contents)

with open(file_path, 'w') as file:
    file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------  

file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{routes_arr}.js"
with open(file_path, 'r') as file:
  file_contents = file.read()

modified_contents = file_contents.replace("/assets/assets/", "/assets/")

with open(file_path, 'w') as file:
  file.write(modified_contents)

  # ----------------------------------------------------------------------------------------------------------------  
  file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes\Router.js"

if not os.path.exists(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes") :
    os.mkdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes")
    
#     Write the HTML output to file
with open(file_path, "w") as wFile:
    wFile.write("""
import { useRoutes } from "react-router-dom"

import React from 'react'
import #link# from "../components/pages/#smllink#/#link#.js"
const Router = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <#link# />
        },
    ])
    return (router)
}

export default Router

""".replace("#link#", routes_arr).replace("#smllink#", small_routes_arr))
  # ----------------------------------------------------------------------------------------------------------------  













































# import os

# import shutil

# import re

# WebsiteName = "mkyd_react"

# lst = os.listdir("theme")
# if_have_dual_part1 = []
# if_have_dual_part2 = []
# new_arr = []
# for lstDir in enumerate(lst):
#     lst1 = lstDir[1]
#     lst_split = lst1.split(".")[0]
    
#     if_have_dual_part1.append(lst_split.split("-")[0])
#     new_arr.append(lst_split.split("-")[0])
    
#     if len(lst_split.split("-")) == 2:
#         if_have_dual_part2.append(lst_split.split("-")[1])
        

# if "assets" in if_have_dual_part1:
#     if_have_dual_part1.remove("assets")
#   # ----------------------------------------------------------------------------------------------------------------  

# if "index" in if_have_dual_part1:
#     for i in range(len(if_have_dual_part1)):
#         if if_have_dual_part1[i] == "index":
#             if_have_dual_part1[i] = "home"
#   # ----------------------------------------------------------------------------------------------------------------  

# if "assets" in new_arr:
#   new_arr.remove("assets")
#   # ----------------------------------------------------------------------------------------------------------------  

# if "home" in if_have_dual_part1:
#     for i in range(len(if_have_dual_part1)):
#         if if_have_dual_part1[i] == "home":
#             new_arr[i] = "index"
#   # ----------------------------------------------------------------------------------------------------------------  
# if_have_dual_part1 = list(set(if_have_dual_part1))
# new_arr = list(set(new_arr))

# routes_arr = if_have_dual_part1

# routes_arr = [string.split()[0].capitalize() + ' ' + ' '.join(string.split()[1:]) for string in routes_arr]
# small_routes_arr = ""

#   # ----------------------------------------------------------------------------------------------------------------  

# data =""      
# for index, name_lst in enumerate(routes_arr) : 
#     name_lst = name_lst.strip()
#     words = name_lst.split()  # Split the string into words
#     for word in words:
#         lowercase_word = word.lower()
#         small_routes_arr = lowercase_word
#     for index, new_name_lst in enumerate(new_arr) :     
#       if os.path.exists(f"theme/{new_name_lst}")  :
#         with open(f"theme/{new_name_lst}.html", "r") as file:
#             data = file.read()

#     # Specify the source and destination paths
#     # source_path = r"C:\Users\ACER\Desktop\1001_ai\ReactApp"
#     source_path = r"C:\Users\hp\Desktop\1001_ai\ReactApp"
#     # destination_path = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
#     destination_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}"
#     shutil.copytree(source_path, destination_path)


#     # Specify the source and destination paths
#     # source_path2 = r"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\assets"
#     source_path2 = r"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\theme\assets"
#     # destination_path2 = fr"C:\Users\ACER\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"

#     destination_path2 = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\assets"
#     shutil.copytree(source_path2, destination_path2, dirs_exist_ok=True)
      # ----------------------------------------------------------------------------------------------------------------  

#         # Write the HTML output to file
#     with open("code/mkyd_react/package.json", "w") as wFile:
#         wFile.write("""
#     {
#         "name": "#name#",
#         "version": "0.1.0",
#         "private": true,
#         "dependencies": {
#           "@reduxjs/toolkit": "^1.9.5",
#           "@testing-library/jest-dom": "^5.16.5",
#           "@testing-library/react": "^13.4.0",
#           "@testing-library/user-event": "^13.5.0",
#           "react": "^18.2.0",
#           "react-dom": "^18.2.0",
#           "react-redux": "^8.1.1",
#           "react-router-dom": "^6.14.1",
#           "react-scripts": "5.0.1",
#           "web-vitals": "^2.1.4"
#         },
#         "scripts": {
#           "start": "react-scripts start",
#           "build": "react-scripts build",
#           "test": "react-scripts test",
#           "eject": "react-scripts eject"
#         },
#         "eslintConfig": {
#           "extends": [
#             "react-app",
#             "react-app/jest"
#           ]
#         },
#         "browserslist": {
#           "production": [
#             ">0.2%",
#             "not dead",
#             "not op_mini all"
#           ],
#           "development": [
#             "last 1 chrome version",
#             "last 1 firefox version",
#             "last 1 safari version"
#           ]
#         }
#       }
      
#     """.replace("#name#", WebsiteName))
#       # ----------------------------------------------------------------------------------------------------------------  

#     word_to_search = "<script src="
#     links = ""

#     with open(f"theme/{new_name_lst}.html", "r") as file:
#         lines = file.readlines()  # Read all lines of the file into a list
        
#         for line in lines:
#             if word_to_search in line:
#                 links += line  # Append the line to the 'links' variable

#     # 'links' now contains all the lines that contain the specific word
#       # ----------------------------------------------------------------------------------------------------------------  

#     # Read the contents of the index.html file
#     with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
#         content = file.readlines()

#     # Find the line index where <div id="root"></div> appears
#     index = None
#     for i, line in enumerate(content):
#         if '<div id="root"></div>' in line:
#             index = i
#             break

#     # Insert the new line after <div id="root"></div>
#     if index is not None:
#         new_line = "\n" + links
#         content.insert(index + 1, new_line)
#       # ----------------------------------------------------------------------------------------------------------------  

#     # Write the modified content back to the file
#     with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
#         file.writelines(content)

#     word_to_search = "<link rel"
#     links = ""
#     if os.path.exists(f"theme/{small_routes_arr}.html") :
#       with open(f"theme/{small_routes_arr}.html") as file:
#           lines = file.readlines()  # Read all lines of the file into a list
          
#           for line in lines:
#               if word_to_search in line:
#                   links += line  # Append the line to the 'links' variable

#       # 'links' now contains all the lines that contain the specific word
#         # ----------------------------------------------------------------------------------------------------------------  

#     # Read the contents of the index.html file
#     with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'r') as file:
#         content = file.readlines()

#     # Find the line index where <div id="root"></div> appears
#     index = None
#     for i, line in enumerate(content):
#         if '<link rel="manifest" href="%PUBLIC_URL%/manifest.json" />' in line:
#             index = i
#             break

#     # Insert the new line after <div id="root"></div>
#     if index is not None:
#         new_line = "\n" + links
#         content.insert(index + 1, new_line)


#       # ----------------------------------------------------------------------------------------------------------------  

#     # Write the modified content back to the file
#     with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\public\index.html", 'w') as file:
#         file.writelines(content)

#     if not os.path.exists(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}") :
#         os.mkdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}")
#     #     Write the HTML output to file
#     with open(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js", "w") as wFile:
#         wFile.write("""
#     import React from 'react'

#     const Home = () => {
#         return (
#             <>
#                 #content#
#             </>
#         )
#     }

#     export default Home
#     """.replace("#content#", data))
#       # ----------------------------------------------------------------------------------------------------------------  

#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"

#     with open(file_path, 'r') as file:
#       file_contents = file.read()

#     modified_contents = file_contents.replace("<!--", "{/*").replace("-->", "*/}")

#     with open(file_path, 'w') as file:
#       file.write(modified_contents)

#       # ----------------------------------------------------------------------------------------------------------------  

#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"
#     with open(file_path, 'r') as file:
#       file_contents = file.read()


#     modified_contents = re.sub(r'<head>.*?</head>', '', file_contents, flags=re.DOTALL)

#     with open(file_path, 'w') as file:
#         file.write(modified_contents)

#       # ----------------------------------------------------------------------------------------------------------------  
#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"

#     word_to_remove = '<!doctype'
#     with open(file_path, 'r') as file:
#         lines = file.readlines()

#     modified_lines = [line for line in lines if word_to_remove not in line]

#     with open(file_path, 'w') as file:
#         file.writelines(modified_lines)

#       # ----------------------------------------------------------------------------------------------------------------  

#     word_to_remove = '<html'
#     with open(file_path, 'r') as file:
#         lines = file.readlines()

#     modified_lines = [line for line in lines if word_to_remove not in line]

#     with open(file_path, 'w') as file:
#         file.writelines(modified_lines)

#       # ----------------------------------------------------------------------------------------------------------------  

#     word_to_remove = '</html>'
#     with open(file_path, 'r') as file:
#         lines = file.readlines()

#     modified_lines = [line for line in lines if word_to_remove not in line]

#     with open(file_path, 'w') as file:
#         file.writelines(modified_lines)

#       # ----------------------------------------------------------------------------------------------------------------  

#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"
#     with open(file_path, 'r') as file:
#       file_contents = file.read()

#     modified_contents = file_contents.replace("<body", "<div").replace("</body", "</div")

#     with open(file_path, 'w') as file:
#       file.write(modified_contents)

#       # ----------------------------------------------------------------------------------------------------------------  

#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"

#     with open(file_path, 'r') as file:
#         file_contents = file.read()

#     modified_contents = re.sub(r'<img(.*?)>', r'<img\1/>', file_contents)

#     with open(file_path, 'w') as file:
#         file.write(modified_contents)


#       # ----------------------------------------------------------------------------------------------------------------  
#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"

#     with open(file_path, 'r') as file:
#           file_contents = file.read()

#     modified_contents = re.sub(r'<input(.*?)>', r'<input\1/>', file_contents)

#     with open(file_path, 'w') as file:
#         file.write(modified_contents)

#       # ---------------------------------------------------------------------------------------------------------------- 
#       #  
#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"

#     with open(file_path, 'r') as file:
#         file_contents = file.read()

#     modified_contents = re.sub(r'<img(.*?)src=["\'](.*?)["\'](.*?)>', lambda match: f'<img{match.group(1)}src="/assets/{match.group(2).split("/assets/")[-1]}"{match.group(3)}>', file_contents)

#     with open(file_path, 'w') as file:
#         file.write(modified_contents)

#       # ----------------------------------------------------------------------------------------------------------------  

#     file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\components\pages\{small_routes_arr}\{name_lst}.js"
#     with open(file_path, 'r') as file:
#       file_contents = file.read()

#     modified_contents = file_contents.replace("/assets/assets/", "/assets/")

#     with open(file_path, 'w') as file:
#       file.write(modified_contents)

#       # ----------------------------------------------------------------------------------------------------------------  
#       file_path = fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes\Router.js"

#     if not os.path.exists(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes") :
#         os.mkdir(fr"C:\Users\hp\Desktop\1001_ai\infinity_python\react_adding_to_temp\mykd\code\{WebsiteName}\src\routes")
        
#     #     Write the HTML output to file
#     with open(file_path, "w") as wFile:
#         wFile.write("""
#     import { useRoutes } from "react-router-dom"

#     import React from 'react'
#     import #link# from "../components/pages/#smllink#/#link#.js"
#     const Router = () => {
#         const router = useRoutes([
#             {
#                 path: "/",
#                 element: <#link# />
#             },
#         ])
#         return (router)
#     }

#     export default Router

#     """.replace("#link#", name_lst).replace("#smllink#", small_routes_arr))
#       # ----------------------------------------------------------------------------------------------------------------  
