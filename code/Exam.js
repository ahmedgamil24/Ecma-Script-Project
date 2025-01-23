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
  counter++;
  let questionContainer = document.querySelector(".container-questions");
  //   questionContainer.innerHTML = "";
  questionContainer.innerHTML += `<div class="cardQuestion mt-2">
        <h5 class="question mb">${q.question}</h5>
        <ul class="list-group">
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
          ${q.answers[0]}
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
          ${q.answers[1]}
          </li>
          <li
            class="list-group-item d-flex justify-content-between align-items-center"
          >
          ${q.answers[2]}
          </li>
        </ul>
      </div>`;
}

async function init() {
  await getQuestion();
  addQuestionCard(orderedQuestions);
}
init();

