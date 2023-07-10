import pyautogui
import time
import pandas as pd

currentMouseX, currentMouseY = 457, 76
pyautogui.hotkey('alt', 'tab')  # Press the alt-tab hotkey combination.
pyautogui.click(currentMouseX, currentMouseY)
pyautogui.write('elisc', interval=0.25)  # Type with a quarter-second pause between each key

time.sleep(2)  # Add a 2-second break here

pyautogui.click(441, 295)
pyautogui.write(r'C:\Users\Hakimi\Desktop\template\testing', interval=0.025)  # Type with a quarter-second pause between each key

time.sleep(2)  # Add a 2-second break here

pyautogui.click(533, 423)

time.sleep(2)  # Add a 2-second break here

pyautogui.click(393, 223)
pyautogui.write('https://marketifythemes.net/html/elisc/index.html', interval=0.025)  # Type with a quarter-second pause between each key

time.sleep(2)  # Add a 2-second break here

pyautogui.click(533, 423)

time.sleep(2)  # Add a 2-second break here

pyautogui.click(533, 423)
