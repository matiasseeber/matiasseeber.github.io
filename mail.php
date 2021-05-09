<?php
//get data from form  
$name = $_POST['Nombre'];
$email= $_POST['email'];
$message= $_POST['Comentarios'];
$to = "matiasseeber@gmail.com";
$subject = "Contacto";
$txt ="Nombre = ". $name . "\r\n  Email = " . $email . "\r\n Mensaje =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
?>