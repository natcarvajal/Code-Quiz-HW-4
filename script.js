// * homepage
//         view high scores button
//         start quix button
//         timer

// event listener for start quiz button
// on the click remove current html
var questions = [
  {
    question: "What is the proper way to display an alert?",
    answer1: "alert('alert text here')",
    answer2: "alert[alert text here]",
    answer3: "alert['alert text here']",
    answer4: "alert(alert text here)",
    correct: "alert('alert text here')",
  },
  {
    question: "What is the DOM?",
    answer1: "Description Object Methods",
    answer2: "Document Observing Model",
    answer3: "Document Object Model",
    answer4: "Document Object Methods",
    correct: "Document Object Model",
  },
  {
    question: "=== means?",
    answer1: "not equal value or not equal type",
    answer2: "equal value and equal type",
    answer3: "equal to",
    answer4: "None of the above",
    correct: "equal value and equal type",
  },
  {
    question: "What is NOT datatype in javascript?",
    answer1: "a string",
    answer2: "an integer",
    answer3: "an object",
    answer4: "an array",
    correct: "an array",
  },
];
$(".start-quiz").click(function () {
  displayQuestions();
  setTime();
});
var secondsLeft = 40;
var currentQuestions = 0;
var score = 0;
function displayQuestions() {
  $(".jumbotron").html(`<div>${questions[currentQuestions].question}</div>
  <button class="quest">${questions[currentQuestions].answer1}</button class="quest"><br>
  <button class="quest">${questions[currentQuestions].answer2}</button class="quest"><br>
  <button class="quest">${questions[currentQuestions].answer3}</button class="quest"><br>
  <button class="quest">${questions[currentQuestions].answer4}</button class="quest"><br>`);
  $("button").click(function (event) {
    if (event.target.innerText === questions[currentQuestions].correct) {
      $(".results").html(`<h5>CORRECT <i class="fas fa-check"></i></h5>`);
      score += 25;
    } else {
      $(".results").html(`<h5>INCORRECT <i class="fas fa-times"></i></h5>`);
      secondsLeft -= 10;
    }
    if (questions.length - 1 > currentQuestions) {
      currentQuestions++;
      displayQuestions();
    } else {
      $(".jumbotron").html(`<div class="end"> Score = ${score} </div>
      <form class="form-inline">
        <div class="form-group mx-sm-3 mb-2">
          <label class="sr-only">Enter</label>
          <input
            type="text"
            class="form-control"
            id="enter"
            placeholder="Enter Initials"
          />
          <p id="text"></p>
        </div>
        <button id = "save" type="submit" class="btn btn mb-2">Save</button>
        <a class="home" href="./index.html " role="button"
          ><i class="fas fa-home fa-s"></i>
        </a>
      </form>`);
    }
  });
}

//     in quiz
//         the questions
//         4 answer
//         timer running
var timeEl = document.querySelector(".time-left");
var highEl = document.getElementById(".high-score");

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      // sendMessage();
    }
  }, 1000);
}

// function sendMessage() {
//   timeEl.textContent = $(".jumbotron").html(
//     `<div class= "time-up"></div> Times Up <i class="fas fa-hourglass-end"></i></div>`
//   );

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);
// }

//             if wrong answer
//                 display wrong and remove time by 10 seconds

//     in the end
//         display final score
//         option enter initals to save to local storage

//     ignore for now: highscores
//             2 seperate files for high scores/ rgegular js
//     */
