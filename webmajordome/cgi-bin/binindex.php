<!DOCTYPE html>
<html lang="fr">
	<head>
		<meta charset="utf-8">
		<title>Index des binaires</title>
	</head>
	<body>
		<h1>Index des binaires</h1>
		<ul>
			<?php
				$dir = opendir("./webmajordome");
				while ($file = readdir($dir)) {
					if (is_file($file)) {
						echo "<li><a href=\"$file\">$file</a></li>\n";
					}
				}
				closedir($dir);
			?>
		</ul>
</html>