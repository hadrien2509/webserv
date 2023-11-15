<?php
	date_default_timezone_set('Europe/Brussels');
	// Renvoie l'heure actuelle au format JSON
	echo json_encode(array('heure' => date('H:i:s')));
?>
