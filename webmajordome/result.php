<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Debugging Environment Variables</title>
</head>
<body>
<h1>Environment Variables</h1>
<?php
foreach ($_SERVER as $key => $value) {
    echo "<b>$key:</b> $value<br>";
}
?>
</body>
</html>
