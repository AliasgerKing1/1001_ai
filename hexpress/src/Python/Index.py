import os
import shutil
import re

current_directory = os.getcwd()
project_name =  "hexPress"
def find_html_files(directory, ignore_list=None):
    html_file_list = []

    if ignore_list is None:
        ignore_list = []

    for root, dirs, files in os.walk(directory):
        # Check if any directory in ignore_list is in dirs, and remove it if found
        dirs[:] = [d for d in dirs if d not in ignore_list]

        for file in files:
            if file.endswith('.html'):
                html_file_list.append(os.path.join(root, file))

    return html_file_list

# Specify the directory you want to search in
specific_directory = fr'{current_directory}\\InitDesigns'

# Specify the folders you want to ignore
ignore_folders = ['assets']

# Call the function to find .html files in the specific directory, excluding the ignore folders
html_files = find_html_files(specific_directory, ignore_folders)
htmlFileNameList = []

# Print the list of .html files that start with a digit
for html_file in html_files:
    onlyName = html_file.split("\\")[-1]
    if not re.match(r'^[0-9]', onlyName):
        htmlFileNameList.append(onlyName)
        htmlFileNameList.sort()
        print(htmlFileNameList)

react_app_source_path = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp"
react_app_destination_path = f"{current_directory}\\{project_name}"
shutil.copytree(react_app_source_path, react_app_destination_path)