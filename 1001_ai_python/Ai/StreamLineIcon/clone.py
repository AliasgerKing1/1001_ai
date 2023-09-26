import requests
from bs4 import BeautifulSoup
import os
from random_strings import random_string

# URL of the website you want to scrape images from
url = "https://www.streamlinehq.com/icons/streamline-light?search=&icon=ico_mRu4pQJ4vH482aEeixiJ4HY4"

# Send an HTTP GET request to the URL
response = requests.get(url)

# Parse the HTML content of the page using BeautifulSoup
soup = BeautifulSoup(response.text, "html.parser")

# Find the specific div with a class name
div_class_name = "InfiniteScroll"  # Replace with the actual class name
target_div = soup.find("div", class_=div_class_name)

# Find all image tags (usually <img>) within the target div
img_tags = target_div.find_all("img")

# Directory where you want to save the images
save_dir = "icons/input"

# Create the directory if it doesn't exist
if not os.path.exists(save_dir):
    os.makedirs(save_dir)

# Download and save each image
for img_tag in img_tags:
    img_url = img_tag.get("src")  # Get the image source URL
    # Replace /w_30 with /w_512 and /h_30 with /h_512 in the image URL
    img_url = img_url.replace("/w_30", "/w_512").replace(",h_30", ",h_512")
    
    # Generate a new random string for each image
    inp_name = random_string(100)
    
    img_name = f"{inp_name}.webp"  # Use the random string as the filename

    img_path = os.path.join(save_dir, img_name)  # Create the full file path

    # Download the image
    img_data = requests.get(img_url).content

    # Save the image to the specified directory
    with open(img_path, "wb") as img_file:
        img_file.write(img_data)

    print(f"Image saved: {img_path}")

print("Scraping complete.")


# f45f3f38c6472ed0d1f68c1095a82333



# api_key = 'f45f3f38c6472ed0d1f68c1095a82333'
# m_id = ""
# url_image = ""
# minutes_left = 0
# name = random_string(100)

# # Define the API endpoint and payload
# url = 'http://api.convertio.co/convert'
# payload = {
#     'apikey': api_key,
#     'file': 'https://assets.streamlinehq.com/image/private/w_120,h_120,ar_1/f_auto/v1/icons/dashboard/browser-gauge-rf3qxewod27vlbpjfb7qhl.png/browser-gauge-4zio0ann6n8m5674flh6pi.png?_a=BAJFJtWI0',
#     'outputformat': 'svg'
# }

# # Make the POST request
# response = requests.post(url, json=payload)

# # Check the response
# if response.status_code == 200:
#     # Request was successful
#     # print(response.json()['data']['id'])
#     m_id = response.json()['data']['id']
#     minutes_left = response.json()['data']['minutes']
# else:
#     # Request encountered an error
#     print(f"Error: {response.status_code}")
#     print(response.text)
# if(minutes_left > 0) :
#     # Define the API endpoint URL with the placeholder for the ID
#     url = f'http://api.convertio.co/convert/{m_id}/status'

#     # Make the GET request
#     response = requests.get(url)

#     # Check the response
#     if response.status_code == 200:
#         # Request was successful
#         url_image = response.json()['data']['output']['url']
#         # print(response.json()['data']['output']['url'])
#     else:
#         # Request encountered an errorcls
#         print(f"Error: {response.status_code}")
#         print(f"get url -----------{response.text}")

#     # Send an HTTP GET request to the URL
#     response = requests.get(url_image)

#     # Check if the request was successful (status code 200)
#     if response.status_code == 200:
#         # Extract the file content from the response
#         svg_content = response.content

#         # Define the file path where you want to save the SVG file
#         file_path = fr"C:\\Users\\Aliasger B\\1001_ai\\1001_ai_python\\Ai\\StreamLineIcon\\icons\\output\\{name}.svg"

#         # Write the SVG content to the file
#         with open(file_path, "wb") as svg_file:
#             svg_file.write(svg_content)
#         # Write the SVG content to the file
#         with open(fr"C:\\Users\\Aliasger B\\1001_ai\\1001_ai_python\\Ai\\StreamLineIcon\\image_name_list.csv", "a") as svg_file:
#             svg_file.write(f"\n{name},za.rae.ll.i.s3.3@gmail.com,{api_key}")

#         print(f"SVG file saved as {file_path}")
#     else:
#         print(f"Failed to download the SVG file. Status code: {response.status_code}")
