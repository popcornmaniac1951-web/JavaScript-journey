let questions = [
    {
        category: "General Knowledge",
        question: "Who is the Prime Minister of India?",
        choices: ["Modi", "Rahul", "Amit Shah"],
        answer: "Modi"
    },
    {
        category: "Math",
        question: "What is 2 + 2?",
        choices: ["3", "4", "5"],
        answer: "4"
    },
    {
        category: "Science",
        question: "Water formula?",
        choices: ["H2O", "CO2", "O2"],
        answer: "H2O"
    },
    {
        category: "History",
        question: "Who discovered India?",
        choices: ["Columbus", "Vasco da Gama", "Cook"],
        answer: "Vasco da Gama"
    },
    {
        category: "Technology",
        question: "HTML stands for?",
        choices: [
            "Hyper Text Markup Language",
            "High Tech Machine Language",
            "Home Tool Markup Language"

        ],
        answer: "Hyper Text Markup Language"
    }
];


function getRandomQuestion(questions) {
    let randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}



function getRandomComputerChoice(choices) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}


let RandomQuestion = getRandomQuestion(questions);
let RandomComputerChoice = getRandomComputerChoice(RandomQuestion.choices);
console.log(RandomQuestion);
console.log('computer choice :', RandomComputerChoice);



function getResults(question, computerChoice) {

    if (computerChoice === question.answer) {
        return "The computer's choice is correct!";
    } else {
        return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
    }

}

let result = getResults(RandomQuestion, RandomComputerChoice);
console.log(result);
