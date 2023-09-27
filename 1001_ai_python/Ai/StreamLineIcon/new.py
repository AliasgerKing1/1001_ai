import requests
# # Define the API endpoint and payload
# url = 'http://api.convertio.co/convert'
# payload = {
#     'apikey': "274527a1197b8770c4f602fb30e32210",
#     'file': "https://assets.streamlinehq.com/image/private/w_512,h_512,ar_1/f_auto/v1/icons/dashboard/browser-gauge-rf3qxewod27vlbpjfb7qhl.png/browser-gauge-4zio0ann6n8m5674flh6pi.png?_a=BAJFJtWI0",
#     'outputformat': 'svg'
# }

# # Make the POST request
# response = requests.post(url, json=payload)
# print(response.json()['data'])
# Define the API endpoint URL with the placeholder for the ID
url = f'http://api.convertio.co/convert/9e822a682395072bce55ae4f0e5ce2b1/status'

# Make the GET request
response = requests.get(url)

# Check the response
if response.status_code == 200:
    # Request was successful
    url_image = response.json()['data']['output']['url']
    print(response.json()['data']['output']['url'])
else:
    # Request encountered an errorcls
    print(f"Error: {response.status_code}")
    print(f"get url -----------{response.text}")
