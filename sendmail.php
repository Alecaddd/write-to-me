<?php

if($_POST["foo"]==''):/* if the input is not empty it means that a SPAM BOT filled up the entire form */
		
	$name=$_POST["name"];
	$email=$_POST["email"];
	$message=$_POST["message"];
	$recipient=$_POST["recipient"];
	
	if($name=='' || $email=='' || $message==''): echo '2'; exit(); endif; /* if some values is missing, return the error */
	
	/* remove this line */
	if($recipient==''): echo '1'; exit(); endif;
	/* end removable line */
	
	$date=date("d M Y - h:1 a");

	$mail=$recipient; /* change this variable with your email address */
	$header = "From: ".$name." <".$email.">" . "\r\n" . "Reply-To: ".$email."" . "\r\n" . "X-Mailer: PHP/" . phpversion();	
    $header .= "MIME-Version: 1.0\n";
	$header .= "Content-Type: text/html; charset=\"iso-8859-1\"\n";
	$header .= "Content-Transfer-Encoding: 7bit\n\n";
	$msg= '<html><body>New message from Your Website Contact Page.<br /><br /><strong>Name:</strong> '.$name.'<br /><br /><strong>Email:</strong> '.$email.'<br /><br /><strong>Message:</strong> '.nl2br($message).'<br /><br /><strong>Date:</strong> '.$date.'<br /><br /><br /><small><i>From - Your website</i></small></body></html>';
	if(@mail("$mail","Your website - Contact form",$msg,$header)): echo '1'; else: echo '3'; endif;/* check if the mail() function succeded */
	
else: echo '1'; endif;/* send a positive fake return if SPAM is detected */