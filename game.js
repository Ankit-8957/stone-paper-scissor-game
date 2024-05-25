let userScore = 0;
let compScore = 0;
const user = document.querySelector("#user");
const comp = document.querySelector("#comp");
const selectChoice = document.querySelectorAll(".img");
let resetScore = document.querySelector(".btn");
const notify = document.querySelector(".hide");


selectChoice.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        // console.log(userChoice);
        playGame(userChoice);
       
    });
});

const gencompChoice = () => {
    let options = ["paper", "scissor", "stone"];
    const randChoice = Math.floor(Math.random() * 3);
    return options[randChoice];

};
const playGame = (userChoice) => {
    console.log(`user ${userChoice}`);
    let compChoice = gencompChoice();
    console.log(`comp ${compChoice}`);
    let userWon = true;


    if (userChoice === compChoice) {
        drawGame();

    }
    else {
        if (userChoice === "paper" && compChoice === "stone") {
            userWon = true;
        }
        else if (userChoice === "paper" && compChoice === "scissor") {
            userWon = false;
        }
        else if (userChoice === "stone" && compChoice === "scissor") {
            userWon = true;
        }
        else if (userChoice === "stone" && compChoice === "paper") {
            userWon = false;
        }

        else if (userChoice === "scissor" && compChoice === "paper") {
            userWon = true;
        }
        else if (userChoice === "scissor" && compChoice === "stone") {
            userWon = false;
        }

        notify.classList.add("hide");
        winner(userWon);
    }
};

const winner = (userWon) => {
    if (userWon) {
        userScore++;
        user.innerText = userScore;

    }
    else {
        compScore++;
        comp.innerText = compScore;

    }
};
const drawGame = () => {
   notify.classList.remove("hide");
   console.log("Match draw");

};

const resetGame = () => {
    // userWon = true;
    userScore = 0;
    compScore = 0;
    user.innerText = "0";
    comp.innerText = "0";
    notify.innerText = ""
};
resetScore.addEventListener("click", resetGame);

