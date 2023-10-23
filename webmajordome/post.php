<?php
// En-tête CGI
header("Content-Type: text/html");

// Vérifie si des données POST ont été reçues
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Extraire les valeurs des paramètres name et email
    $NAME = isset($_POST["name"]) ? $_POST["name"] : "";
    $EMAIL = isset($_POST["email"]) ? $_POST["email"] : "";
} else {
    $NAME = "";
    $EMAIL = "";
}

// Générer la page Web de réponse
echo <<<HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="../styles.css">
    <title>Réponse du formulaire PHP</title>
</head>
<body>
<div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
        <span></span>
    </label>
    <ul class="menu__box">
        <li><a class="menu__item" href="/index.html">Home</a></li>
        <li><a class="menu__item" href="/form.html">form</a></li>
        <li><a class="menu__item" href="/rick.html">Rick</a></li>
        <li><a class="menu__item" href="/php.php">php</a></li>
        <li><a class="menu__item" href="/breakout/index.html">breakout</a></li>
        <li><a class="menu__item" href="/breakout/pong.42">Not_a_pong</a></li>
        <li><a class="menu__item" href="//pong.42">pong</a></li>
        <li><a class="menu__item" href="/test/index.html">TEST</a></li>
    </ul>
</div>
<h1>Réponse du formulaire PHP</h1>
<p>Nom : $NAME</p>
<p>E-mail : $EMAIL</p>
</body>
</html>
HTML;
?>
