import os
import shutil
import re

current_directory = os.getcwd()
project_name = "hexPress"

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

# Define the directory within the React app where you want to copy the HTML files
destination_within_react_app = os.path.join(current_directory, project_name, 'src', 'Components','pages')

# Process and copy HTML files to corresponding folders within the React app
for html_file in html_files:
    only_name = os.path.basename(html_file)
    if not re.match(r'^[0-9]', only_name):
        # Remove the file extension
        file_name_without_extension = os.path.splitext(only_name)[0]

        # Create the folder path within the React app structure
        folder_path = os.path.join(destination_within_react_app, file_name_without_extension)
        os.makedirs(folder_path, exist_ok=True)

        # Create the destination .js file path
        js_file_path = os.path.join(folder_path, file_name_without_extension + '.js')

        # Check if the .js file already exists, and if not, copy the HTML file
        if not os.path.exists(js_file_path):
            shutil.copy(html_file, js_file_path)
        #copy public Folder
        if not os.path.exists(fr"{current_directory}\\{project_name}\\public") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\public"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\public"
            shutil.copytree(copyPublicDirSrc, copyPublicDirDest)
        
        #copy gitignore
        if not os.path.exists(fr"{current_directory}\\{project_name}\\.gitignore") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\.gitignore"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\.gitignore"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)
        
        #copy package.json
        if not os.path.exists(fr"{current_directory}\\{project_name}\\package.json") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\package.json"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\package.json"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy README.md
        if not os.path.exists(fr"{current_directory}\\{project_name}\\README.md") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\README.md"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\README.md"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy Layouts Folder
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\Layouts") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\Layouts"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\Layouts"
            shutil.copytree(copyPublicDirSrc, copyPublicDirDest)

        #copy Routes Folder
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\Routes") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\Routes"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\Routes"
            shutil.copytree(copyPublicDirSrc, copyPublicDirDest)

        #copy App.js
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\App.js") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\App.js"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\App.js"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy index.js
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\index.js") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\index.js"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\index.js"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy index.css
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\index.css") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\index.css"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\index.css"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy App.css
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\App.css") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\App.css"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\App.css"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy reportWebVitals.js
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\reportWebVitals.js") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\reportWebVitals.js"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\reportWebVitals.js"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy setupTests.js
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\setupTests.js") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\setupTests.js"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\setupTests.js"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)

        #copy App.test.js
        if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\App.test.js") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\App.test.js"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\App.test.js"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)


            # print(f"HTML file '{html_file}' copied and renamed to '{js_file_path}' in the React app.")

print("HTML files copied and renamed to .js files inside the React app directory structure.")
