const title = document.querySelector("#poll__title");
const answers = document.querySelector("#poll__answers")

function generateQuiz() {
    fetch("https://students.netoservices.ru/nestjs-backend/poll").then((res) => res.json()).then((data) => {
        title.innerHTML = data.data.title;
        answers.innerHTML = null;
        data.data.answers.forEach(element => {
            answers.insertAdjacentHTML("beforeend", ` <button onclick="handleAnswer()" class="poll__answer">
            ${element}
          </button>`)
        });
    })
}

generateQuiz()
function handleAnswer() {
    alert("Спасибо, ваш голос засчитан!")
    generateQuiz()
}