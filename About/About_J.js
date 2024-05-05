document.addEventListener('DOMContentLoaded', function() {
  const questionHeaders = document.querySelectorAll('.question-header');

  questionHeaders.forEach(function(questionHeader) {
    questionHeader.addEventListener('click', function() {
      const answer = questionHeader.nextElementSibling;

      // Hide all other answers
      const allAnswers = document.querySelectorAll('.answer');
      allAnswers.forEach(function(a) {
        if (a !== answer) {
          a.classList.remove('show');
        }
      });

      // Toggle the current answer
      answer.classList.toggle('show');
    });
  });
});
