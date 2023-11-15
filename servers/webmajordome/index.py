nom_fichier = "webmajordome/index.html"

try:
    with open(nom_fichier, 'r') as fichier:
        contenu = fichier.read()
        print(contenu)
except FileNotFoundError:
    print(f"Le fichier '{nom_fichier}' n'a pas ete trouve.")
except PermissionError:
    print(f"Vous n'avez pas la permission d'accéder au fichier '{nom_fichier}'.")
except Exception as e:
    print(f"Une erreur s'est produite : {e}")
