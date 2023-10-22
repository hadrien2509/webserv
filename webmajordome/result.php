<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
    <title>Résultat du Formulaire</title>
</head>
<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "GET") {
        // Traitement pour la méthode GET
        $name = $_GET["name"];
        $email = $_GET["email"];
        echo "<h1>Résultat de la requête GET</h1>";
        echo "<p>Nom: $name</p>";
        echo "<p>Adresse e-mail: $email</p>";
    } elseif ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Traitement pour la méthode POST
        $name = $_POST["name"];
        $email = $_POST["email"];
        echo "<h1>Résultat de la requête POST</h1>";
        echo "<p>Nom: $name</p>";
        echo "<p>Adresse e-mail: $email</p>";
    } elseif ($_SERVER["REQUEST_METHOD"] == "PUT") {
        // Traitement pour la méthode PUT
        parse_str(file_get_contents("php://input"), $putData);
        $name = $putData["name"];
        $email = $putData["email"];
        echo "<h1>Résultat de la requête PUT</h1>";
        echo "<p>Nom: $name</p>";
        echo "<p>Adresse e-mail: $email</p>";
    } elseif ($_SERVER["REQUEST_METHOD"] == "DELETE") {
        // Traitement pour la méthode DELETE
        parse_str(file_get_contents("php://input"), $deleteData);
        $name = $deleteData["name"];
        $email = $deleteData["email"];
        echo "<h1>Résultat de la requête DELETE</h1>";
        echo "<p>Nom: $name</p>";
        echo "<p>Adresse e-mail: $email</p>";
    } else {
        echo "<h1>Méthode de requête non gérée.</h1>";
    }
    ?>
</body>
</html>
