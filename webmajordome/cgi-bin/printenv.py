import os

# Récupère et affiche toutes les variables d'environnement
print("Variables d'environnement :")
for cle, valeur in os.environ.items():
    print("<br>")
    print(f"{cle} : {valeur}")
    print("</br>")