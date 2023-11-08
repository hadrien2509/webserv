#!/usr/bin/env python3
import logging
import os
import urllib.parse
import sys

# Configure the logging system

# Get the CGI request method
request_method = os.environ.get("REQUEST_METHOD", "Unknown")

# Function to handle DELETE request
def handle_delete_request():
	content_length = int(os.environ.get("CONTENT_LENGTH", 0))
	delete_data = sys.stdin.read(content_length)
	print(f"content_length: {content_length}")

	# Parse the DELETE data and split it into key-value pairs
	delete_data = delete_data.split('&')
	data_dict = {}
	for pair in delete_data:
		key, value = pair.split('=')
		data_dict[key] = value

	if "image" in data_dict:
		# Decode the URL-encoded filename
		image_to_delete = data_dict["image"]
		image_to_delete = urllib.parse.unquote_plus(image_to_delete)
		#image_to_delete = ''.join(char for char in image_to_delete if char.isalnum() or char in ' ()-._')

		# Check if the image file exists and delete it
		if os.path.exists(image_to_delete):
			os.remove(image_to_delete)
			print(f"<p>Image '{image_to_delete}' has been deleted.</p>")
		else:
			print(f"<p>Image '{image_to_delete}' does not exist.</p>")

	print("<h3>CGI script executed successfully for DELETE request</h3>")
	print(f"<p>Request Method: {request_method}</p>")
	print(f"<p>DELETE Data: {delete_data}</p>")

try:
	if request_method == "DELETE":
		handle_delete_request()
except Exception as e:
	# Handle CGI errors
	logging.error("CGI Error: %s", str(e))
	print(f"<h1>CGI Error: {str(e)}</h1>")
	print(f"<p>Request Method: {request_method}</p>")
