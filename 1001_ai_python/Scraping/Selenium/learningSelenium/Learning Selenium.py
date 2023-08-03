from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

response =  ""
# Use Selenium to interact with dynamic elements
options = webdriver.FirefoxOptions()
options.headless = True  # To run the browser in headless mode (no GUI)
driver = webdriver.Firefox(executable_path='/path/to/geckodriver', options=options)
for url in response.url:
    driver.get(url)

    # Perform dynamic actions using Selenium
    # (e.g., click buttons, fill out forms, wait for content to load)
    button = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS, "medium techwave_fn_button")))
    button.click()

    # Wait for dynamic content to load (you can use other expected_conditions as needed)
    WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.CLASS, "dynamic_content")))

    # Now, you can extract the dynamic content using Selenium or switch back to Scrapy
    dynamic_data = driver.find_element(By.CLASS, "dynamic_content").text
    # ...

driver.quit()  # Don't forget to close the browser after you're done
