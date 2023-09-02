
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
from selenium.common.exceptions import TimeoutException  # Import TimeoutException
from random_strings import random_string
import time
import pyperclip
import pyautogui
import shutil
import os


driver = webdriver.Firefox()

# Maximize the browser window
driver.maximize_window()

driver.get('https://png-to-svg.com/')

wait = WebDriverWait(driver, 5)

scroll_pixels = 600  # Replace with the number of pixels you want to scroll
# Scroll to the element using JavaScript
driver.execute_script(f"window.scrollBy(0, {scroll_pixels});")
time.sleep(1)
pyautogui.click(672, 321)
time.sleep(1)
image = 'oMHnTWyfwhz4NZ39oXgl2j4WJAvrejApiXaMdr1k2TDxSln8h9xqUudlwNAzTkUSuu3WFkgGHrlxfhzEgMXvheaqtkJ2BijQEQsX.png'
imagePath = r'C:\Users\Aliasger B\1001_ai\1001_ai_python\Ai\png_to_jpg\png'

screenWidth, screenHeight = pyautogui.size()

if screenWidth == 1366 and screenHeight == 768 :
    pyautogui.click(312, 48)
    # Select all text (Ctrl + A)
    pyautogui.hotkey('ctrl', 'a')

    # Delete the selected text (Backspace)
    pyautogui.press('backspace')
    pyautogui.write(imagePath, interval=0.025)
    pyautogui.press('enter')
    pyautogui.click(256, 415)
    pyautogui.write(image, interval=0.025)
    pyautogui.click(561, 445)
    time.sleep(5)
    pyautogui.click(1000, 615)
    time.sleep(1)
    pyautogui.click(500, 315)
    time.sleep(1)
    # time.sleep(5)
    # pyautogui.click(100, 508)
    # time.sleep(1)
    # pyautogui.click(548, 303)
    # time.sleep(1)
    # time.sleep(10)
    # Close the WebDriver
    # driver.quit()
    