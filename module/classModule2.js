// ClassModule

export default class Subscriber {
    constructor(name){
        this.name = name;
    };
    emailMe(){
        return `Hi I am ${this.name}.
        emailed to pragadeeswaran@gmail.com`
    };
};