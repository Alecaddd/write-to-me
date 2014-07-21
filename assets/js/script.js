jQuery( document ).ready(function( $ ) {
	
	/* IF YOU REMOVED THE HTML OF THE INITIALIZE EXAMPLE ACTIVATE THE CALL TO THIS FUCNTION BELOW*/
	/* init(); */

	var recipient; /* store the recipient email for the example, you can delete this */
	
	/* you can delete from here */
	$( document ).on( 'click' , '.btn-init' , function() {
	
		if( isValidEmailAddress( $('#emailRecipient').val() ) ) {
		
			recipient = $('#emailRecipient').val();
		
			$('div.error').removeClass('error');
		
			init();
		
		} else {
			
			$('#emailRecipient').focus().parent('div').addClass('error');
			
		}
		
	});
	
	$( document ).on( 'click' , '.no-recipient' , function() {
		
		init();
		
	});
	/* to here */
	
	$("#form-send").submit(function(e) {
		e.preventDefault(); /* prevent the submission of the form */
		
		/* check if the email format is valid (text@text.ext) */
		if( !isValidEmailAddress( $('#emailUser').val() ) ) { $('#emailUser').parent('.required').addClass('error'); } else {
			
			/* remove all the error class in case of a second sending attempt */
			$(".required").removeClass('error');
			/* show the loading animation */
			$('.loading').fadeIn(500);
			/* POST ajax call */
			$.post("sendmail.php", { 
					recipient: recipient, /* you can remove this one */
					name: $('#nameUser').val(), 
					email: $('#emailUser').val(), 
					message: $('#msgUser').val(), 
					foo: $('#foo').val(), 
					rand: Math.random() 
				}, 
				function(response) {
				
				    if (response == 1) { /* positive response, mail sent */
				    
				    	$('.loading').fadeOut(400, function(){ /* hide the loading animation */
				    	
					    	$('.mail-container').addClass('hover'); /* flip the mail container */
					    	
				    	});
				    	
				    	$('.send').fadeOut(1000); /* hide the button */
				    	/* console.log('ok'); */
		
				    } else if(response == 2) { /* missing values, in case the HTML5 required attribute didn't work */
				    
				    	$('.loading').fadeOut(200, function(){
				    	
				    		$(".required").each(function() {
				    			/* fore every required class, check if the inside input field is empty and add the error class */
				    			$(this).find('.send-input').filter(function() { return !this.value; }).parent('.required').addClass('error');
				    			
				    		});
				    		
				    	});
				    	/* console.log('not ok'); */
						
				    } else if(response == 3) { /* all the data were ok but the mail() function didn't work */
						/* this could depend on your server, handle the answer as you wish */
						//console.log('not ok technical');
				    }
				});
			
		  	return false;
	  	
	  	}
	  	
	});
	
	$( document ).on( 'click' , '.reload' , function() { /* reload the current page */
		
		window.location.reload();
		
	});
	
});

/* REGEXP pattern to check the written email address */
function isValidEmailAddress(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
};

/* initialize function, necessary to get the height of the mail content */

/* 
IF YOU REMOVED THE HTML OF THE INITIALIZE EXAMPLE USE THIS FUCNTION BELOW AND DELETE THE OTHER
function init() {

	$('.mail-container').fadeIn(400,function(){
		    	
		$('.mail-content').height($('.mail-front').outerHeight());
					
	});
}

*/

/* you can remove this function if you're using the one above */
function init() {
	$('.btn-init').find('span').fadeOut(100,function(){
	    	
	    $(this).html('<i class="fa fa-cog fa-spin"></i>').fadeIn(100, function(){
	    	
	    	$('.btn-init').addClass('sending');
	    		
	    	$('.recipient-container').slideUp(400);
	    	
	    	$('.description').slideUp(400,function(){
		    	
		    	$('.mail-container').fadeIn(400,function(){
		    	
		    		$('.mail-content').height($('.mail-front').outerHeight());
		    	
		    		$('.btn-init').prop('type', 'submit').removeClass('sending btn-init').addClass('send').find('span').fadeOut(100,function(){
			    	
			    		$(this).html('Send').fadeIn(100);
			    	
					});
					
				});
		    	
	    	});
	    		
	    });
	    	
	});
}