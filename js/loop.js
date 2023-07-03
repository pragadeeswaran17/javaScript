// loops
// while loops
/*
let i = 0;

while(i<5){
    console.log(i);
    i++;
}
*/


// do - whole - loop
/*
let y = 5
do {
    console.log(y)
    i++;
} while(y<5)
*/



// for loop
// syntax 
// for(asign ; condition ; increment){ //run this code}
/*
let x = 0;

for (x;x<5;x++){
    console.log(x);
}

for (z = 0; z<5;z++){
    console.log(z);
} */


/*
let name = "pragadeeswaran";

for (let i =0; i <= name.length; i++)
{
    console.log(name.charAt(i));
}

// or

for (let x of name ){
    console.log(x);
}
*/

//nested for loop


/*
for (a= 0; a < 3; a++)
{
    for(b= 0; b<3 ; b++){
        console.log(a,b);

    }
    
}
*/


//break statement

let i = 0;

while (i<5) {
    console.log(i);
    if (i === 3) {
        break;
    };
    i = i+1;
};


// continue statement


let text = "";

for(let x = 0; x <= 5; x++ ){
    
    if (x === 3) {
        continue
    }
    text = text + x;
}

console.log(text);
