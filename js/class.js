//classes 


const myPizza = {
    size : "medium",
    crust : "originl",
    bake : function () {
        return console.log(`baking a ${this.size} ${this.crust} crust pizza`);
    }
};

myPizza.bake();

//create class

class Pizza{

    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = crustPizza;
        this.toppings = "olives"
    };

    getToppings() {
        return this.toppings;
    };
    setToppings(toppingsPizza) {
        this.toppings = toppingsPizza;

    }

    bake(){
        return console.log(`baking a ${this.size} size ${this.type} ${this.crust} crust pizza with ${this.toppings} toppings`);
    };

};

const anotherPizza1 = new Pizza("pepperonni","normal","original");
const anotherPizza2 = new Pizza("margaritta","big", "normal")

anotherPizza2.setToppings("sausage");


anotherPizza1.bake();
anotherPizza2.bake();

console.log(anotherPizza2.toppings);
console.log(anotherPizza2.getToppings());



class Pizza1{

    constructor(typePizza, sizePizza, crustPizza){
        this.type = typePizza;
        this.size = sizePizza;
        this.crust = crustPizza;
        this.toppings = [];
    };

    getToppings() {
        return this.toppings;
    };
    setToppings(toppingsPizza) {
        this.toppings.push(toppingsPizza);

    }

    bake(){
        return console.log(`baking a ${this.size} size ${this.type} ${this.crust} crust pizza with ${this.toppings} toppings`);
    };
};


const myPizza1 = new Pizza1("pepperonni","normal","original")
myPizza1.setToppings("sausage");
myPizza1.setToppings("pepperonni");

myPizza1.bake();





// parent and child class


class ParentPizza {
    constructor(sizePizza){
        this.size = sizePizza;
        this.crust = "original";
    }
    getCrust(){
        return this.crust;

    };
    setCrust(crustPizza){
        this.crust = crustPizza;
    };
};

class SpecialPizza extends ParentPizza {
    constructor(sizePizza){
        super(sizePizza);
        this.type = "margarita";
    }
    slice(){
        console.log(`our ${this.type} ${this.size} ${this.crust} pizza has 8 sclices`);
    };

};

const mySpecialPizza = new SpecialPizza("medium");

mySpecialPizza.slice()


//factory function






class MyPizza {
    crust = "original"
    #sauce = "tomato";

    constructor(sizePizza){
        this.size = sizePizza;
        
    }
    getCrust(){
        return this.crust;

    };
    setCrust(crustPizza){
        this.crust = crustPizza;
    };
    bake(){
        return console.log(`Baking a ${this.size} ${this.crust} ${this.#sauce} pizza`);
    }
};

const pizza5 = new MyPizza ("small");
pizza5.bake()
console.log(pizza5.sauce);

























