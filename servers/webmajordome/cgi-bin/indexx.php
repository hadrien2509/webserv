<!DOCTYPE html>
<head>
    <html lang="fr">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue chez les Webmajordomes</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background-image: url('..//img/rick-roll.gif');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: 100% 100%;
            background-color: #000;
            /* color: #9b0000; */
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            font-weight: bold;
        }
        
        header {
            color: #ffffff;
            background-color: #0077d9;
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 36px;
        }

        p {
            font-size: 18px;
            margin: 20px;
        }

        nav {
            background-color: #333;
            text-align: center;
            padding: 10px;
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav li {
            margin: 0 20px;
        }

        nav a {
            text-decoration: none;
            color: #fff;
            font-weight: bold;
        }

        main {
			padding : 0 1em;
            flex-grow: 1;
        }

        footer {
            background-color: #333;
            font-weight: normal;
            color: #ffffff;
            text-align: center;
            padding: 10px;
            position: fixed;
            bottom: 0;
            width: 100%;
        }

        .logo {
            white-space: pre;
        }

    </style>
</head>
<body>
    <header>
        <h1>Bienvenue chez les Webmajordomes
            <?php
                // Récupérer l'heure actuelle au format H:i:s
                // while (true) {
                    $heure = date("H:i:s");
                    echo "<div id='time'>$heure</div>";
                    // sleep(1);
                // }
            ?>
        </h1>
    </header>
    
    <nav>
        <ul>
            <li><a href="#presentation">Présentation</a></li>
            <li><a href="#services">Nos Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="index.html">Index</a></li>
        </ul>
    </nav>

    <main>
		<audio loop autoplay>
            <source src="../rickrollsound.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
		<div class="logo">
            <!-- Your ASCII Art Logo -->
$$\      $$\ $$$$$$$$\ $$$$$$$\   $$$$$$\  $$$$$$$$\ $$$$$$$\  $$\    $$\ 
$$ | $\  $$ |$$  _____|$$  __$$\ $$  __$$\ $$  _____|$$  __$$\ $$ |   $$ |
$$ |$$$\ $$ |$$ |      $$ |  $$ |$$ /  \__|$$ |      $$ |  $$ |$$ |   $$ |
$$ $$ $$\$$ |$$$$$\    $$$$$$$\ |\$$$$$$\  $$$$$\    $$$$$$$  |\$$\  $$  |
$$$$  _$$$$ |$$  __|   $$  __$$\  \____$$\ $$  __|   $$  __$$<  \$$\$$  / 
$$$  / \$$$ |$$ |      $$ |  $$ |$$\   $$ |$$ |      $$ |  $$ |  \$$$  /  
$$  /   \$$ |$$$$$$$$\ $$$$$$$  |\$$$$$$  |$$$$$$$$\ $$ |  $$ |   \$  /   
\__/     \__|\________|\_______/  \______/ \________|\__|  \__|    \_/    
        </div>
		<!-- <img src="/img/rick-roll.gif" /> -->
        <section id="presentation">
            <h2>Présentation</h2>
            <p>Bienvenue sur notre site Web. Chez les Webmajordomes, nous sommes dédiés à fournir les meilleurs services web.</p>
        </section>
        
        <section id="services">
            <h2>Nos Services</h2>
            <ul>
                <li>Conception de sites Web</li>
                <li>Développement d'applications Web</li>
                <li>Optimisation SEO</li>
                <li>Hébergement Web</li>
            </ul>
        </section>
        
        <section id="contact">
            <h2>Contact</h2>
            <p>N'hésitez pas à nous contacter pour toute question ou demande de devis.</p>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Webmajordomes. Tous droits réservés.</p>
    </footer>
</body>
</html>
