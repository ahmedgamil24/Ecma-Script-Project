class Question {
  constructor(question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
  }
}

let questions,
  counter = 0;
let orderedQuestions = [0, 1, 2, 3, 4, 5];
let flagged = [];

async function getQuestion() {
  let loading = document.querySelector(".spinner-border");
  try {
    let res = await fetch("./questions/questions.json");
    questions = await res.json();
  } catch (e) {
    console.log(e);
  }
  loading.classList.add("d-none");
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = Math.floor(Math.random() * arr.length);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
shuffleArr(orderedQuestions);

async function addQuestionCard(arr) {
  let q = new Question(
    questions[arr[counter]].question,
    questions[arr[counter]].answers,
    questions[arr[counter]].answer
  );
  // counter++;
  let questionContainer = document.querySelector(".container-questions");

  questionContainer.innerHTML = "";
  questionContainer.innerHTML += `<div class="cardQuestion mt-2" >
        <div class="headingQuestion d-flex justify-content-between">
        <h5 class="question mb">
          ${q.question}
        </h5>
        <div class="iconContainer flag "><i class="bi bi-flag-fill flagCard"></i></div>
      </div>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center answer" 
          >
          ${q.answers[0]}
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center answer"
          >
          ${q.answers[1]}
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center answer"
          >
          ${q.answers[2]}
          </li>
        </ul>
      </div>`;

  /// reapplying answer styles
  let savedAnswer = getSavedAnswer(counter);
  if (savedAnswer) {
    const answers = document.querySelectorAll(".list-group-item");
    answers.forEach((item) => {
      if (item.innerText === savedAnswer) {
        item.classList.add("questionSelected");
      }
    });
  }
}

async function init() {
  await getQuestion();
  addQuestionCard(orderedQuestions);
}
init();

// Next and Previous buttons
document.querySelector(".arrow-next").addEventListener("click", function () {
  if (counter < 5) {
    question_number = document.querySelector(".question_number");
    question_number.innerHTML = "";
    question_number.innerHTML = `${counter + 2}  of 6`;
    counter++;
    addQuestionCard(orderedQuestions);
  }
});

document.querySelector(".arrow-left").addEventListener("click", function () {
  if (counter > 0) {
    question_number = document.querySelector(".question_number");
    question_number.innerHTML = "";
    question_number.innerHTML = `${counter}  of 6`;
    counter--;
    addQuestionCard(orderedQuestions);
  }
});

/* Card Questions */

document
  .querySelector(".container-questions")
  .addEventListener("click", (e) => {
    let flag = e.target;
    if (flag.classList.contains("bi-flag-fill")) {
      flag.classList.toggle("color-red-toggle");
      FlagQuestion();
    }
  });

/* Question flag */

document.querySelector(".question_flags").addEventListener("click", (e) => {
  // console.log(e.target);
  let flag = e.target;
  if (flag.classList.contains("bi-flag-fill")) {
    const flaggedQuestion = flag.parentElement.parentElement;
    const deleteId = flaggedQuestion.dataset.id;

    removeFlagged(deleteId);


    flag.closest(".flaggedQuestion").remove();
    const flagCard = document.querySelector(".bi-flag-fill");
    flagCard.classList.remove("color-red-toggle");
  }
});

function FlagQuestion() {
  if (!flagged.includes(counter)) {
    console.log("Add Me");
    let listFlag = document.querySelector(".list-flags");
    listFlag.innerHTML += `<div class="flaggedQuestion d-flex align-items-center justify-content-between p-2" data-id= "${counter}">
            <li class="list-group-item">Question ${counter + 1}</li>
            <div class="iconContainer flag p-1 border-0">
              <i class="bi bi-flag-fill"></i>
            </div>
          </div>`;
    flagged.push(counter);
  } else {
    console.log("don't add Me");

    let card = document.querySelector(`[data-id="${counter}"]`);
    card.remove();
    removeFlagged(counter);
  }
}
// create array push the flagged questions if you can't find it add
function removeFlagged(index) {
  flagged = flagged.filter((e) => e !== Number(index));
}

/* Timer */

let Time = 5;
let seconds = Time * 60;
setInterval(function () {
  showTimer();
}, 1000);
function showTimer() {
  let minutes = Math.floor(seconds / 60);
  let Seconds = seconds % 60;
  Seconds = Seconds === 0 ? "0" : Seconds;

  Seconds = Seconds < 10 ? "0" + Seconds : Seconds;

  document.querySelector(".countDown").innerHTML = `${minutes}:${Seconds}`;

  if (minutes < 3) {
    document.querySelector(".timer").style.color = "red";
  }
  seconds--;
}

// calculate grades
let correctAnswers = [];

document
  .querySelector(".container-questions")
  .addEventListener("click", (e) => {
    const i = e.target;

    if (i.classList.contains("list-group-item")) {
      const parent = i.closest(".cardQuestion");
      const children = document.querySelectorAll(".list-group-item");

      children.forEach((child, index) => {
        children[index].classList.remove("questionSelected");
        i.classList.add("questionSelected");
      });

      updateAnswer({ questionsNumber: counter, answer: i.innerText });
    }
  });

/// when looping on question if choosed add

function getSavedAnswer(questionNumber) {
  const savedAnswer = correctAnswers.find(
    (ans) => ans.questionsNumber === questionNumber
  );  
  return savedAnswer ? savedAnswer.answer : null;
}

function updateAnswer(answer) {
  correctAnswers = correctAnswers.filter((ans) => {
    return ans.questionsNumber !== counter;
  });
  correctAnswers.push(answer);
}

// Calculate the Result
function calculateAnswer() {
  let total = 0;
  correctAnswers.forEach((ans, i) => {
    let correctAnswer = questions[orderedQuestions[ans.questionsNumber]].answer;
    if (correctAnswer === ans.answer) {
      total++;
    }
  });
  let result = Math.floor((total / 6) * 100);
  console.log(result);
}

document.querySelector(".btn-submit").addEventListener("click", () => {
  calculateAnswer();
});
