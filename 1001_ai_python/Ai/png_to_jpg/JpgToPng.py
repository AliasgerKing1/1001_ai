# Requires "requests" to be installed (see python-requests.org)
# import requests
# from random_strings import random_string
# name = random_string(100)

# response = requests.post(
#     'https://api.remove.bg/v1.0/removebg',
#     files={'image_file': open('./jpg/card.jpg', 'rb')},
#     data={'size': 'auto'},
#     headers={'X-Api-Key': 'yqqjtrEhUYKezvK2HuEm2Tde'},
# )
# if response.status_code == 429 :
#     print('insufficent balance')
# else :
#     if response.status_code == requests.codes.ok:
#         with open(f'png/{name}.png', 'wb') as out:
#             out.write(response.content)
#     else:
#         print("Error:", response.status_code, response.text)



    # yqqjtrEhUYKezvK2HuEm2Tde



from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
from random_strings import random_string
import time
import pyperclip
import pyautogui
import shutil
import os

chromeOptions = Options()
chromeOptions.add_argument('--start-maximized')


name = random_string(100)

driver = webdriver.Firefox()

driver.get('https://www.emailnator.com/')

wait = WebDriverWait(driver, 5)
pyautogui.moveTo(303, 80) # Move the mouse to XY coordinates.

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"

extensionCheckBox = driver.find_element(By.NAME, "domain")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox)

checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "domain")))
# If it's selected, deselect it by clicking it
checkbox.click()
checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "plusGmail")))
# If it's selected, deselect it by clicking it
checkbox.click()
checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "googleMail")))
# If it's selected, deselect it by clicking it
checkbox.click()

generateBtn = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[1]/div/div/div/div[2]/div/div[5]/div/button")))
generateBtn.click()

goToEmail = "/html/body/div[1]/div/main/div[1]/div/div/div/div[2]/div/div[1]/input"

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox2 = driver.find_element(By.XPATH, goToEmail)
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox2)

GoBtn = wait.until(ec.visibility_of_element_located((By.XPATH, goToEmail)))

# Get the value of the email input field
go_btn_value = GoBtn.get_attribute('value')

# Text you want to save to the clipboard

# Save the text to the clipboard
pyperclip.copy(go_btn_value)

# --------------------------------------------------------------------------------------------------------------
import requests
import json

driver.get('https://removal.ai/login/')
wait = WebDriverWait(driver, 5)
signup_btn_of_bg_remover = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div[2]/div[1]/div[1]/div/div/div/div[1]/a[2]")))
# If it's selected, deselect it by clicking it
signup_btn_of_bg_remover.click()

num = random_string(20)

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox2 = driver.find_element(By.NAME, "u_email")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox2)
# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox3 = driver.find_element(By.NAME, "u_first_name")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox3)
# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox4 = driver.find_element(By.NAME, "u_last_name")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox4)
# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox5 = driver.find_element(By.NAME, "u_pass")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox5)
# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox6 = driver.find_element(By.NAME, "u_re_pass")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox6)

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"


extensionCheckBox7 = driver.find_element(By.NAME, "term_service")
# Execute the JS script
driver.execute_script(js_code, extensionCheckBox7)

email_input_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "u_email")))
# If it's selected, deselect it by clicking it
email_input_of_bg_remover.send_keys(pyperclip.paste())
fname_input_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "u_first_name")))
# If it's selected, deselect it by clicking it
fname_input_of_bg_remover.send_keys(f'a{num}')
lname_input_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "u_last_name")))
# If it's selected, deselect it by clicking it
lname_input_of_bg_remover.send_keys(f'a{num}')
pass_input_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "u_pass")))
# If it's selected, deselect it by clicking it
pass_input_of_bg_remover.send_keys('123456')
Repass_input_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "u_re_pass")))
# If it's selected, deselect it by clicking it
Repass_input_of_bg_remover.send_keys('123456')

terms_and_conditions_of_bg_remover = wait.until(ec.visibility_of_element_located((By.NAME, "term_service")))
# If it's selected, deselect it by clicking it
terms_and_conditions_of_bg_remover.click()
token = wait.until(ec.visibility_of_element_located((By.ID, "api_token")))
# If it's selected, deselect it by clicking it

# Get the innerHTML of the element
token_inner_html = token.get_attribute("innerHTML")
# Save the text to the clipboard
pyperclip.copy(token_inner_html)

url = "https://api.removal.ai/3.0/remove"

payload = {'image_url': 'https://i.ibb.co/JHxLppm/Dream-Shaper-32-A-detailed-illustration-japan-citymagic-tshirt-1-1.jpg'}

# Replace 'Your-Token' with your actual API token
headers = {
    'Rm-Token': pyperclip.paste()
}

response = requests.request("POST", url, headers=headers, data=payload)

# Check if the response status code is 200 (OK)
if response.status_code == 200:
    # Parse the JSON response
    data = json.loads(response.text)
    
    # Extract the "high_resolution" URL
    high_resolution_url = data.get("high_resolution")
    
    # Download and save the high-resolution image
    image_response = requests.get(high_resolution_url)
    if image_response.status_code == 200:
        name = random_string(100)
        with open(f"outPutPng/{name}.png", "wb") as f:
            f.write(image_response.content)
        print(f"High-resolution image downloaded and saved as {name}")
    else:
        print("Failed to download the high-resolution image")
