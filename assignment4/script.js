document.querySelectorAll('.year').forEach(function(el) {
  el.textContent = new Date().getFullYear();
});

document.querySelectorAll('[data-contact-form]').forEach(function(form) {
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    var message = form.querySelector('.form-message');
    if (message) {
      message.textContent = 'Your form was submitted successfully.';
    }
    form.reset();
  });
});

var quizButton = document.querySelector('[data-quiz-button]');
if (quizButton) {
  quizButton.addEventListener('click', function() {
    var checked = document.querySelector('input[name="quiz-answer"]:checked');
    var result = document.querySelector('.quiz-result');
    if (!result) return;
    if (!checked) {
      result.textContent = 'Please choose an answer.';
    } else if (checked.value === 'spring') {
      result.textContent = 'Correct! Morels are most often found in spring.';
    } else {
      result.textContent = 'Wrong! Morels are most often found in spring.';
    }
  });
}