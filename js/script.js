//create classes for pets and users.
//pets should be able to eat, sleep, and play
//users should be able to purchase pets
class Pet {
    constructor(name) {
        this.name = name,
        this.age = 0,
        this.hunger = 5,
        this.sleepiness = 0,
        this.boredom = 0
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
        this.pets = []
    }
    buyPet(name) {
        this.pets.push(name);
    }
}

//testing
// let me = new User("michelle");
// console.log(me);
// let leafee = new Pet("leafee","grass", 100);
// console.log(leafee);
// me.buyPet(leafee);
// console.log(me);
// leafee.eat();
// leafee.nap();
// leafee.play();
// console.log(me);

let writeOpeningScript;
//script for opening page:
//user enters their name and hits go
    //the name create the user class and pet class


const title = document.querySelector("h2");
const goButton = document.getElementById("go");
const nameBox = document.querySelector('.name');
const userName = document.getElementById("userName");
const petNameInput = document.getElementById("petNameInput");
const petName = document.getElementById("petName");
const petImage = document.getElementById("pet");

let player;
    //where the new user class instance will go
let pet;
    //where the new pet class instance will go


goButton.addEventListener("click", function() {
    player = new User(userName.value);
    pet = new Pet(petNameInput.value);
    title.innerHTML = `${player.name}'s house`;
    petName.innerHTML = pet.name;
    nameBox.remove();
    petImage.style.visibility = 'visible';
    //when the user clicks the pick your pet button: 
        //a new user class is created with the player's name
        //a new pet class is created with the pet's name
        //the name box disappears
});



let writeGameScript;
//script for game play:



//FUNCTIONALITY NOTES FOR LATER:
//openpage: the button works if the user doesn't input a name
//storepage: the button works if the user doesn't input a name
//storepage: if you select more than one animal it selects both