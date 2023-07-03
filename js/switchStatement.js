// switch statement

// syntax
/*
switch(expresion or values){
    case choice1 :
        //run this code
        break;
    case choice2 :
        // run this code
        break;
    default :
        // run this code
}
*/

switch(Math.floor(Math.random()*4)){
    case 1 :
        console.log(1);
        break;
    case 2 :
        console.log(2);
        break;
    default :
        console.log("no match");
}

// program to get a random item from an array

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

switch(player){
    case computer :
        console.log("Tie");
        break;
    case "rock":
        if (computer === "paper")
        console.log("coumpter win");
        else{
            console.log("you win");
        }
        break;
    case "paper":
        if (computer === "scissor")
        console.log("coumpter win");
        else{
            console.log("you win");
        }
        break;
    case "scissor":
        if (computer === "rock")
        console.log("coumpter win");
        else{
            console.log("you win");
        }
        break;
    default :
        console.log("no match");
}

