// numbers

const myVariable = "42";

const myNumber = 42;

const myFloat = 42.0988;

console.log(myFloat)
console.log(myNumber === myFloat)
console.log(myVariable === myNumber) 
console.log(Number(myVariable) === myNumber)
console.log(myVariable + 10)
console.log(Number(myVariable) + 10)


console.log(Number("praga")+ 10)

console.log(Number(true)+ 10)  //true = 1 and false = 0

//number methods


console.log(Number.isInteger(42))
console.log(Number.isInteger(42.01))

//passing value
console.log(Number.isInteger(myNumber))

//parsefloat

console.log(Number.parseFloat(myFloat));
console.log(Number.parseFloat(myFloat).toFixed(3));

//parseInt

console.log(Number.parseInt(myFloat));


//toString methods

console.log(myFloat.toString())

//chaning

console.log(parseFloat(myVariable).toFixed(3).toString())

//isNan
// 1 . Number.isNan
// 2 . isNan

// 1 . number.isNan

console.log(Number.isNaN());
console.log(Number.isNaN("praga"));
console.log(isNaN("praga"));



