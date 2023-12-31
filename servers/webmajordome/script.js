// Fonction pour récupérer l'heure en PHP via AJAX
function getHeure() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'heure.php', true);

    xhr.onload = function() {
		if (xhr.status == 200) {
            // console.log(xhr.responseText);
			var response = JSON.parse(xhr.responseText);
            document.getElementById('heure').innerHTML = response.heure;
            // document.getElementById('heure').innerHTML = xhr.response;
        }
    };

    xhr.send();
}

// Actualise l'heure toutes les secondes
setInterval(getHeure, 1000);