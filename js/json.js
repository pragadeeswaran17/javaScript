// Json JavaScript Object Notation
// text Format
//to send and receive data in many programming language

const myObj = {
    name : "praga",
    content : ["earn", "grow", "give"],
    sub : function () {
        console.log("thanks for watching my code");
    }
};

console.log(myObj);
console.log(myObj.name);
myObj.sub();

//cover obj into json
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(sendJSON.name);
console.log(typeof myObj);
console.log(typeof sendJSON);


//convert json into obj

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);