<!DOCTYPE html>
<html class="no-js" lang="">
	<head>
		<meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Write to Me - Simple contact form in PHP & jQuery</title>
        <meta name="description" content="Simple contact form in PHP & jQuery">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
        <link href='http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,700,300,200' rel='stylesheet' type='text/css'>
		<link rel="stylesheet" href="assets/css/base.css">
		<link rel="stylesheet" href="assets/css/style.css">
	</head>	
	<body>
		
		<h1 class="page-title">Write to Me</h1>
		<h2 class="page-description">Simple contact form in PHP & jQuery</h2>
		
		<div class="container">
		
			<div class="loading">
				<div class="rect1"></div>
				<div class="rect2"></div>
				<div class="rect3"></div>
				<div class="rect4"></div>
				<div class="rect5"></div>
				<p>Sending..</p>
			</div>
			
			<div class="input-container recipient-container">
			    <label for="emailRecipient">Insert your email address</label>
			    <input type="email" id="emailRecipient" placeholder="your email" class="first-input" required>
			</div>
			<p class="description">No worries! I won't store, save, or copy your email and you won't receive any email spam from me. I need an email so you can receive the message that you're going to send thru this form.<br />If you're not interested in seeing the message, <a href="#" class="no-recipient">click here</a></p>
				
			<form id="form-send" method="post">
				
				<div class="mail-container">
					
					<div class="mail-content">
						
						<div class="mail-front">
							
							<div class="mail-body">
								
								<div class="input-container required name-input">
								    <label for="nameUser">Insert your name</label>
								    <input type="text" id="nameUser" placeholder="your name" class="send-input" required>
								</div>
								
								<div class="input-container required email-input">
								    <label for="emailUser">Insert your email address</label>
								    <input type="email" id="emailUser" placeholder="your email" class="send-input" required>
								</div>
								
								<div class="input-container required msg-input">
								    <label for="msgUser">How can I help you?</label>
								    <textarea id="msgUser" rows="3" placeholder="your message" class="send-input" required></textarea>
								</div>
								
							</div>
							
						</div>
					
						<div class="mail-back">
						
							<div class="mail-body">
							
								<i class="fa fa-paper-plane fa-5x"></i>
								
								<p class="thanks-title">Thank you!</p>
								<p class="thanks-msg">Your email is on its way</p>
								
								<a href="#" class="reload">Send another one</a>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				
				<div class="input-container">
					<input id="foo" type="hidden" value=""><!-- leave this hidden input without values for SPAM prevention -->
					<!-- change the button with this one for your code => <button type="submit" class="btn send"><span>Send</span></button> -->
					<button type="button" class="btn btn-init"><span>Let's get Started</span></button>
				</div>
			
			</form>
		
		</div>
		
		<div class="foot">Coded with <i class="fa fa-heart"></i> by <a href="http://www.alecaddd.com">Alecaddd</a> under <a href="http://opensource.org/licenses/MIT">MIT license</a>
			<p><a href="https://github.com/Alecaddd/write-to-me" class="btn btn-github" target="_blank" rel="external"><i class="fa fa-github"></i> DOWNLOAD SOURCE</a></p>
		</div>
		
		<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
        <script src="assets/js/script.js"></script>
        <script>
		  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
		
		  ga('create', 'UA-12327118-3', 'auto');
		  ga('send', 'pageview');
		
		</script>
	</body>
</html>