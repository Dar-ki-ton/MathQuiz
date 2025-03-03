// Math Quiz Generator

// Event Listener with an Anonymous Function
// Note: In order to pass parameters to an event function, you must
// pass an "anonymous function", which is just a function without an
// identifier.  See the example below.

// 1. Write the function getRandomNumber that generates a random whole number from 1 to 10
// This function has no parameters or return value.

// 2. Write the function generateQuestion to update the question on the page
// This function has 2 parameters, which are the numbers to display in the question
// This function returns a string

// 3. Initialize the quiz by creating 2 global variables for the numbers of the quiz question.
// These values are random and should use the getRandomNumber function
// You must also have a line that displays the question and this line
// must include the generateQuestionText function.

// 4. Write the getFeedback function. This function takes 2 parameters:
// the user's guess and the correct answer.
// The function must return a string:
//   - "Correct!" if the user's guess is correct
//   - "Try again!" if the user's guess is wrong

// 5. Write the function checkAnswer.
// This function takes 3 parameters:  The 2 randomly generated values and the user's guess
// and states whether it is correct or incorrect.
// This function also generates a new question
// Note: You must call your getFeedback, getRandomNumber, and generateQuestionText
// functions within this function.

// 6. Add 2 creative elements to your assignment.  Some ideas:
//   - Instead of always adding, have your quiz test other operations.
//   - Incorporate an overall score
//   - Make the quiz end after 10 attempts and displays final results
//   - Add a setInterval timer so the user has X seconds to answer the question
//   - Add difficulty options to ask harder questions (2 digit, 3 digit, etc)
//   - And many more. Get creative!

// 7. When finished, add this to your Github pages and to your portfolio for
// this unit.

var difficulty = document.getElementById(`difficulty`);
var question = document.getElementById(`question`);
var input = document.getElementById(`answer`);
var submitBtn = document.getElementById(`submit`);
var feedBack = document.getElementById(`feedback`);
var highScore = document.getElementById(`score`);
var score = 0;
var nextBtn = document.getElementById(`next`);
var operator = getRandomNumber();

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

difficulty.addEventListener(`input`, changeDiff);
function changeDiff() {
  input.value = ``;
  highScore.innerHTML = `Score: `;
  num1 = getRandomNumber(10) + 5;
  num2 = getRandomNumber(10) + 1;
  question.innerHTML = generateQuestion(num1, num2);
}

function generateQuestion(val1, val2) {
  if (difficulty.value == `normal`) {
    if (operator > 1) {
      return `${val1} + ${val2} = ?`;
    } else {
      return `${val1} - ${val2} = ?`;
    }
  } else if (difficulty.value == `hard`) {
    if (operator > 1) {
      return `${val1} x ${val2} = ?`;
    } else {
      return `${val1} / ${val2} = ?`;
    }
  }
}

var num1 = getRandomNumber(20) + 5;
var num2 = getRandomNumber(10) + 2;
question.innerHTML = generateQuestion(num1, num2);

function getFeedback(userAnswer, correctAnswer) {
  if (userAnswer == correctAnswer) {
    score++;
    return `Correct!`;
  } else {
    return `Try again!`;
  }
}
submitBtn.addEventListener("click", function () {
  checkAnswer(num1, num2, parseInt(input.value));
});
function checkAnswer(valueA, valueB, userGuess) {
  var answer;
  if (difficulty.value == `normal`) {
    if (operator > 1) {
      answer = valueA + valueB;
    } else {
      answer = valueA - valueB;
    }
  } else if (difficulty.value == `hard`) {
    if (operator > 1) {
      answer = valueA * valueB;
    } else {
      answer = valueA / valueB;
      answer = answer.toFixed(1);
    }
  }
  var feedback = getFeedback(userGuess, answer);
  feedBack.innerHTML = feedback;
  highScore.innerHTML = `Score: ${score}`;
}

nextBtn.addEventListener(`click`, nextQuestion);
function nextQuestion() {
  input.value = ``;
  feedBack.innerHTML = ``;
  num1 = getRandomNumber(20) + 1;
  num2 = getRandomNumber(20) + 1;
  question.innerHTML = generateQuestion(num1, num2);
}

// function waitAndCreate() {
//   difficulty.disabled = true;
//   nextBtn.disabled = true;

//   setTimeout(function () {
//     nextQuestion();
//     difficulty.disabled = false;
//     nextBtn.disabled = false;
//     feedBack.innerHTML = ``;
//   }, 1500);
// }
