// Array of trivia questions
const questions = [
    "What's the capital of France?", 
    "Who painted the Mona Lisa?",
    "What is the largest planet in our Solar System?",
    "Who wrote Romeo and Juliet?",
    "What is the hardest natural substance on Earth?",
    "Which element has the chemical symbol 'O'?",
    "Who was the first President of the United States?",
    "What is the smallest unit of life that can replicate independently?",
    "In which year did the Titanic sink?",
    "What is the chemical symbol for gold?"
];

// Array of answer choices for each question
const choicesArray = [
    ["Paris", "London", "Berlin", "Madrid"], 
    ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
    ["Earth", "Jupiter", "Mars", "Saturn"],
    ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
    ["Gold", "Iron", "Diamond", "Platinum"],
    ["Gold", "Oxygen", "Osmium", "Hydrogen"],
    ["Thomas Jefferson", "Abraham Lincoln", "John Adams", "George Washington"],
    ["Cell", "Molecule", "Atom", "Organ"],
    ["1912", "1922", "1932", "1942"],
    ["Au", "Ag", "Pb", "Fe"]
];

// Array of correct answers corresponding to each question
const correctAnswers = ["Paris", "Da Vinci", "Jupiter", "William Shakespeare", "Diamond", "Oxygen", "George Washington", "Cell", "1912", "Au"];

// Variables to keep track of the current question index and the user's score
let currentQuestionIndex = 0;
let score = 0;

/**
 * Displays the current question and its answer choices.
 */
function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        // Display the current question
        document.getElementById('question').innerHTML = questions[currentQuestionIndex];
        
        // Display the answer choices for the current question using map
        choicesArray[currentQuestionIndex].map((choice, index) => {
            const btn = document.getElementById(`choice${index + 1}`);
            btn.innerHTML = choice;
            btn.value = choice;
        });
    } else {
        // If there are no more questions, display the final score
        document.getElementById('result').innerHTML = `You scored ${score} out of ${questions.length}!`;
        document.getElementById('question').innerHTML = "";
        document.getElementById('choices').innerHTML = "";
    }
}

/**
 * Checks if the selected answer is correct.
 * @param {HTMLElement} btn - The button element that was clicked.
 */
function checkAnswer(btn) {
    // If the selected answer is correct, increment the score
    if (btn.value === correctAnswers[currentQuestionIndex]) {
        score++;
    }
    // Move to the next question
    currentQuestionIndex++;
    // Display the next question
    displayQuestion();
}

// Initialize the game by displaying the first question
displayQuestion();
