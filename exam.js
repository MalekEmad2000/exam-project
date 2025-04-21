var questionTitle = document.getElementById("question-title");
var choices = document.querySelectorAll(".choice-button");
var pageNumber = document.getElementsByClassName("question-number")[0];
var Timer = document.querySelector(".Timer");

// global variable to get current question index starting with index 0 aka first question;
var currentQuestion = 0;
// array containig all questions
var questions = [];
var markedQues = [];
var markedDiv = document.querySelector(".marked-questions-container");
var markButton = document.querySelector(".mark-btn");

function shuffle() {
  for (var i = 0; i < questions.length; i++) {
    var test = Math.floor(Math.random() * questions.length);
    var swap = questions[i];
    questions[i] = questions[test];
    questions[test] = swap;
  }
}

// ajax request to fetch exam questions
function getQuestions() {
  var questionsReq = new XMLHttpRequest();
  questionsReq.open("get", "questions.json");
  questionsReq.send();
  questionsReq.addEventListener("readystatechange", function () {
    if (questionsReq.readyState === 4 && questionsReq.status === 200) {
      questions = JSON.parse(questionsReq.response)["questions"];
      shuffle();
      renderQuestion();
    }
  });
}

getQuestions();
// adding event listener to all choice buttons and handling choice selection a
choices.forEach(function (button) {
  button.addEventListener("click", function (event) {
    // saving selected choice in questions array
    questions[currentQuestion].answer = this.value;
    // adding to update css for selected choice
    renderQuestion();
    console.log(questions);
  });
});
// function to render a question
function renderQuestion() {
  var question = questions[currentQuestion];
  pageNumber.textContent = currentQuestion + 1;
  questionTitle.textContent = question.questionTitle;
  const choiceKeys = Object.keys(question.choices);

  choices.forEach(function (choice, index) {
    const key = choiceKeys[index];
    const label = choice.closest("label");

    choice.value = key;
    // if user selected a choice highlight selected questino
    questions[currentQuestion].answer === choice.value
      ? label.classList.add("selected-choice")
      : label.classList.remove("selected-choice");
    label.textContent = question["choices"][key];
    label.prepend(choice);
  });
  var found = markedQues.find((ele) => {
    return ele == currentQuestion;
  });
  if (found === undefined) {
    markButton.textContent = "mark";
  } else {
    markButton.textContent = "unmark";
  }
}

function next() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion();
  }
}
function prev() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion();
  }
}

function mark() {
  var found = markedQues.find((ele) => {
    return ele == currentQuestion;
  });
  var foundind = markedQues.findIndex((ele) => {
    return ele == currentQuestion;
  });
  if (found === undefined) {
    markedQues.push(currentQuestion);
  }
  if (markButton.textContent == "unmark") {
    markedQues.splice(foundind, 1);
  }
  rednderMark();
  renderQuestion();
}
function rednderMark() {
  markedDiv.innerHTML = "";
  markedQues.forEach((ele) => {
    var button = document.createElement("button");
    button.className = "marked-Btn";
    button.textContent = `Q${ele + 1}`;
    button.addEventListener("click", () => {
      currentQuestion = ele;
      renderQuestion();
    });
    markedDiv.append(button);
  });
}
function examTime() {
  var sec = 0;
  var examTime = 1800000;
  var interval = setInterval(() => {
    sec += 1000;
    var percantage = (sec / examTime) * 100;
    Timer.style.display = "block";
    Timer.style.width = percantage + "%";
  }, 1000);

  var timeout = setTimeout(() => {
    clearInterval(interval);
    alert(sec);
  }, examTime + 100);
}
examTime();
