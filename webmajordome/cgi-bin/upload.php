#!/usr/bin/php-cgi
<?php
// Récupérer le contenu de l'environnement
$contentLength = $_SERVER['CONTENT_LENGTH'];
$inputData = file_get_contents('php://input');

// Analyser les données multipart/form-data
parse_str($inputData, $formData);

// Récupérer le fichier envoyé
$fileData = $_FILES['fichier'];

// Récupérer le nom du fichier
$fileName = $fileData['name'];

// Vérifier si le fichier a été téléchargé avec succès
if (move_uploaded_file($fileData['tmp_name'], $fileName)) {
    echo "Content-type: text/html\n\n";
    echo "<html><head><title>Fichier téléchargé</title></head><body>";
    echo "<h1>Fichier téléchargé avec succès !</h1>";
    echo "<p>Nom du fichier : $fileName</p>";
    echo "<p>Données du formulaire :</p>";
    echo "<pre>";
    print_r($formData);
    echo "</pre>";
    echo "</body></html>";
} else {
    echo "Content-type: text/html\n\n";
    echo "<html><head><title>Erreur de téléchargement</title></head><body>";
    echo "<h1>Erreur lors du téléchargement du fichier.</h1>";
    echo "</body></html>";
}
?>
