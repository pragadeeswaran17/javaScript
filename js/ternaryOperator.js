//Conditional (ternary) operator

//syntax
// condition ? exprIfTrue : exprIfFalse


let subscriber = "subscribed";
let response  = subscriber === "subscribed" ? "welcome" : "kindly subscribe"
console.log(response);

let mark = 55;

let grade = (mark > 100 || mark < 0) ? "plz enter correct value"
           : (mark <= 100 && mark >=90 ) ? "A"
           : ((mark < 90 && mark >=80 )) ? "B" 
           : ((mark < 80 && mark >=65 )) ? "C"
           : ((mark < 65 && mark >=50 )) ? "D"
           : "Fail" ;

console.log(grade);



// task rock pper scisor


function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * (arr.length ));
    console.log(randomIndex);
    // get random item
    const item = arr[randomIndex];

    return item;
}

const values = ["rock", "paper", "scissor"];

const computer = getRandomItem(values);
let player = "rock";

let result = (player === computer) ? "Tie"
           : (player == "rock" && computer == "paper")    ? "computer win"
           : (player == "paper" && computer == "scissor") ? "computer win"
           : (player == "scissor" && computer == "rock")  ? "computer win"
           : "you win";
           
console.log(`player is ${player}`);
console.log(`computer is ${computer}`);
console.log(result);

