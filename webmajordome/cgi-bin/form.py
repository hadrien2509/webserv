#!/usr/bin/env python3

print("Content-type: text/html\n")
print("<head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='../styles.css'><title>Bienvenue chez les Webmajordomes</title></head>\n")

# Récupère les données du formulaire
import cgi

formulaire = cgi.FieldStorage()
nom = formulaire.getvalue("nom")
email = formulaire.getvalue("email")

print(f"<h1>Données reçues : {nom} {email}</h1>")

# Vérifie si les données sont présentes
if nom is not None and email is not None:
    # Écrit les données dans un fichier
    try:
        with open("donnees.txt", "a") as fichier:
            fichier.write(f"Nom: {nom}, Email: {email}\n")
        print("<h1>Données enregistrées avec succès !</h1>")
    except Exception as e:
        print(f"<h1>Une erreur s'est produite : {e}</h1>")
else:
    print("<h1>Veuillez fournir un nom et un email.</h1>")
