#!/usr/bin/env python
import os

# Entête HTML
print("""

	<meta charset="UTF-8">
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<link rel="stylesheet" href="styles.css">
<script src="script.js"></script>
<h1>InstaPet</h1>
<div class="card-container">
<form enctype="multipart/form-data">
	<div class="card">
		<label for="file" class="custom-file-upload">
			<div class="icon">
				<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512"><path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384v38.6C310.1 219.5 256 287.4 256 368c0 59.1 29.1 111.3 73.7 143.3c-3.2 .5-6.4 .7-9.7 .7H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128zm48 96a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v48H368c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v48c0 8.8 7.2 16 16 16s16-7.2 16-16V384h48c8.8 0 16-7.2 16-16s-7.2-16-16-16H448V304z"/></svg>
			</div>
		</label>
		<input class="custom-file-input" id="file" type="file">
		<button id="submit-button" type="button">envoyer la photo</button>
	</div>
	</form>
""")

# Chemin vers le dossier contenant les images
image_dir = "img"

# Liste des fichiers d'images dans le dossier
image_files = [f for f in os.listdir("InstaPet/" + image_dir) if f.lower().endswith(('.png', '.jpg', '.jpeg', '.gif'))]

# Parcourir la liste des fichiers et générer les balises <div>
for image_file in image_files:
    image_path = os.path.join(image_dir, image_file)
    div_tag = f'<div class="card"><img src="{image_path}" alt="{image_file}"></div>'
    print(div_tag)

# Fin de la page
print("</div></body></html>")
