let Quiz = [
    {
        'name': 'HTML_Quiz',
    },
    {
        'name': 'CSS_Quiz',
    },
    {
        'name': 'JS_Quiz',

    },
    {
        'name': 'Java_Quiz',
    }
];


function OpenNewQuiz(id) {

    document.getElementById('container-question').innerHTML = `
    <img src="img/brainbg.jpg">

            <div id="start-text">
                <h1>Welcome to <br> The Awesome ${Quiz[id]['name']}</h1>
                <h2>Ready for the Challange?</h2>
            </div>

            <div class="button-pos">
                <button onclick="StartNow(${id})" class="btn btn-warning">Start Now
                    &#10154; </button>
            </div>

    `;

}


function StartNow(id) {

    document.getElementById('container-question').innerHTML = `

        <img src="img/brainbg.jpg">



        <div  class="question-text">
            <h2>
                Wer hat HTML erfunden?
            </h2>



            <div class="answer-container-A">
                <button onclick="answer(A)" class="btn btn-primary">A</button>
                <h3>Robbie Williams</h3>
            </div>

            <div class="answer-container-B">
                <button onclick="answer(B)" class="btn btn-primary">B</button>
                <h3>Lady Gaga</h3>
            </div>

            <div class="answer-container-C">
                <button onclick="answer(C)" class="btn btn-primary">C</button>
                <h3>Tim Berners - Lee</h3>
            </div>

            <div class="answer-container-D">
                <button onclick="answer(D)" class="btn btn-primary">D</button>
                <h3>Justin Bieber</h3>
            </div>


            <div class="button-game">
                <button onclick="previousQuestion()"> &#171; </button>
                <button onclick="nextQuestion()">&#187; </button>
            </div>

        </div>

        `;
}