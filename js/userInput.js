//let myBoolean = alert("hi all") 
//let myBoolean = confirm("hi all") 
let myBoolean = prompt("hi all")

if (myBoolean) {
    console.log(myBoolean ?? "you didn't enter your name");
}
else {
    console.log("you didn't enter your name");
};


console.log(typeof(myBoolean));  
console.log(myBoolean.trim().length);  