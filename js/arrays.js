// arrays

const myArray = [];

//Adding element
myArray[0] = "praga";
myArray[1] = "surendhar";
myArray[2] = 2000;
myArray[3] = true;

console.log(myArray);

console.log(myArray.length);
console.log(myArray[2]);
console.log(myArray[(myArray.length - 1)]); //last element



// array methods

myArray.push("gautham");  // add element at last
console.log(myArray);

myArray.pop();  // delete the last element
console.log(myArray);

myArray.unshift("sai");  // add element at first
console.log(myArray);

myArray.shift();  // delete the first element
console.log(myArray); 

const lastItem = myArray.push("bala");
console.log(lastItem);
console.log(myArray);

const firstItem = myArray.unshift("perumal");
console.log(firstItem);
console.log(myArray);


const lastItemDel = myArray.pop();
console.log(lastItemDel);

const firstItemDel = myArray.shift();
console.log(firstItemDel);

console.log(myArray);

delete myArray[2];  // delete specific element 
console.log(myArray);
console.log(myArray[2]);
console.log(myArray);


myArray.splice(2,1); // delete specific element
console.log(myArray);

myArray.splice(2,1, false); // replace the specific element
console.log(myArray);

myArray.splice(2,0, true); // add element in specific place
console.log(myArray);


const newArray = myArray.slice(1,3);  //copy of array
console.log(myArray);
console.log(newArray);

const newArray1 = myArray.reverse();  // reverse the array
console.log(newArray1);

const newArray2 = myArray.join();  // all the element are convert into one string
console.log(newArray2);

const newArray3 = newArray2.split(",");
console.log(newArray3);



///join two arrays
const myArrayA = ["false", 33, 17];

console.log(myArray);
console.log(myArrayA);

const newArrays1 = myArray.concat(myArrayA);
console.log(newArrays1);

const newArrays2 = myArrayA.concat(myArray);
console.log(newArrays2);






//nested array

const earnMoneyA = ["Frontend", "Backend", "Fullstack"];
const earnMoneyB = ["Ai", "Blockchain", "DataAnalytics"];

const growMoneyA = ["Stocks", "realestate", "Fixedincome"];
const growMoneyB = ["Opetions", "Futures"];

const giveMoney = ["QualityEducation"];

console.log(earnMoneyA[1],growMoneyB[1]);

const earnMoney = [earnMoneyA,earnMoneyB];
const growMoney = [growMoneyA, growMoneyB];

console.log(earnMoney);
console.log(earnMoney[0][1],growMoney[1][1]); // show "backend and future"

const allMoney = [earnMoney,growMoney,giveMoney];

console.log(allMoney[0][0][1],allMoney[1][1][1]);  // show "backend and future"






