// we have 2 methods (we will explore both here)

//using selectors inside the element

const questions = document.querySelectorAll(".question");

// For all questions
questions.forEach(function (question) {
    // console.log(question);
    // btn = question-btn element in each question
    const btn = question.querySelector(".question-btn");
    // console.log(btn);
    // Listening for click on all 3 buttons from all 3 questions
    btn.addEventListener("click", function () {
        questions.forEach(function (item) {
            // all questions who's button is not clicked
            if (item !== question) {
                // remove "show-text" class from all those questions
                // i.e Hide the answer text of all other questions that are not clicked upon.
                item.classList.remove("show-text");
            }
        });

        // For the question who's button is clicked....add "show-text" class to it
        // i.e Show the answer text for the question who's button is clicked.
        question.classList.toggle("show-text");
    });
});

// traversing the dom

/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
    // setting eventListener for each button
    btn.addEventListener("click", function (e) {
        // capturing targeted button's parent's (question-title) parentElement(question)
        const question = e.currentTarget.parentElement.parentElement;
        // toggling "show-text" class in section element having class "question" of current clicked button.
        // this will show or hide the text (answer)
        question.classList.toggle("show-text");
    });
});
*/