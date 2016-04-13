$(document).ready(function() {

	$(document).on('click', '.question', function() {
		var tempId = $(this).attr('id');
		localStorage.setItem('tempId', tempId);
		window.location = 'question.html';
	}); 

	$('.all').on('click', function() {
		$('#question-list').empty();
		getAll();
	});

	$('.answered').on('click', function() {
		$('#question-list').empty();
		getAnswered();
	});

	$('.not-answered').on('click', function() {
		$('#question-list').empty();
		getNotAnswered();
	});

	getAll();

});

function getAll() {
	var data = localStorage.getItem('questions');
	if (data) {
		var questions = JSON.parse(data);
		for (var i = questions.length - 1; i >= 0; i--) {
			var question = questions[i];
			var a = document.createElement('a');
			a.setAttribute('href', '#');
			a.setAttribute('id', question.id);
			a.setAttribute('class', 'question');
			a.innerHTML = question.text;
			$('#question-list').append(a);
		}
	}
}

function getAnswered() {
	var data = localStorage.getItem('questions');
	if (data) {
		var questions = JSON.parse(data);
		for (var i = questions.length - 1; i >= 0; i--) {
			if ( questions[i].answers.length > 0 ) {
				var question = questions[i];
				var a = document.createElement('a');
				a.setAttribute('href', '#');
				a.setAttribute('id', question.id);
				a.setAttribute('class', 'question');
				a.innerHTML = question.text;
				$('#question-list').append(a);
			}
		}
	}
}

function getNotAnswered() {
	var data = localStorage.getItem('questions');
	if (data) {
		var questions = JSON.parse(data);
		for (var i = questions.length - 1; i >= 0; i--) {
			if ( questions[i].answers.length === 0 ) {
				var question = questions[i];
				var a = document.createElement('a');
				a.setAttribute('href', '#');
				a.setAttribute('id', question.id);
				a.setAttribute('class', 'question');
				a.innerHTML = question.text;
				$('#question-list').append(a);
			}
		}
	}
}

function questionsGen() {
	 // body...  
}