
import sys
import os

print("data_pairs", file=sys.stderr)
post_data = sys.stdin.read() # blocant ici

data_pairs = post_data.split('&')
name = None
email = None
for pair in data_pairs:
    key, value = pair.split('=')
    if key == 'name':
        name = value
    elif key == 'email':
        email = value

with open('output.txt', 'wb') as file:
    data = "Nom : {}\nEmail : {}".format(name, email).encode('utf-8')
    file.write(data)


content_length = len("Content-type: text/html\n\n<html><head><title>Données enregistrées</title></head><body><h1>Données enregistrées avec succès !</h1></body></html>")

print("Content-type: text/html")
print("Content-Length: {}\n".format(content_length))

print("<html>")
print("<head><title>Données enregistrées</title></head>")
print("<body>")
print("<h1>Données enregistrées avec succès !</h1>")
print("<p>Nom : {}</p>".format(name))
print("<p>Email : {}</p>".format(email))
print("</body>")
print("</html>")
