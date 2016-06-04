var $ = jQuery.noConflict();


/* Document ready
================================================== */

$(document).ready(function() {

	/* jQuery countdown
	================================================== */

	function parseDate(input) {
		var parts = input.match(/(\d+)/g);
		return new Date(parts[0], parts[1]-1, parts[2]);
	}


	/* subscribe form
	================================================== */

	$("#subscribe-submit").click(function(){
		var valid = '';
		var isr = ' required.';
		var mail = $("#mail").val();
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />Email'+isr;
		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Email required");
		}
		else {
			var datastr ='&mail=' + mail;
			$("#response").css("display", "block");
			$("#response").html("Sending...");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});

});