else:
    print("API request failed with status code:", response.status_code)

# driver.get('https://www.remove.bg/upload')

# wait = WebDriverWait(driver, 5)

# # You can now paste the text from the clipboard using Ctrl+V or by calling pyperclip.paste()

# uploadBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/main/div[2]/div/div/div/div[1]/div/div[1]/div[2]/button')))
# uploadBtn.click()

# image = 'card.jpg'
# imagePath = r'C:\Users\Aliasger B\1001_ai\1001_ai_python\Ai\png_to_jpg\jpg'

# screenWidth, screenHeight = pyautogui.size()

# if screenWidth == 1366 and screenHeight == 768 :
#     pyautogui.click(303, 46)
#     # Select all text (Ctrl + A)
#     pyautogui.hotkey('ctrl', 'a')

#     # Delete the selected text (Backspace)
#     pyautogui.press('backspace')
#     pyautogui.write(imagePath, interval=0.025)
#     pyautogui.press('enter')
#     pyautogui.click(256, 415)
#     pyautogui.write(image, interval=0.025)
#     pyautogui.click(561, 445)
#     # Check if the captcha element is present
#     captcha_present = True
#     try:
#         captcha_checkbox = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/main/div[2]/div/div[2]/div/div[1]/div/div/div[1]/div[2]/div[1]/div/div/div/div/div/iframe")))
#     except Exception as e:
#         captcha_present = False

#     # If captcha is present, click it; otherwise, execute another code block
#     if captcha_present:
#         driver.close()
#         # captcha_checkbox.click()
#     else:
#         time.sleep(3)
#         download_remove_bg = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/main/div[2]/div/div[2]/div/div[1]/div/div/div[2]/div/div[1]/div[1]/div[1]/a")))
#         # If it's selected, deselect it by clicking it
#         download_remove_bg.click()

#     # Specify the source file path
#     source_path = r'C:/Users/Aliasger B/Downloads/card-removebg-preview.png'

#     # Specify the destination folder
#     destination_folder = r'C:\Users\Aliasger B\1001_ai\1001_ai_python\Ai\png_to_jpg\incomplete_png'

#     # Specify the new name for the copied file in the destination folder
#     new_file_name = name

#     # Combine the destination folder path with the new file name
#     destination_path = os.path.join(destination_folder, new_file_name)

#     # Use shutil.copy to copy the file with the new name
#     shutil.copy(source_path, destination_path)


# # --------------------------------------------------------------------------------------------------------------

#     driver.get('https://vanceai.com/')

#     wait = WebDriverWait(driver, 5)
#     pyautogui.click(256, 300)
#     EnhanceStartBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div[2]/div[3]/div[1]/div[1]/div[2]/div/div/div[1]')))
#     EnhanceStartBtn.click()

#     k4Btn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div[2]/div[3]/div[1]/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div[1]/div/div/div[2]/div[2]/div[1]/div[1]/div[7]/span')))
#     k4Btn.click()
#     AddImageBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div/div/div[2]/div[3]/div[1]/div[2]/div/div/div/div[2]/div[1]/div[1]/div[2]/div[1]/div/div/div/div/div[5]')))
#     AddImageBtn.click()
#     pyautogui.click(281, 46)

#     # Select all text (Ctrl + A)
#     pyautogui.hotkey('ctrl', 'a')

#     # Delete the selected text (Backspace)
#     pyautogui.press('backspace')

#     imagePath2 = r'C:\Users\Aliasger B\1001_ai\1001_ai_python\Ai\png_to_jpg\incomplete_png'
#     pyautogui.write(imagePath2, interval=0.025)
#     pyautogui.press('enter')
#     pyautogui.click(302, 415)
#     pyautogui.write(f'{name}.png', interval=0.025)
#     pyautogui.click(571, 445)

#     signupInput = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div[2]/div/div/input")))
#     signupInput.send_keys(pyperclip.paste())

#     EnhanceSignupBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div/div/div/div[3]/div/div[2]/div[2]/div/div[1]/div[3]/button')))
#     EnhanceSignupBtn.click()
    
#     # Check if the captcha element is present
#     success_msg_present = True
#     try:
#         success_msg = wait.until(ec.visibility_of_element_located((By.CLASS, "success")))
#     except Exception as e:
#         success_msg_present = False

#     # If captcha is present, click it; otherwise, execute another code block
#     if success_msg_present:
#         driver.get('https://www.emailnator.com/')
#         wait = WebDriverWait(driver, 5)

#         goToEmail2 = "/html/body/div[1]/div/main/div[1]/div/div/div/div[2]/div/div[1]/input"

#         # in to execute_script method
#         js_code = "arguments[0].scrollIntoView();"

#         extensionCheckBox2 = driver.find_element(By.XPATH, goToEmail)
#         # Execute the JS script
#         driver.execute_script(js_code, extensionCheckBox2)

#         ReGoBtn = wait.until(ec.element_to_be_clickable((By.XPATH, goToEmail2)))
#         ReGoBtn.click()

# time.sleep(5)
# driver.close()