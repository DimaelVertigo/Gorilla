$(document).ready(function() {

	var questionField = $('.wmd-input'),
			commentBtn = $('.comment-submit');

	/*----------  Add new question  ----------*/
	questionField.on('keyup', function(e) {

		if( questionField[0].value.length > 2 ) {
			commentBtn.removeAttr('disabled');
		} else {
			commentBtn.attr('disabled', 'disabled');
		}
		
		if(e.keyCode != 13) {
			return;
		} else {
			addNew();
		}
	});

	
	commentBtn.on('click', function() {
		addNew();
		window.location = 'list.html';
	});

	function addNew() {
		var q = {
			id: genId(),
			user: localStorage.getItem('user'),
			text: questionField[0].value,
			answers: []
		};
		var data = localStorage.getItem('questions');
		var arr = [];

		if (data) {
			arr = JSON.parse(data);
		} 

		arr.push(q);
		localStorage.setItem('questions', JSON.stringify(arr));
	};

	function genId() {
		var id = 0;
		for ( var i = 0; i < 4; i++ ) {
			id += Math.floor(Math.random() * 10000000);
		}
		return id;
	}

});