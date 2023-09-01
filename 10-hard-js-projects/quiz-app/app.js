const quizList = document.querySelector('.quiz__list')
const quizItem = document.querySelector('.quiz__item')
const readyBtn = document.querySelector('.quiz__button')

const quiz = [
    {
        question: 'Сколько процентов населения Земли рыжие?',
        answers: ['15%', '10%', '2%', '8%'],
        correctAnswer: 'third',
    },

    {
        question: 'Как часто перекрашивали Эйфелевую башню?',
        answers: ['Каждые семь лет', 'Каждые три года', 'Каждые десять лет', 'Никогда'],
        correctAnswer: 'first',
    },

    {
        question: 'Какое самое ядовитое животное в мире?',
        answers: ['Улитка-конус', 'Паук-каракурт', 'Лягушка-листолаз', 'Змея-тайпан'],
        correctAnswer: 'third',
    },

    {
        question: 'В какой стране больше всего высоких людей?',
        answers: ['В Хорватии', 'В Перу', 'В Исландии', 'В Нидерландах'],
        correctAnswer: 'fourth',
    },
]

let numberOfQuestion = 0
let numberOfRightAnswers = 0

function render(n) {
    quizItem.innerHTML = `
        <ul class="quiz-answer__list">
            <h1 class="quiz__question">${quiz[n].question}</h1>
            <li class="quiz-answer__item ">
                <input class="quiz-answer__item-radio visually-hidden" id="first" type="radio" name="quiz-answer__form">
                <label class="quiz-answer__item-label" for="first">${quiz[n].answers[0]}</label>
            </li>
            <li class="quiz-answer__item">
                <input class="quiz-answer__item-radio visually-hidden" id="second" type="radio" name="quiz-answer__form">
                <label class="quiz-answer__item-label" for="second">${quiz[n].answers[1]}</label>
            </li>
            <li class="quiz-answer__item">
                <input class="quiz-answer__item-radio visually-hidden" id="third" type="radio" name="quiz-answer__form">
                <label class="quiz-answer__item-label" for="third">${quiz[n].answers[2]}</label>
            </li>
            <li class="quiz-answer__item">
                <input class="quiz-answer__item-radio visually-hidden" id="fourth" type="radio" name="quiz-answer__form">
                <label class="quiz-answer__item-label" for="fourth">${quiz[n].answers[3]}</label>
            </li>
        </ul>
    `
}

render(numberOfQuestion)

readyBtn.addEventListener('click', () => {
    let selected = document.querySelector('.quiz-answer__item-radio:checked')

    if (selected.id === quiz[numberOfQuestion].correctAnswer) {
        numberOfRightAnswers++
    } 

    if (numberOfQuestion < quiz.length - 1) {
        numberOfQuestion++
        render(numberOfQuestion)
    } else {
        readyBtn.classList.add('visually-hidden')
        quizItem.innerHTML = `
            <li class="quiz__results">
                <h1 class="results__title">Вопросы закончились :(</h1>
                <p class="results__data">
                    Ваш результат таков: ${numberOfRightAnswers} правильных ответа из 4
                </p>
            </li>
            <button class="quiz__button--reload" type="button">Попробовать снова</button>
        `
        numberOfQuestion = 0
        numberOfRightAnswers = 0
        const reloadBtn = document.querySelector('.quiz__button--reload')
        reloadBtn.addEventListener('click', () => {
            render(numberOfQuestion)
            readyBtn.classList.remove('visually-hidden')
        })
    }
})



