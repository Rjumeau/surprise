const questions = [
  { question: "Bien... Va à la rencontre de celui qui se chamaille souvent avec mon alter ego, la terreur de Dordogne, il devrait te donner un mot de passe", answer: "Vanille" },
  { question: "Maintenant trouve moi celui qui est connu pour sa classe vestimentaire, je frémis à l'idée de renverser un verre sur son beau manteau, j'attend son mot de passe...", answer: "Kaaris" },
  { question: "On y est presque... Je ne la vois que rarement, mais chaque moment passé avec elle est exquis, j'aimerai garder en souvenir son mot de passe", answer: "Gold" },
  { question: "Une dernière, une personne t'attends car vous vous êtes bien trouvés. Elle ne te donnera l'objet que si tout le monde est réunit, une fois cette condition remplie, à toi de trouver le mot de passe...", answer: "PS5" }
];

let currentQuestionIndex = 0;
let typed;
const introContainer = document.getElementById('intro-container');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');


typed = new Typed('#intro-text', {
  strings: ["Bienvenue Thibounboun...\n Tu as trouvé mon grimoire, de ce fait tu as le droit à un présent, mais avant, tu devras me donner quelques réponses, es-tu prêt ?"],
  typeSpeed: 50,
  showCursor: false,
  onComplete: function () {
    introContainer.classList.remove("d-none");
  }
});

function startQuiz() {
  toggle(introContainer);
  toggle(questionContainer);
  showQuestion();
}

function showQuestion() {
  const questionElement = document.getElementById('question');
  questionElement.innerHTML = '';
  typed = new Typed('#question', {
    strings: [questions[currentQuestionIndex].question],
    typeSpeed: 50,
    showCursor: false,
    onComplete: function () {
      document.getElementById('answer').removeAttribute('disabled');
    }
  });
}

function checkAnswer() {
  document.getElementById('answer').setAttribute('disabled', 'true');

  const userAnswer = document.getElementById('answer').value;
  const correctAnswer = questions[currentQuestionIndex].answer.toLowerCase();

  if (userAnswer.toLowerCase() === correctAnswer) {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {

      showQuestion();
      document.getElementById('answer').value = '';
      document.getElementById('answer').removeAttribute('disabled');
    } else {
      // Afficher le résultat final
      showFinalResult(questionContainer, resultContainer);
    }
  } else {
    alert("Naze Thibounboun, essaye encore");
    document.getElementById('answer').value = '';
    document.getElementById('answer').removeAttribute('disabled');
  }
}

function showFinalResult(questionContainer, resultContainer) {
  const img = document.createElement("img")
  img.src = "../images/ps5.png"
  img.classList.add("final-img")
  resultContainer.appendChild(img)
  toggle(questionContainer);
  toggle(resultContainer);
}

function toggle(element) {
  element.classList.toggle("d-none");
}
