// if statement 

//syntax
/*
if(condition){
   // run code
}
else{
    // run different code
}
*/

let customerIsBanned = false
let viewer = "avenger end game"
let reply;
let dc = true 

if(customerIsBanned){
    reply = `sorry`
}
else if(viewer && dc){
    reply = `enjoy you are watching ${viewer} and dc contant`
}
else if(viewer){
    reply = `enjoy you are watching ${viewer}`
}
else{
    reply = `sorry i dont have this`
}


console.log(reply)



let testScore = "dsd";
let grade;

if(testScore === isNaN(testScore)){
    grade = `plz enter crt value`
}
else if(testScore <= 100 &&  testScore >= 90){
    grade = `grade-A`
}
else if (testScore < 90  &&  testScore >= 80){
    grade = `grade-B`
}
else if (testScore < 80 &&  testScore >= 70){
    grade = `grade-c`
}
else if (testScore < 70 &&  testScore >= 60){
    grade = `grade-d`
}
else if (testScore < 60 &&  testScore >= 45){
    grade = `grade-B`
}
else if (testScore < 45 &&  testScore >= 0){
    grade = `fail`
}
else{
    if (testScore < 0 | testScore > 100) {
        grade = `plz enter crt value`
    } 
}

console.log(grade)

