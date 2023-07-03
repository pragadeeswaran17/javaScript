function randomValue(arr){

    // generate a random number 
    let randomValue = Math.floor((Math.random()) *(arr.length));
    // 
    let item = arr[randomValue];

    return item;
};

let computerValue = ["rock", "paper", "scissor"]

let computer = randomValue(computerValue)
console.log(computer);

let player = prompt("plz enter value")

let result = (player === computer) ? "Tie"
           : (player == "rock" && computer == "paper")    ? "computer win"
           : (player == "paper" && computer == "scissor") ? "computer win"
           : (player == "scissor" && computer == "rock")  ? "computer win"
           : "you win";
           
console.log(`player is ${player}`);
console.log(`computer is ${computer}`);
console.log(result);
