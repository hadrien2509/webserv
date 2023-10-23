#!/bin/bash

# En-tête CGI
echo "Content-Type: text/html"
echo

# Lire les données POST envoyées par le formulaire
read -n $CONTENT_LENGTH POST_DATA

# Fonction pour décoder les caractères spéciaux
urldecode() {
  local url_encoded="${1//+/ }"
  printf '%b' "${url_encoded//%/\\x}"
}

# Extraire les valeurs des paramètres name et email et les décoder
NAME=$(urldecode $(echo "$POST_DATA" | grep -o 'name=[^&]*' | cut -d= -f2))
EMAIL=$(urldecode $(echo "$POST_DATA" | grep -o 'email=[^&]*' | cut -d= -f2))

# Générer la page Web de réponse
cat <<EOF
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
	<link rel="stylesheet" href="../styles.css">
    <title>Réponse du formulaire CGI</title>
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
    <h1>Réponse du formulaire BASH</h1>
    <p>Nom : $NAME</p>
    <p>E-mail : $EMAIL</p>
</body>
</html>
EOF
