const question = document.getElementById('question');
const choices = document.getElementsByClassName('choice-text');

let currentquestion= {};
let acceptinganswers = true;
let Score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question:"what is pi value ?",
        choices1:"5.4",
        choices2:"2.6",
        choices3:"3.14",
        choices4:"4.15",
        answer : 3

    },
    {
        question:"what is pi value ?",
        choices1:"5.4",
        choices2:"3.14",
        choices3:"3",
        choices4:"4.15",
        answer : 2

    },
    {
        question:"what is pi value ?",
        choices1:"3.14",
        choices2:"2.6",
        choices3:"6",
        choices4:"4.15",
        answer : 1

    },
];


const CORRECT_BOUNS=10;
const MAX_QUESTIONS = 3;