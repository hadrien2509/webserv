# #!/usr/bin/env python3

# import sys
# import os

# # En-tête CGI indiquant que le contenu sera du texte
# print("Content-type: text/plain\n")

# # Lire la taille des données POST depuis la variable d'environnement CONTENT_LENGTH
# content_length = int(os.environ.get("CONTENT_LENGTH", 0))

# # Lire les données POST depuis STDIN
# post_data = sys.stdin.read(content_length)

# # Afficher les données lues dans la sortie standard
# print("Données lues depuis STDIN :")
# print(post_data)

#!/usr/bin/env python3
import sys
import os

# Lire les données POST depuis stdin
post_data = sys.stdin.read()

# Extraire les valeurs des champs "name" et "email" (supposant que les données sont dans le format "name=valeur&email=valeur")
data_pairs = post_data.split('&')
name = None
email = None
for pair in data_pairs:
    key, value = pair.split('=')
    if key == 'name':
        name = value
    elif key == 'email':
        email = value

# Écrire les données dans un fichier en mode binaire
with open('/chemin/vers/votre/fichier/output.txt', 'wb') as file:
    # Convertir les données en bytes (UTF-8 est utilisé ici pour l'encodage)
    data = "Nom : {}\nEmail : {}".format(name, email).encode('utf-8')
    # Écrire les données dans le fichier
    file.write(data)

# Calculer la longueur de la réponse
content_length = len("Content-type: text/html\n\n<html><head><title>Données enregistrées</title></head><body><h1>Données enregistrées avec succès !</h1></body></html>")

# En-tête CGI indiquant le contenu et la longueur
print("Content-type: text/html")
print("Content-Length: {}\n".format(content_length))

# Afficher un message de confirmation dans la sortie standard
print("<html>")
print("<head><title>Données enregistrées</title></head>")
print("<body>")
print("<h1>Données enregistrées avec succès !</h1>")
print("</body>")
print("</html>")
