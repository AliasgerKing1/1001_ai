import requests

url = "https://cloud.leonardo.ai/api/rest/v1/generations"

payload = {
    "height": 512,
    "modelId": "6bef9f1b-29cb-40c7-b9df-32b51c1f67d3",
    "prompt": "An oil painting of a cat",
    "width": 512,
    "alchemy": False
}
headers = {
    "accept": "application/json",
    "content-type": "application/json"
}

response = requests.post(url, json=payload, headers=headers)

print(response.text)