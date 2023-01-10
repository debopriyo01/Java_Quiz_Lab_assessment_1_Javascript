//--> Creting The class Quizz -->
// -->Instade of Prototype we are Using The class ---->
class Quizz {
    constructor(Question) {
        this.score = 0;
        this.Question = Question;
        this.Index = 0;
    }
    //--> Featching The Question BY its Index  --->
     getQuestionByIndex() {

        return this.Question[this.Index];

    }
    isEnded() {

        return this.Index === this.Question.length;
    }
    //--> Cheak If The Ans is Correct or Not BY adding Saparate Funtion --->
    cheakTheOptionWithAnswar(Answar) {

        if (this.getQuestionByIndex().isCorrectAnswar(Answar)) {

            this.score++;

        }
        this.Index++;
    }
}
//----> Question class ---> 
class Question {
    constructor(text, choice, Answar) {

        this.text = text;
        this.choice = choice; 
        this.Answar = Answar;

    }
    isCorrectAnswar(choice) {
        //--> if The Answar is Correct Then return The True value :-
        return this.Answar === choice;
    }
}
//--- loading All The Question -->
function LoadQuestion() {

    if (quizz.isEnded()) {

        Score();//---->showing The score :-
    } else {

        // Loading The 1st  The Question :-
        var Element = document.getElementById('question');
        Element.innerText = quizz.getQuestionByIndex().text;

        //--->Loading The Options:-
        var choice = quizz.getQuestionByIndex().choice;// ----> Featching the choice Arrey Hear :-
        try{
        for (var i = 0; i < choice.length; i++) {

            var Element2 = document.getElementById("choice" + i);///---> Storing all The Elements Into The Span :-
            Element2.innerText = choice[i];// 1

            HandelingButton('btn' + i, choice[i]);//0
        }

        ProggressBar();
    }catch(ex){
        window.alert(ex.message);
    }
}
}

//----> Handeling The Onclick Event ---> 
function HandelingButton(id, choice) {

    var Button = document.getElementById(id);
    Button.onclick = function () {

        quizz.cheakTheOptionWithAnswar(choice);
        LoadQuestion();
    }

}

//---> Loading The Questions :----->
var questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["Python Script", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "All")
];


//---> Showing The Proggress Bar :-
function ProggressBar() {

    var currentQuestionNumber = quizz.Index + 1;
    var Element = document.getElementById('progress');
    Element.innerHTML = `Question ${currentQuestionNumber} of ${questions.length}`;
}

//--->Calculating The Total Score ---> 
function Score() {

    var gameOverHTML = '<h2 id="Res">Result</h2>';
    var Horizentel = '<hr>'
    gameOverHTML += "<h2 id='score' > Your score is : " + quizz.score + " : Total Persentage is: " + ((quizz.score / questions.length) * 100) + '%' + "</h2>";


    var Last_Page = document.getElementById('quiz');
    Last_Page.innerHTML = gameOverHTML + Horizentel;

}

//-----> Loading Quizz:-
var quizz = new Quizz(questions);

//---> Displaying Quizz:-
LoadQuestion();
