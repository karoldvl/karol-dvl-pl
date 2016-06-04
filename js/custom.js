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

	$('#countdown').countdown({
		layout:	'<div class="four columns counter-block"><span id="days-num">{dn}</span><h4 id="days-desc">{dl}</h4></div>' +
				'<div class="four columns counter-block"><span id="hours-num">{hn}</span><h4 id="hours-desc">{hl}</h4></div>' +
				'<div class="four columns counter-block"><span id="min-num">{mn}</span><h4 id="min-desc">{ml}</h4></div>' +
				'<div class="four columns counter-block"><span id="sec-num">{sn}</span><h4 id="sec-desc">{sl}</h4></div>',
		until: new Date(parseDate($('#countdown').data('date')))
	});

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

