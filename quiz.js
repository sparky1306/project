let quizForm = document.getElementById('quizForm');
let quizResult = document.getElementById('quizResult');

quizForm.onsubmit = function() {
  q1 = parseInt(document.querySelector('input[name = "q1"]:checked').value);
  q2 = parseInt(document.querySelector('input[name = "q2"]:checked').value);
  q3 = parseInt(document.querySelector('input[name = "q3"]:checked').value);
  q4 = parseInt(document.querySelector('input[name = "q4"]:checked').value);

  result = q1 + q2 + q3 + q4;
  document.getElementById('correct').innerHTML = result + "/4";
  document.getElementById('score').innerHTML = result / 4 * 100 + "%";

  if (result === 4) {
    document.getElementById('resultMessage').innerHTML = "Fantastic!  You aced it!!!";
  }
  else if (result >= 3) {
    document.getElementById('resultMessage').innerHTML = "Not bad!  Good job!";
  }
  else {
    document.getElementById('resultMessage').innerHTML = "Hmm... You'd better go through the lesson again.";
  }

  quizResult.style.display = 'grid';
  quizForm.style.display = 'none';

  return false;
}