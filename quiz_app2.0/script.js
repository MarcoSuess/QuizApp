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
let currentQuiz_length;

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
    document.getElementById('progress-bar').style = `width: 0%`;
    questNumber = 0;
    score = 0;
    progress = 0;
    currentQuiz = quiz[id]
    update(id)
}


function update(id) {

    let currentQuestion = currentQuiz['questions'][questNumber];


    document.getElementById('container-question').innerHTML = `

        <img src="img/brainbg.jpg">

        <div  class="question-text">
            <h2>
                ${currentQuestion['question_' + questNumber]}
            </h2>

      ${showAnswerContainer(currentQuestion)}
        
            <div class="button-game">
                <button  id="previousQuestion" onclick="previousQuestion()"> &#171; </button>
                <button id="nextQuestion" class="d-none" onclick="nextQuestion(${id})">&#187; </button>
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
    for (let j = 0; j < 4; j++) {
        document.getElementById('test' + j).disabled = true;
    }

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

function nextQuestion(id) {
    questNumber++
    calculateProgress()
    if (questNumber == currentQuiz['questions'].length) {
        finalScreen(id)
    } else {
        update(id)
    }
}



function previousQuestion() {
    questNumber--;
    calculateProgress()

    if (questNumber < 0) {
        questNumber = 0;
    }
    update();
}

function calculateProgress() {
    currentQuiz_length = currentQuiz['questions'].length;
    progress = ((100 / currentQuiz_length) * questNumber);
    document.getElementById('progress-bar').style = `width: ${progress}%`;
}
function finalScreen(id) {


    document.getElementById('container-question').innerHTML = `
<div class="finishScreen">

    <div class="complete-logo">
        <img src="img/brain result.png">
        <h1> <b> COMPLETE <br> ${currentQuiz['name']} </b></h1>
    </div>

     <h2><b class="score">YOUR SCORE</b> <b>${score}/${currentQuiz_length}</b></h2>
    <div class="share">
        <button class="btn btn-primary">SHARE</button>
    </div>

    <h3 class="replayBtn" onclick="replay(${id})">REPLAY</h3>

</div>
<img class="trophy" src="img/tropy.png">
    
    `
}

function replay(id) {
    StartNow(id)
}