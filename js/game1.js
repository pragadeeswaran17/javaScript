let playgame = confirm("Shall we play rock, paper, scissor ? ")
if (playgame) {
    let playerChoice = prompt("please enter your value");
    if (playerChoice) {
        let playerOne = playerChoice.trim().toLowerCase();
        if (
            playerOne === "rock" ||
            playerOne === "paper" ||
            playerOne === "scissor"
        ){
            let computer = Math.floor(Math.random()*3 +1);
            let computerChoice = 
            computer === 1 ? "rock"
                             : 2 ? "paper"
                             :  "scissor"

            let result = (playerChoice === computerChoice) ? 
                       `your choice is ${playerChoice}\nComputer choice is ${computerChoice}\nMatch is Tie`
                       : (playerChoice == "rock" && computerChoice == "paper")    ? 
                       `your choice is ${playerChoice}\nComputer choice is ${computerChoice}\nComputer Won`
                       : (playerChoice == "paper" && computerChoice == "scissor") ? 
                       `your choice is ${playerChoice}\nComputer choice is ${computerChoice}\nComputer Won`
                       : (playerChoice == "scissor" && computerChoice == "rock")  ? 
                       `your choice is ${playerChoice}\nComputer choice is ${computerChoice}\nComputer Won`
                       : `your choice is ${playerChoice}\nComputer choice is ${computerChoice}\nYOU WON`;
            alert(result);
            let playAgain = confirm("shall we play again");
            playAgain ? location.reload() : alert("ok, thanks for playing")


        } else {
            
              let playAgain =  confirm("you didn't enter rock, paper or scissor \nDo you wanna play again");
            if (playAgain){
                location.reload()
            }
            else {
                alert("ok may be next time.");
            }
            
          }
    };
} else {
    alert("ok may be next time.");

};