<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Afficher les images</title>
</head>
<body>
  <div id="image-container"></div>

  <script>
    // Référence à la div où nous afficherons les images
    const imageContainer = document.getElementById("image-container");

    // Chemin vers le dossier contenant les images
    const folderPath = "./";

    // Fonction pour obtenir la liste des fichiers dans le dossier
    async function fetchImages() {
      try {
        const response = await fetch(folderPath);
        const fileNames = await response.json();

        // Parcourir la liste des noms de fichiers et afficher les images
        fileNames.forEach(fileName => {
          const imgElement = document.createElement("JPG");
          imgElement.src = folderPath + fileName;
          imgElement.alt = fileName;
          imageContainer.appendChild(imgElement);
        });
      } catch (error) {
        console.error("Erreur lors de la récupération des images :", error);
      }
    }

    // Appeler la fonction pour afficher les images lorsque la page est chargée
    window.onload = fetchImages;
  </script>
</body>
</html>
