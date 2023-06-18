<?php

$nom = $_POST['nom'];
$mail = $_POST['mail'];
$mes = $_POST['message'];


$to      = 'sadkaizo@outlook.com';
$subject = $nom;
$message = $mes;
$headers = 'From: '.$mail. "\r\n" .
    'Reply-To: '.$mail. "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);


?>