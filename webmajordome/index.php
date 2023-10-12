<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Heure Originale</title>
    <style>
        /* Styles CSS pour mettre en forme l'affichage de l'heure */
        body {
            background-color: #333;
            color: white;
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 100px;
        }
        h1 {
            font-size: 3rem;
        }
        #time {
            font-size: 4rem;
            font-weight: bold;
            color: #ff6600;
        }
    </style>
</head>
<body>
    <h1>Heure Actuelle</h1>
    <?php
        // Récupérer l'heure actuelle au format H:i:s
        $heure = date("H:i:s");
        // Afficher l'heure dans une balise avec l'id "time"
        echo "<div id='time'>$heure</div>";
    ?>
</body>
</html>
