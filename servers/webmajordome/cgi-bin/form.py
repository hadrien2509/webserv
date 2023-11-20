# -*- coding: utf-8 -*-


import sys
import os

# print("data_pairs", file=sys.stderr)

# Lire seulement CONTENT_LENGTH caractères de l'entrée standard
content_length = int(os.environ.get('CONTENT_LENGTH', 0))
post_data = sys.stdin.read(content_length)

data_pairs = post_data.split('&')
name = None
email = None
for pair in data_pairs:
    key, value = pair.split('=')
    if key == 'name':
        name = value
    elif key == 'email':
        email = value

# while 1:
#     print("Test time out errors\n")

with open('output.txt', 'wb') as file:
    data = "Nom : {}\nEmail : {}".format(name, email).encode('utf-8')
    file.write(data)

# Calculer la longueur de la réponse
response_content = "<html><head><title>Données enregistrées</title></head><body><h1>Données enregistrées avec succès !</h1><p>Nom : {}</p><p>Email : {}</p></body></html>".format(name, email)
content_length = len(response_content)

# Imprimer l'en-tête de la réponse
print("Content-type: text/html")
print("Content-Length: {}\n".format(content_length))

# Imprimer le corps de la réponse
print(response_content)
