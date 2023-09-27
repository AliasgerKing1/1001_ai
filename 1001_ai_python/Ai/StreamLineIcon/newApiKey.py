from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.firefox.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
from random_strings import random_string
import time

email = random_string(15)

firefox_options = Options()
firefox_options.add_argument('--headless')  # Run Firefox in headless mode

driver = webdriver.Firefox(options=firefox_options)

driver.get('https://developers.convertio.co/user/registration/api?utm_source=api_top_btn')

wait = WebDriverWait(driver, 15)
email_input = wait.until(ec.visibility_of_element_located((By.ID, "email")))
email_input.send_keys(f'{email}@gmail.com')

password_input = wait.until(ec.visibility_of_element_located((By.ID, "password")))
password_input.send_keys('123456')


createAccountBtn = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/section/div/div[3]/form/button")))
createAccountBtn.click()

time.sleep(5)
driver.get('https://developers.convertio.co/')
api_key_input = wait.until(ec.visibility_of_element_located((By.ID, "api_input")))
api_key_value = api_key_input.get_attribute("value")
# Write the api_key_value to a CSV file
with open(fr"C:\\Users\\Aliasger B\\1001_ai\\1001_ai_python\\Ai\\StreamLineIcon\\email_list.csv", "a") as email_list:
    email_list.write(f"\n{email}@gmail.com, {api_key_value}")

driver.quit()


