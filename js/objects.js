// objects
// key-value pairs in curly braces

const myobj = {
    name : "praga"
};


const anotherObj = {
    subscriber : true,
    no: 1000,
    contant : {
        learn : "js",
        grow : "Stocks"
    },
    subdivisions : ["Earn", "grow", "give"],
    action1 : function () {
        return "hello world";
    },
    action2 : function () {
        return `Earn by learning ${this.contant.learn}`
    }

};

/*
console.log(myobj.name);
console.log(anotherObj.subscriber);
console.log(anotherObj.no);
console.log(anotherObj.subdivisions);
console.log(anotherObj.subdivisions[2]);
console.log(anotherObj.contant.grow);
console.log(anotherObj["subscriber"]);
console.log(anotherObj["subdivisions"]);
console.log(anotherObj.action1);
console.log(anotherObj.action1());
console.log(anotherObj.action2());
*/

const vehicle = {
    doors : 2,
    engine : function (){

        return "v8"
    }
};

console.log(vehicle.engine());

const car = Object.create(vehicle);
console.log(car);
console.log(car.engine());

car.wheels = 4;

console.log(car);
console.log(car.doors);

//modified obj

car.engine = function () {
    return "v6";
};

console.log(car.engine());


const tesla = Object.create(car);

console.log(tesla.doors);
console.log(tesla.engine());

tesla.engine = function () {
    return "is electric"
};


console.log(tesla.engine());




const movie = {
    actor : "kavin",
    music : "arr",
    director : "Lokesh",
    producer : "anbu"
};

console.log(movie.hasOwnProperty("producer"));

delete movie.producer;

console.log(movie.producer);
console.log(movie.hasOwnProperty("producer"));

console.log(Object.keys(movie));
console.log(Object.values(movie));

for (let key in movie){
    console.log(`${key}, it's ${movie[key]}`);
    
}




// destructuring the object


const movie1 = {
    actor : "kavin",
    music : "arr",
    director : "Lokesh",
    producer : "anbu"
};


const {music: myfavMusicDirector , director : myFavDirector}  = movie1;
console.log(myfavMusicDirector);
console.log(myFavDirector);


const {actor, music, director, producer} = movie1

console.log(actor);
console.log(music);
console.log(director);
console.log(producer);


function sings({music}) {
    return music;
    
}

console.log(sings(movie1));