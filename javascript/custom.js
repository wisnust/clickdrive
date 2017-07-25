$(document).ready(function() {
	
	$('.carousel').carousel()

	$('.login-panel input').blur(function(event) {
		if ($(this).val().length > 1) {
			$(this).addClass('has-value');
		}
	});
});