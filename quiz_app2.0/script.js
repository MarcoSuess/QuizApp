let Quiz =  [ 
    {
        'name' : 'HTML_Quiz',
    },
    {
        'name' : 'CSS_Quiz',
    },
    {
        'name' : 'JS_Quiz',

    },
    {
        'name' : 'Java_Quiz',
    }
];


function OpenNewQuiz(id) {

    document.getElementById('start-text').innerHTML = `
   
    <h1>Welcome to <br> The Awesome ${Quiz[id]['name']}</h1>
    <h2>Ready for the Challange?</h2>

    `;

}


function StartNow() {

        document.getElementById('')
}