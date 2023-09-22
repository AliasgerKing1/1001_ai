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
ignore_folders = []

# Call the function to find .html files in the specific directory, excluding the ignore folders
html_files = find_html_files(specific_directory, ignore_folders)

def organize_files(directory, extensions=None, ignore_list=None):
    if extensions is None:
        extensions = []

    if ignore_list is None:
        ignore_list = []

    assets_folder_path = None

    for root, dirs, files in os.walk(directory):
        # Check if any directory in ignore_list is in dirs, and remove it if found
        dirs[:] = [d for d in dirs if d not in ignore_list]

        if 'assets' in dirs and assets_folder_path is None:
            # Found an "assets" folder, copy it to the "public" folder and stop searching
            assets_folder_path = os.path.join(root, 'assets')
            dest_folder = os.path.join(current_directory, project_name, 'public', 'assets')
            shutil.copytree(assets_folder_path, dest_folder)
            break

    # If the "assets" folder was not found, search for specific files
    if assets_folder_path is None:
        for root, _, files in os.walk(directory):
            for file in files:
                file_path = os.path.join(root, file)
                file_extension = os.path.splitext(file)[1].lower()

                if file_extension in extensions:
                    # Determine the destination folder based on the file extension
                    dest_folder = os.path.join(current_directory, project_name, 'public', "assets", file_extension.strip('.'))
                    os.makedirs(dest_folder, exist_ok=True)

                    # Copy the file to the appropriate subfolder while preserving the original directory structure
                    dest_path = os.path.join(dest_folder, os.path.relpath(file_path, directory))
                    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
                    shutil.copy(file_path, dest_path)

# Specify the directory you want to organize
specific_directory = fr'{current_directory}\\InitDesigns'

# Specify the folders you want to ignore
ignore_folders = []

# Specify the extensions to organize into subfolders
extensions_to_organize = ['.css', '.js', '.jpg', '.png', '.svg']

# Call the function to organize files into subfolders based on their extensions
organize_files(specific_directory, extensions_to_organize, ignore_folders)

# Define the directory within the React app where you want to copy the HTML files
destination_within_react_app = os.path.join(current_directory, project_name, 'src', 'Components','pages')

