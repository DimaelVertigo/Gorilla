$(document).ready(function() {
var username = $('.user-name'),
		submitBtn = $('.user-submit');

username.on('keydown', function(e) {

	if (username[0].value.length > 2) {
		$('.user-submit').removeAttr('disabled');
	} else {
		submitBtn.attr('disabled', 'disabled');
	}

	if (e.keyCode != 13) {
		return;
	} else {
		submitBtn.click();
	}
	
});

submitBtn.on('click', function() {
	localStorage.setItem('user', username[0].value);
	window.location = "list.html";
});

});