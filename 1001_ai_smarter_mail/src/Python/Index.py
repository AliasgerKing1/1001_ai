import os
import shutil

folderNames = ['Signin']
projectName = 'react_1001_app_new'
title = 'New React App'
themeName = 'Vuexy'
modeSignin = 'Basic'
chooseSigninOption = 1
themeSigninMultiOption = True

if chooseSigninOption == 0 :
    modeSignin = 'Basic'
else:
    modeSignin = 'Cover'


# Copy React App

#source folder
source_Path = r'C:\\Users\\Burhanuddin\\1001_ai\\ReactApp'

#destination folder
destination_Path = r'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app'

shutil.copytree(source_Path, destination_Path)

# creating folders inside src

#if Page Name Folder folder is not created then it create

for i, folderName in enumerate(folderNames):
    pageNameRootSrc = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\pages\\{folderName}'
    if not os.path.exists(pageNameRootSrc) :
        os.makedirs(pageNameRootSrc)
    pageNameRootSrc = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\pages\\{folderName}'
    if folderName == 'Signin' :
        if themeSigninMultiOption == True :
            #source folder
            source_Path = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\InitDesigns\\Apps\\{folderName}\\{themeName}_{modeSignin}_{folderName}.js'
            shutil.copy(source_Path, pageNameRootSrc)
            #renaming the file as per project
            os.rename(fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\Pages\\{folderName}\\{themeName}_{modeSignin}_{folderName}.js', fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\Pages\\{folderName}\\{folderName}.js')
        # if folderName == 'Home' :
        #     #source folder
        #     source_Path = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\InitDesigns\\Apps\\{folderName}\\{themeName}{modeSignin}{folderName}.js'
        #     shutil.copy(source_Path, pageNameRootSrc)
        else :
            #source folder
            source_Path = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\InitDesigns\\Apps\\{folderName}\\{themeName}_{folderName}.js'
            shutil.copy(source_Path, pageNameRootSrc)
            #renaming the file as per project
            os.rename(fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\Pages\\{folderName}\\{themeName}_{folderName}.js', fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\src\\Components\\Pages\\{folderName}\\{folderName}.js')
        # if folderName == 'Home' :
        #     #source folder
        #     source_Path = fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\InitDesigns\\Apps\\{folderName}\\{themeName}{modeSignin}{folderName}.js'
        #     shutil.copy(source_Path, pageNameRootSrc)


#checking html extra code is there or not if there then copy it to our project

htmlLine = ''
indexed_page_path = r'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\InitDesigns\\Bin\\index'
try:
    with open(fr'{indexed_page_path}\\indexed.html', 'r') as f:
        first_line = f.readline().strip()  # Read and strip the first line of the file
        if "html lines" in first_line:  # Check if "html lines" is in the first line
            second_line = f.readline()  # If so, read the second line
            htmlLine = second_line
except Exception as e:
    print("An error occurred:", e)

file_path = r'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app\\public\\index.html'  # Replace with your file path
word_to_search = 'html lang="en"'  # Replace with the word you want to search for
text_to_append = htmlLine  # Replace with the text you want to append

with open(file_path, 'r') as f:
    lines = f.readlines()

with open(file_path, 'w') as f:
    for line in lines:
        if word_to_search in line:
            # Find the word in the line and append text after it
            line = line.replace(word_to_search, word_to_search + ' ' + text_to_append)
        f.write(line)



#copy link files to our proejct

# Open the input file and read its contents
with open(fr'{indexed_page_path}\\indexed.html', 'r') as f:
    lines = f.readlines()

# Find all lines containing the word '<link'
link_lines2 = [line for line in lines if '<link' in line]

# Open the output file and read its contents
with open(file_path, 'r') as f:
    lines = f.readlines()

# Insert the link lines at the specified line number
line_number = 5  # Change this to the desired line number
for link_line in link_lines2:
    lines.insert(line_number - 1, link_line)
    line_number += 1

# Write the modified contents back to the output file
with open(file_path, 'w') as f:
    f.writelines(lines)



#copy script files to our proejct

# Open the input file and read its contents
with open(fr'{indexed_page_path}\\indexed.html', 'r') as f:
    lines2 = f.readlines()

# Find all lines containing the word '<link'
link_lines2 = [line for line in lines2 if '<script' in line]

# Open the output file and read its contents
with open(file_path, 'r') as f:
    lines2 = f.readlines()

# Insert the link lines at the specified line number
line_number = 29  # Change this to the desired line number
for link_line in link_lines2:
    lines2.insert(line_number - 1, link_line)
    line_number += 1

# Write the modified contents back to the output file
with open(file_path, 'w') as f:
    f.writelines(lines2)

#adding title
# Open the file and read its contents
with open(file_path, 'r') as f:
    lines = f.readlines()

# Insert the text at the specified line number
line_number = 4  # Change this to the desired line number
text = fr'<title>{title}</title>'  # Change this to the desired text
lines.insert(line_number - 1, text)

# Write the modified contents back to the file
with open(file_path, 'w') as f:
    f.writelines(lines)

# Copy Json Folder

#source folder
source_Path = r'C:\Users\Burhanuddin\1001_ai\1001_ai_smarter_mail\src\Json\\Design_system.js'

#destination folder
destination_Path = r'C:\Users\Burhanuddin\1001_ai\1001_ai_smarter_mail\src\Python\react_1001_app\src\\Json'

shutil.copy(source_Path, destination_Path)

# # Copy Inputs Folder

#source folder
source_Path = r'C:\Users\Burhanuddin\1001_ai\1001_ai_smarter_mail\src\Shared'

#destination folder
destination_Path = r'C:\Users\Burhanuddin\1001_ai\1001_ai_smarter_mail\src\Python\react_1001_app\src\Components\Shared'

shutil.copytree(source_Path, destination_Path)

#renaming the file as per project
os.rename(r'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\react_1001_app', fr'C:\\Users\\Burhanuddin\\1001_ai\\1001_ai_smarter_mail\\src\\Python\\{projectName}')

