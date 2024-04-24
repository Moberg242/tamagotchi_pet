//create classes for pets and users.
//pets should be able to eat, sleep, and play
//users should be able to purchase pets
class Pet {
    constructor(name) {
        this.name = name,
        this.age = 0,
        this.hunger = 5,
        this.sleepiness = 5,
        this.boredom = 5
    }
    eat() {
        this.hunger -=3;
        if(this.hunger < 0) {
            this.hunger = 0;
        }
    }
    nap() {
        this.sleepiness -=4;
        if(this.sleepiness < 0) {
            this.sleepiness = 0;
        }
    }
    play() {
        this.boredom -=3;
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
    updateHTML();
    //when the user clicks the pick your pet button: 
        //a new user class is created with the player's name
        //a new pet class is created with the pet's name
        //the name box disappears
});



let writeGameScript;
//script for game play:

const background = document.querySelector("#home");

function updateHTML() {
    const petAge = document.getElementById('age');
    const petSleepiness = document.getElementById('sleepiness');
    const petHunger = document.getElementById('hunger');
    const petBoredom = document.getElementById('boredom');
    petAge.innerHTML = `age: ${pet.age}`;
    petSleepiness.innerHTML = `sleepiness: ${pet.sleepiness}`;
    petHunger.innerHTML = `hunger: ${pet.hunger}`;
    petBoredom.innerHTML = `boredom: ${pet.boredom}`;
}

function lightsOff() {
    background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.shutterstock.com/image-vector/living-room-interior-design-furniture-600nw-529549399.jpg')";
    pet.nap();
}

function lightsOn() {
    background.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/living-room-interior-design-furniture-600nw-529549399.jpg')";
}

document.addEventListener('keydown', function(e) {
    e.preventDefault();
    console.log(e);
    if(e.key === 'ArrowUp') {
        lightsOn();
    } else if(e.key === 'ArrowDown') {
        lightsOff();
    } else if(e.key === 'ArrowLeft') {
        pet.eat();
    } else if(e.key === 'ArrowRight') {
        pet.play();
    }
    updateHTML();
})
//whenever a game key is pressed, it triggers a function to either turn off the lights (nap)(-sleepiness), turn on the lights, eat (-hunger), or play (-boredom)

