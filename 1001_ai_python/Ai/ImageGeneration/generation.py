from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support import expected_conditions as ec
import time
import pyautogui
import keyboard

chromeOptions = Options()
chromeOptions.add_argument('--start-maximized')

driver = webdriver.Firefox()

driver.get('https://app.leonardo.ai/auth/login')

wait = WebDriverWait(driver, 15)
email_input = wait.until(ec.visibility_of_element_located((By.NAME, "email")))
email_input.send_keys('ru.tte.rsa.mu.el.e@googlemail.com')

password_input = wait.until(ec.visibility_of_element_located((By.NAME, "password")))
password_input.send_keys('-A1li@sge3939')

signinBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div/div[2]/div/div[1]/div[2]/div[2]/div[1]/form/div/button')))
signinBtn.click()
# while True :
#     if keyboard.is_pressed('ctrl+q'):
#         print("Exiting the loop...")
#         break
nextBtn1 = wait.until(ec.presence_of_element_located((By.XPATH, '/html/body/div[1]/div[2]/div/div/div[3]/div/section/footer/div/button[2]')))
nextBtn1.click()
driver.get('https://app.leonardo.ai/ai-generations')

nextBtn2 = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div[2]/div/div/div[3]/div/section/footer/div/button[2]')))
nextBtn2.click()
nextBtn2.click()
nextBtn2.click()
nextBtn2.click()
nextBtn2.click()
pyautogui.click(1245, 477)
pyautogui.click(1245, 477)
pyautogui.click(1245, 477)

driver.get('https://app.leonardo.ai/ai-generations')


crossBtn = wait.until(ec.visibility_of_element_located((By.XPATH, '/html/body/div[4]/div[3]/div/section/button')))
crossBtn.click()
single_image = wait.until(ec.visibility_of_element_located((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div/div[1]/div/div/div/div[2]/div/div[2]/div/div/label[1]/div')))
single_image.click()
# prompt_textarea = wait.until(ec.visibility_of_element_located((By.XPATH, "/html/body/div[1]/div[1]/div[2]/div/div/div[3]/div[2]/textarea")))
# prompt_textarea.send_keys('Create an eerie, mysterious forest scene cloaked in darkness. Visualize towering, gnarled trees shrouded in mist, their twisted branches reaching out like skeletal fingers. Envision a path leading deeper into the heart of the forest, where shadows dance and secrets are hidden. Capture the haunting beauty and the sense of foreboding in this dark forest')

# generateBtn = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div/div[3]/div[5]/div[4]')))
# generateBtn.click()

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"

downloadBtnScript = driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div/div[6]/div[2]/div[1]/div/div[2]/div/div[2]/div[1]/div/div/img')
# Execute the JS script
driver.execute_script(js_code, downloadBtnScript)

pyautogui.moveTo(452,600)

# in to execute_script method
js_code = "arguments[0].scrollIntoView();"

downloadBtnScript2 = driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div/div[4]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div[1]/div/div/div[2]/div[2]/div/button[1]')
# Execute the JS script
driver.execute_script(js_code, downloadBtnScript2)


download_image = wait.until(ec.element_to_be_clickable((By.XPATH, '/html/body/div[1]/div[1]/div[2]/div/div/div[4]/div[2]/div[1]/div/div[2]/div[2]/div[2]/div[1]/div/div/div[2]/div[2]/div/button[1]')))
download_image.click()



# ru.tte.rsa.mu.el.e@googlemail.com