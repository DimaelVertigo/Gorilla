$(document).ready(function() {

	var tempIdStr = localStorage.getItem('tempId');
	if (tempIdStr) {
		var tempId = parseInt(tempIdStr);

		var questionsStr = localStorage.getItem('questions');
		if (questionsStr) {
			var questions = JSON.parse(questionsStr);
			for ( var i = 0; i < questions.length; i++ ) {
				if (questions[i].id === tempId) {
					render(questions[i]);
					break;
				}
			}
		}
		
	}

	function render(question) {
		 $('.question-text').text(question.text);
		 $('.question-user').text(question.user);

		 question.answers.forEach(function(answer) {
		   $('.answers-list').append(
		   	'<div class="answer-area well"><p class="answer-text">' + answer.text + '</p><span class="answer-user">' + answer.user + '</span></div>');
		 });
	}


	var answerField = $('.wmd-input'),
			answerBtn = $('.comment-submit');
	/*----------  Question  ----------*/

	answerField.on('keyup', function() {

		if( answerField[0].value.length > 2 ) {
			answerBtn.removeAttr('disabled');
		} else {
			answerBtn.attr('disabled', 'disabled');
		}
	});

	answerBtn.on('click', function() {
		$('.answers-list').append(
			'<div class="answer-area well"><p class="answer-text">' + answerField[0].value + '</p><span class="answer-user">' + localStorage.getItem('user') + '</span></div>');

		var questionsStr = localStorage.getItem('questions');
		if (questionsStr) {
			var questions = JSON.parse(questionsStr);
			for ( var i = 0; i < questions.length; i++ ) {
				if (questions[i].id === tempId) {
					questions[i].answers.push({
						text: answerField[0].value,
						user: localStorage.getItem('user')
					});
					localStorage.setItem('questions', JSON.stringify(questions));
					break;
				}
			}
		}
	});
	





});