// Scope var, let , const

/*
var y = 1;
var y = 2;
console.log(y);  // return 2
*/
//try to not use var


/*
let x = 1;
let x = 2;
console.log(x);  // it through error
*/



/*
let x = 1;
x = 2;
console.log(x); // return 2
*/


/*
const z = 10;
z = 11;
console.log(z);  // through error
*/







// globel scope  

// we can use that variable in any where in this page
var x = 1;
let y = 2;
const z = 3;


console.log(`globel: ${x}`);
console.log(`globel: ${y}`);
console.log(`globel: ${z}`);


// local scope // function scope

function myfun1() {
    const z = 5;
    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);

    //local scope // block scope we use with in this curly bracket
    if (true){
        let y = 10
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }
}

function myfun2() {
    var z = 5;
    

    //local scope // block scope we use with in this curly bracket
    if (true){
        var y = 10
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`Function: ${x}`);
    console.log(`Function: ${y}`);
    console.log(`Function: ${z}`);
}



myfun1();
myfun2()






