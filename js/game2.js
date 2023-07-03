/// rock paper scissor using while loop


let playgame = confirm("Shall we play rock, paper, scissor ? ")
if (playgame) {
    //play
    while (playgame) {
        let playerChoice = prompt("please enter your value");
    
            if (playerChoice || playerChoice === "") {
                let playerOne = playerChoice.trim().toLowerCase();
                 if (
                    playerOne === "rock" ||
                    playerOne === "paper" ||
                    playerOne === "scissor"
                ){
                    let computer = Math.floor(Math.random()*3 );
                    let apsArray = ["rock", "paper", "scissor"]
                    let computerChoice = apsArray[computer]
                
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
                     if (!playAgain) {
                      alert("thanks for playing")
                      break
                     }
                     else{
                        location.reload()
                     }
                  
                }
                else {
            
                    let playAgain =  confirm("you didn't enter rock, paper or scissor \nDo you wanna play again");
                  if (playAgain){
                      location.reload()
                  }
                  else {
                      alert("thanks for playing");
                      break

                  }
                  
            }

                

            } 
        };
    
} 
else {
    alert("ok may be next time.");

};