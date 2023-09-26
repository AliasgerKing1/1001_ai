from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
import pyperclip
driver = webdriver.Firefox()

driver.get('https://www.emailnator.com/')
wait = WebDriverWait(driver, 10)

# wait = WebDriverWait(driver, 20)
# js_code = "window.scrollBy(0, 400);"  # Scroll 400 pixels down

# driver.execute_script(js_code)
# Save the text to the clipboard
# pyperclip.copy(go_btn_value)

# with open('email/email.csv', 'a') as f:
#         f.writelines(f"\n{pyperclip.paste()},")
