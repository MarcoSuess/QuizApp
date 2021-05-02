let quiz = [
    {
        'name': 'HTML_Quiz',
        'questions': [{
            'question_0': 'Wer hat HTML erfunden',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,
        },
        {
            'question_1': 'test',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,
        }
        ]



    },
    {
        'name': 'CSS_Quiz',
        'questions': [{
            'question_0': 'Wer hat HTML erfunden',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,

        },

        {
            'question_1': 'test',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,
        }



        ]
    },
    {
        'name': 'JS_Quiz',
        'questions': [{
            'question_0': 'Wer hat HTML erfunden',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,
        },
        {

            'question_1': 'Wer hat HTML erfunden',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,


        }


        ]

    },
    {
        'name': 'Java_Quiz',
        'questions': [{
            'question_0': 'java',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,
        },
        {

            'question_1': 'Wer hat HTML erfunden',
            'answer': ['Robbie Williams', 'Lady Gaga', 'Tim Berners - Lee', 'Justin Bieber'],
            'right-answer': 2,


        }


        ]
    }
];

let answerInLetters = ['A', 'B', 'C', 'D']
let questNumber = 0;
let currentQuiz;
let score = 0;
let progress = 0;

function OpenNewQuiz(id) {

    document.getElementById('container-question').innerHTML = `
    <img src="img/brainbg.jpg">

            <div id="start-text">
                <h1>Welcome to <br> The Awesome ${quiz[id]['name']}</h1>
                <h2>Ready for the Challange?</h2>
            </div>

            <div class="button-pos">
                <button onclick="StartNow(${id})" class="btn btn-warning">Start Now
                    &#10154; </button>
            </div>

    `;

}

function StartNow(id) {
    currentQuiz = quiz[id];
    update()
}


function update() {

    let currentQuestion = currentQuiz['questions'][questNumber];
    document.getElementById('progress-bar').style = `width: ${progress}%`;

    document.getElementById('container-question').innerHTML = `

        <img src="img/brainbg.jpg">

        <div  class="question-text">
            <h2>
                ${currentQuestion['question_' + questNumber]}
            </h2>

      ${showAnswerContainer(currentQuestion)}
        
            <div class="button-game">
                <button  id="previousQuestion" onclick="previousQuestion()"> &#171; </button>
                <button id="nextQuestion" class="d-none" onclick="nextQuestion()">&#187; </button>
            </div>

        </div>

        `;
}

function showAnswerContainer(currentQuestion) {
    let answerRow = `<div>`

    for (let i = 0; i < currentQuestion['answer'].length; i++) {
        const answer = currentQuestion['answer'][i];

        answerRow += ` 
        <div id=${i} class="answer-container">
        <button id="test${i}"  onclick="checkAnswer(${i}); " class="btn btn-primary">${answerInLetters[i]}</button>
        <h3>${answer}</h3>
        </div>`
    }

    answerRow += `</div>`
    return answerRow
}


function checkAnswer(i) {
    document.getElementById('test' + i).disabled = true;
    let answer = currentQuiz['questions'][questNumber]['right-answer']
    console.log(i)

    if (answer == i) {
        //right answer
        score++;
        document.getElementById(i).classList.add('right-answer')
        document.getElementById('nextQuestion').classList.remove('d-none')

    } else {
        //wrong answer
        document.getElementById(i).classList.add('wrong-answer')
        document.getElementById('nextQuestion').classList.remove('d-none')

    }


}

function nextQuestion() {
    questNumber++
    calculateProgress()
    update()
}

function previousQuestion() {
    questNumber--;

    if (questNumber < 0) {
        questNumber = 0;
    }
    update();
}

function calculateProgress() {
    quiz_length = currentQuiz['questions'].length;
    progress = ((100 / quiz_length) * questNumber);
}