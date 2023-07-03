// Errors and Errors handling

"use strict";

// variable = "praga"
// console.log(variable); // reference erroor

// Object..create() // stntax error

const variable = "praga";
console.log(variable);

//variable =  "surendhar"; // type error alredy asigned


//error handling

/*
const makeError = () => {
    try{
        const name = "praga"
        name = "surendhar"
    } catch (err) {
        console.error(err);
        console.error(err.name);
        console.error(err.stack);
        console.warn(err)
        console.table(err)

        logTheError(err.stack)

    };
};

makeError();
*/


//costum error
/*
function customError (message) {
    this.message = message;
    this.name = "customError"
    this.stack = `${this.name} : ${this.message}`;

};

const makeCustomError1 = () => {
    try{
        
    throw new customError("this is cunstom error");
    } catch (err) {
        console.error(err.stack);
        
    };
};

*/


/*

makeCustomError1();

const makeCustomError2 = () => {
    try{
        
    throw new Error("this is cunstom error");
    } catch (err) {
        console.error(err);
        
    };
};

makeCustomError2();

*/



const makeCustomError3 = () => {
    try{
        
    throw new Error("this is cunstom error");
    } catch (err) {
        console.error(err);
        
    }finally{
        console.log("...finally");
    }
};

makeCustomError3();



const makeCustomError4 = () => {
    let i = 0;
    while(i <=5) {
    try{
        if (i % 2 !==0 ){
    throw new Error("this is a odd number");
        }
        console.log("even number");
         
    } catch (err) {
        console.error(err.message);
        
    }finally{
        console.log("...finally");
        i++;
    }
};
};
makeCustomError4();




