<!DOCTYPE html>
<head>
    <html lang="fr">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="styles.css">
    <title>Bienvenue chez les Webmajordomes</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<style>
	h1 {
		color : white;
	}
	body {
		color : black;
		background-image: url('/img/rick-roll.gif');
		background-repeat: no-repeat;
		background-attachment: fixed;
		background-size: 100% 100%;
		background-color: #000;
	}
	main {
		background-color: transparent;
	}

</style>
</head>
<body>
    <header>
        <h1>Bienvenue chez les Webmajordomes
            <div id="heure"></div>
            <script src="script.js"></script>
        </h1>
    </header>
    
    <div class="hamburger-menu">
		<input id="menu__toggle" type="checkbox" />
		<label class="menu__btn" for="menu__toggle">
			<span></span>
		</label>
	
		<ul class="menu__box">
				<li><a class="menu__item" href="index.html">Home</a></li>
				<li><a class="menu__item" href="upload.html">Upload</a></li>
				<li><a class="menu__item" href="/404">error 404</a></li>
				<li><a class="menu__item" href="/downloads">downloads</a></li>
				<li><a class="menu__item" href="form.html">form</a></li>
				<li><a class="menu__item" href="rick.html">Rick</a></li>
				<li><a class="menu__item" href="php.php">php</a></li>
				<li><a class="menu__item" href="breakout/index.html">breakout</a></li>
				<li><a class="menu__item" href="/breakout/pong.html">pong</a></li>
			</ul>
	</div>

    <main>
		<audio loop autoplay>
            <source src="rickrollsound.mp3" type="audio/mpeg">
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