# Process and copy HTML files to corresponding folders within the React app
for index_1, html_file in enumerate(html_files):
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
        #copy gitignore
        if not os.path.exists(fr"{current_directory}\\{project_name}\\.gitignore") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\.gitignore"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\.gitignore"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)
        
        #copy index.html
        if not os.path.exists(fr"{current_directory}\\{project_name}\\public\\index.html") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\public\\index.html"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\public\\index.html"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)
        
        #copy manifest.json
        if not os.path.exists(fr"{current_directory}\\{project_name}\\public\\manifest.json") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\public\\manifest.json"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\public\\manifest.json"
            shutil.copy(copyPublicDirSrc, copyPublicDirDest)
        
        
        #copy robots.txt
        if not os.path.exists(fr"{current_directory}\\{project_name}\\public\\robots.txt") :
            copyPublicDirSrc = r"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\public\\robots.txt"
            copyPublicDirDest = fr"{current_directory}\\{project_name}\\public\\robots.txt"
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
        
        srcFolderItems = ["Layouts_dir", "Routes_dir", "App.js_file","index.js_file", "index.css_file", "App.css_file", "reportWebVitals.js_file", "setupTests.js_file", "App.test.js_file"]
        for i, folderName in enumerate(srcFolderItems) :
            # copy Layouts Folder
            checkDirFile = folderName.split('_')[1]
            file_folder_name = folderName.split('_')[0]
            if(checkDirFile == 'dir') :
                if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\{file_folder_name}") :
                    copyPublicDirSrc = fr"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\{file_folder_name}"
                    copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\{file_folder_name}"
                    shutil.copytree(copyPublicDirSrc, copyPublicDirDest)
            elif(checkDirFile == 'file') :
                if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\{file_folder_name}") :
                    copyPublicDirSrc = fr"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\{file_folder_name}"
                    copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\{file_folder_name}"
                    shutil.copy(copyPublicDirSrc, copyPublicDirDest)
            if not os.path.exists(fr"{current_directory}\\{project_name}\\src\\{file_folder_name}") :
                    copyPublicDirSrc = fr"C:\\Users\\Aliasger B\\1001_ai\\ReactApp\\src\\{file_folder_name}"
                    copyPublicDirDest = fr"{current_directory}\\{project_name}\\src\\{file_folder_name}"
                    shutil.copytree(copyPublicDirSrc, copyPublicDirDest)

            output_file_path_css_edit = os.path.join(current_directory, project_name, 'src', 'Components', 'pages', file_name_without_extension, f'{file_name_without_extension}.js')
            # Word to search for
            word_to_search = 'class="template-customizer-core-css" '

            # New word to replace with
            new_word = ''

            # Open the input file and read its contents
            with open(output_file_path_css_edit, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Perform the search and replace
            new_lines = [line.replace(word_to_search, new_word) for line in lines]

            # Open the file again in write mode to save the changes
            with open(output_file_path_css_edit, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            # Word to search for
            word_to_search = 'class="template-customizer-theme-css" '

            # New word to replace with
            new_word = ''

            # Open the input file and read its contents
            with open(output_file_path_css_edit, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Perform the search and replace
            new_lines = [line.replace(word_to_search, new_word) for line in lines]

            # Open the file again in write mode to save the changes
            with open(output_file_path_css_edit, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)

        if index_1 == 5 :
            indexed_page_path = os.path.join(current_directory, project_name, 'src', 'Components','pages', file_name_without_extension)
            output_file_path = os.path.join(current_directory, project_name, 'public', "index.html")
            #copy script files to our proejct

            # Open the input file and read its contents
            with open(fr'{indexed_page_path}\\{file_name_without_extension}.js', 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Find all lines containing the word '<link'
            link_lines2 = [line for line in lines if '<script src=' in line]

            # Open the output file and read its contents
            with open(output_file_path, 'r') as f:
                lines = f.readlines()

            # Insert the link lines at the specified line number
            line_number = 12  # Change this to the desired line number
            for link_line in link_lines2:
                lines.insert(line_number - 1, link_line)
                line_number += 1

            # Write the modified contents back to the output file
            with open(output_file_path, 'w') as f:
                f.writelines(lines)
            
            # Word to search for
            word_to_search = '<script src="../../assets/'

            # New word to replace with
            new_word = '<script src="/assets/'

            # Open the input file and read its contents
            with open(output_file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Perform the search and replace
            new_lines = [line.replace(word_to_search, new_word) for line in lines]

            # Open the file again in write mode to save the changes
            with open(output_file_path, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
            # ------------------------------------------------------
            output_file_path_css = os.path.join(current_directory, project_name, 'src', 'App.js')
            #copy script files to our proejct

            # Open the input file and read its contents
            with open(fr'{indexed_page_path}\\{file_name_without_extension}.js', 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Find all lines containing the word '<link rel="stylesheet" href="'
            link_lines2 = [line for line in lines if '<link rel="stylesheet" href="' in line]
            # Open the output file and read its contents
            with open(output_file_path_css, 'r') as f:
                lines = f.readlines()

            # Insert the link lines at the specified line number
            line_number = 2  # Change this to the desired line number
            for link_line in link_lines2:
                lines.insert(line_number - 1, link_line)
                line_number += 1
            
            # Write the modified contents back to the output file
            with open(output_file_path_css, 'w') as f:
                f.writelines(lines)
            
            
            # Word to search for
            word_to_search = '<link rel="stylesheet" href="../../'

            # New word to replace with
            new_word = 'import "./'

            # Open the input file and read its contents
            with open(output_file_path_css, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Perform the search and replace
            new_lines = [line.replace(word_to_search, new_word) for line in lines]

            # Open the file again in write mode to save the changes
            with open(output_file_path_css, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
                
            # Word to search for
            word_to_search = '" />'

            # New word to replace with
            new_word = '"'

            # Open the input file and read its contents
            with open(output_file_path_css, 'r', encoding='utf-8') as f:
                lines = f.readlines()

            # Perform the search and replace
            new_lines = [line.replace(word_to_search, new_word) for line in lines]

            # Open the file again in write mode to save the changes
            with open(output_file_path_css, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)

print(f"HTML files copied and renamed to .js files inside the {project_name} directory structure.")
