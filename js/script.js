// alert("it works!");
//create a class for the game
    //include the user name, and methods for the following: 
    //1. feed pet
    //2. let pet sleep 
    //3. play with pet
    //4. name you pet
        //this will actually be in the constructor thanks
    //note: these methods can be updated later!

class Pet {
    constructor(name, petType, price) {
        this.name = name,
        this.type = petType,
        this.age = 0,
        this.hunger = 5,
        this.sleepiness = 0,
        this.boredom = 0,
        this.price = price
    }
    eat() {
        this.hunger -=3;
        if(this.hunger < 0) {
            this.hunger = 0;
        }
    }
    nap() {
        this.sleepiness -=10;
        if(this.sleepiness < 0) {
            this.sleepiness = 0;
        }
    }
    play() {
        this.boredom -=5;
        if(this.boredom < 0) {
            this.boredom = 0;
        }
    }
}

class User {
    constructor(name) {
        this.name = name,
        this.bankAccount = 150,
        this.pets = []
    }
    buyPet(name) {
        this.pets.push(name);
        let price = name.price;
        this.bankAccount -= price;
    }
}

let me = new User("michelle");
// console.log(me);
let leafee = new Pet("leafee","grass", 100);
// console.log(leafee);
// me.buyPet(leafee);
// console.log(me);
// leafee.eat();
// leafee.nap();
// leafee.play();
// console.log(me);