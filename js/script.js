// alert("it works!");
//create classes for pets and users.
//pets should be able to eat, sleep, and play
//users should be able to purchase pets

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

//script for opening page:
//user enters their name and hits go
    //the name create the user class
    //the go button navigates to the storepage.html

//script for the store page:
//user enters their pet's name
//user selects one of the pet options
    //the selected option then has a border around it
//once both of these things have been done, the go button appears
//the go button creates a pet class with the name and type
//the go button navigates to the mainpage.html
