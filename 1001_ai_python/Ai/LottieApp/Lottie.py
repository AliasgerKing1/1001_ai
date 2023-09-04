# from selenium import webdriver
# from selenium.webdriver.support.ui import WebDriverWait
# from selenium.webdriver.chrome.options import Options
# from selenium.webdriver.common.by import By
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.support import expected_conditions as ec
# from random_strings import random_string
# import pandas as pd
# import time
# import pyperclip
# import pyautogui
# import shutil
# import os


# email_list = []

# # Read the initial index value from the 'index.txt' file
# with open('index.txt', 'r') as index_file:
#     index = int(index_file.read())


# email_list = []
# index = 1

# name = random_string(100)

# driver = webdriver.Firefox()

# # Maximize the browser window
# driver.maximize_window()

# driver.get('https://www.emailnator.com/')

# wait = WebDriverWait(driver, 5)
# pyautogui.moveTo(303, 80) # Move the mouse to XY coordinates.

# # in to execute_script method
# js_code = "arguments[0].scrollIntoView();"

# extensionCheckBox = driver.find_element(By.NAME, "domain")
# # Execute the JS script
# driver.execute_script(js_code, extensionCheckBox)

# checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "domain")))
# # If it's selected, deselect it by clicking it
# checkbox.click()
# checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "plusGmail")))
# # If it's selected, deselect it by clicking it
# checkbox.click()
# checkbox = wait.until(ec.visibility_of_element_located((By.NAME, "googleMail")))
# # If it's selected, deselect it by clicking it
# checkbox.click()

# generateBtn = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div/main/div[1]/div/div/div/div[2]/div/div[5]/div/button")))
# generateBtn.click()

# goToEmail = "/html/body/div[1]/div/main/div[1]/div/div/div/div[2]/div/div[1]/input"

# # in to execute_script method
# js_code = "arguments[0].scrollIntoView();"


# extensionCheckBox2 = driver.find_element(By.XPATH, goToEmail)
# # Execute the JS script
# driver.execute_script(js_code, extensionCheckBox2)

# GoBtn = wait.until(ec.visibility_of_element_located((By.XPATH, goToEmail)))

# # Get the value of the email input field
# go_btn_value = GoBtn.get_attribute('value')

# # Text you want to save to the clipboard

# # Save the text to the clipboard
# pyperclip.copy(go_btn_value)

# email_address = pyperclip.paste()

# # Append the email address and index to your list
# email_list.append((index, email_address))

# # Increment the index for the next entry
# index += 1


# driver.quit()
