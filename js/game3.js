// rock paper scissor using function

const initGame = () => {
    const startGame = confirm("Shall we play Rock, Paper, Scissor ? ");
    startGame ? playgame() : alert("ok maybe next time");
}

// Game Flow Function

const playgame = () => {
    while(true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decideNotTOPlay();
            break;
        }
        playerChoice = evaluvatePlayerChoice(playerChoice);
        if (!playerChoice){
            invalidChoice();
            continue
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice , computerChoice);
        displayResult(result);
        if (askToPlayAgain()){
            continue;
        } else {
            thanksForPlaying();
            break;
        };
    };
};

const getPlayerChoice = () =>{
    return prompt("please enter rock, paper or scissor");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === ""){
        return playerChoice.trim().toLowerCase();
    } else {
        return false
    };
};

const decideNotTOPlay = () => {
    alert("thanks for playing")
};

const evaluvatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissor"
    ) {
        return playerChoice;
    } else {
        return false;
    };
};

const invalidChoice = () => {
    alert("you didn't enter rock, paper or scissor.")
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3 );
    const rspArray = ["rock", "paper", "scissor"];
    return (rspArray[randomNumber]);
};

const determineWinner = (player, computer) => {
    let winner = (player === computer)
                ? `your choice is ${player}\nComputer choice is ${computer}\nMatch is Tie`
                : (player == "rock" && computer == "paper")    
                ? `your choice is ${player}\nComputer choice is ${computer}\nComputer Won`
                : (player == "paper" && computer == "scissor") 
                ? `your choice is ${player}\nComputer choice is ${computer}\nComputer Won`
                : (player == "scissor" && computer == "rock")  
                ? `your choice is ${player}\nComputer choice is ${computer}\nComputer Won`
                : `your choice is ${player}\nComputer choice is ${computer}\nYOU WON`;
    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("play again");
};

const thanksForPlaying = () =>{
    alert("ok, thanks for playing");
};


initGame();