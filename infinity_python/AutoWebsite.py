import pyautogui
import time
import pandas as pd

# Read the Excel file into a pandas DataFrame
df = pd.read_excel('dataset/clone_website.xlsx')

# Get the column names
column_names = df.columns

# Iterate over the columns
for i in range(0, len(column_names), 3):
    col1 = column_names[i]
    col2 = column_names[i+1] if i+1 < len(column_names) else None
    col3 = column_names[i+2] if i+2 < len(column_names) else None
    
    # Access the data in the corresponding columns
    for index, row in df.iterrows():
        name = row[col1]
        url = row[col2] if col2 is not None else None
        link = row[col3] if col3 is not None else None

        # Process the values from the columns
        currentMouseX, currentMouseY = 669, 76
        pyautogui.hotkey('ctrl', 'alt', 'h')  # Press the ctrl-alt-h hotkey combination.
        pyautogui.click(currentMouseX, currentMouseY)
        pyautogui.click(button='left', clicks=3, interval=0.1)  # Select all text in the input box
        pyautogui.press('backspace')  # Delete the selected text
        pyautogui.write(name, interval=0.25)  # Type with a quarter-second pause between each key

        time.sleep(2)  # Add a 2-second break here

        pyautogui.click(663, 295)
        pyautogui.click(button='left', clicks=3, interval=0.1)  # Select all text in the input box
        pyautogui.press('backspace')  # Delete the selected text
        pyautogui.write(link, interval=0.025)  # Type with a quarter-second pause between each key

        time.sleep(2)  # Add a 2-second break here

        pyautogui.click(533, 423)

        time.sleep(2)  # Add a 2-second break here

        pyautogui.click(641, 262)
        pyautogui.click(button='left', clicks=3, interval=0.1)  # Select all text in the input box
        pyautogui.press('backspace')  # Delete the selected text
        pyautogui.write(url, interval=0.025)  # Type with a quarter-second pause between each key

        time.sleep(2)  # Add a 2-second break here

        pyautogui.click(533, 423)

        time.sleep(2)  # Add a 2-second break here

        pyautogui.click(533, 423)

        pyautogui.hotkey('ctrl', 'alt', 'f')  # Press the ctrl-alt-f hotkey combination.

        # Wait for the "Finish" button to appear on the screen
        finish_button_region = pyautogui.locateOnScreen('finish_button.png', confidence=0.9)
        while finish_button_region is None:
            time.sleep(1)  # Wait for 1 second
            finish_button_region = pyautogui.locateOnScreen('finish_button.png', confidence=0.9)

        # Click the "Finish" button
        finish_button_center = pyautogui.center(finish_button_region)
        pyautogui.click(finish_button_center)

        time.sleep(2)  # Add a 2-second break here
