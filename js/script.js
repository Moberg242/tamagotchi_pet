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
    //the name create the user class
    //the go button navigates to the storepage.html (written into html)

let goToStoreButton = document.getElementById("goToStore");
let boughtPetButton = document.getElementById("boughtPet");
let allOpening = document.getElementById('openingPages');
let h1 = document.querySelector("h1");
let enterName = document.querySelector("#enterName")
let userName = document.getElementById("userName");
let animal = document.querySelectorAll(".animal");
let player;
let pet;


goToStoreButton.addEventListener("click", function() {
    player = new User(userName.value);
    h1.innerHTML = "Choose your pet!";
    enterName.innerHTML = "Please enter your pet's name here and select a pet!";
    goToStoreButton.remove();
    userName.value = '';
    document.querySelector('.images').style.visibility = "visible";
    //when the user clicks the pick your pet button: 
        //a new user class is created with the player's name
        //the HTML changes to the "store" view, animals appear!
        //the gotostore button is removed
});

animal.forEach(function(e) {
    e.addEventListener("click", function() {
        e.style.border = "1px solid black";
        boughtPetButton.style.visibility = "visible";
    })
    //when the user clicks on one of the animals:
        //a border appears around the selected animal
        //the buy pet button appears
})

boughtPetButton.addEventListener("click", function() {
    pet = new Pet(userName.value);
    player.buyPet(pet);
    allOpening.remove();
    //when the user clicks on the buy pet button:
        //a new pet class is created with the pet's name
        //all html in the openingPages div is removed
})








let writeGameScript;
//script for game page:



//FUNCTIONALITY NOTES FOR LATER:
//openpage: the button works if the user doesn't input a name
//storepage: the button works if the user doesn't input a name
//storepage: if you select more than one animal it selects both