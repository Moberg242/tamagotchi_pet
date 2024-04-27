//create classes for pets and users.
//pets should be able to eat, sleep, and play
//users should be able to purchase pets
class Pet {
    constructor(name) {
        this.name = name,
            this.age = 0,
            this.hunger = 5,
            this.sleepiness = 3,
            this.boredom = 6
    }
    eat() {
        keyDown = true;
        this.hunger -= 3;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
        apple.style.animation = "eatApple 2s forwards";
        eatSound.play();
        setTimeout(() => {
            apple.style.animation = 'none';
        }, 1600);
    }
    nap() {
        this.sleepiness -= 1;
        if (this.sleepiness < 0) {
            this.sleepiness = 0;
        }
    }
    play() {
        keyDown = true;
        this.boredom -= 2;
        if (this.boredom < 0) {
            this.boredom = 0;
        }
        petImage.style.animation = 'play 3s';
        setTimeout(() => {
            petImage.style.animation = 'petMove 5s infinite';
        }, 4000);
    }
    exercise() {
        keyDown = true;
        this.boredom -=5;
        this.hunger +1;
        this.sleepiness +=1;
        if (this.boredom < 0) {
            this.boredom = 0;
        }
        petImage.style.animation = 'exercise 2s ease';
        setTimeout(() => {
            petImage.style.animation = 'petMove 5s infinite';
        }, 2000);
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

let player;
//where the new user class instance will go
let pet;
//where the new pet class instance will go

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

const goButton = document.getElementById("go");
const userName = document.getElementById("userName");
const petNameInput = document.getElementById("petNameInput");
let petImage = document.getElementById("pet1");
let apple = document.getElementById('apple');

goButton.addEventListener("click", function () {
    player = new User(userName.value);
    pet = new Pet(petNameInput.value);
    document.querySelector("h1").innerHTML = `${player.name}'s house`;
    document.getElementById("petName").innerHTML = pet.name;
    document.querySelector('.name').remove();
    petImage.style.visibility = 'visible';
    apple.style.visibility = 'visible';
    updateHTML();
    document.querySelector('#petInfo').style.visibility = 'visible';
    document.querySelector('#instructions').style.visibility = 'visible';
    intervals();
    petImage.style.animation = 'petMove 5s infinite';
});
//when the user clicks the pick your pet button: 
//a new user class is created with the player's name
//a new pet class is created with the pet's name
//the name box disappears
//start interval timers




let writeGameScript;
//script for game play:

//HTML ELEMENTS: (only needed to update html)
let background = document.querySelector("#home");
let petAge = document.getElementById('age');
let petSleepiness = document.getElementById('sleepiness');
let petHunger = document.getElementById('hunger');
let petBoredom = document.getElementById('boredom');
const evolveButton = document.getElementById("evolve");


let eatSound = document.getElementById('eatSound');
let isNapping = false;
let evolution1 = true;
let evolution2 = false;
let evolution3 = false;
let keyDown = false;

function updateHTML() {
    petAge.innerHTML = `age: ${pet.age}`;
    petSleepiness.innerHTML = `sleepiness: ${pet.sleepiness}`;
    petHunger.innerHTML = `hunger: ${pet.hunger}`;
    petBoredom.innerHTML = `boredom: ${pet.boredom}`;
}

function lights() {
    keyDown = true;
    if(isNapping === true) {
        background.style.backgroundImage = "url('https://www.shutterstock.com/image-vector/living-room-interior-design-furniture-600nw-529549399.jpg')";
    isNapping = false;
    petImage.style.animation = 'petMove 5s infinite';
    } else if(isNapping === false) {
        background.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.shutterstock.com/image-vector/living-room-interior-design-furniture-600nw-529549399.jpg')";
    isNapping = true;
    setInterval(() => {
        if (isNapping) {
            pet.nap();
        }
    }, 1000);
    petImage.style.animation = 'none';
    }
}

function death() {
    if (pet.hunger >= 10 || pet.boredom >= 10 || pet.sleepiness >= 10) {
        background.style.backgroundImage = "url('https://t3.ftcdn.net/jpg/04/97/73/12/360_F_497731291_0REk9c57hXCwcMABy7e6yc6W4eKeyRhz.jpg')";
        document.querySelector('.gameOver').style.visibility = 'visible';
        petImage.remove();;
        apple.remove();
        document.querySelector('#petInfo').remove();
        document.querySelector('#instructions').remove();
    }
}

function evolve() {
    if (evolution1) {
        petImage.style.visibility = 'hidden';
        document.querySelector('.ageUp').style.visibility = 'visible';
        setTimeout(() => {
            petImage = document.querySelector('#pet2');
            petImage.style.visibility = 'visible';
            document.querySelector('.ageUp').style.visibility = 'hidden';
            evolveButton.style.visibility = 'hidden';
            evolution1 = false;
            evolution2 = true;
        }, 2000);
    } else if (evolution2) {
        petImage.style.visibility = 'hidden';
        document.querySelector('.ageUp').style.visibility = 'visible';
        setTimeout(() => {
            petImage = document.querySelector('#pet3');
            petImage.style.visibility = 'visible';
            document.querySelector('.ageUp').style.visibility = 'hidden';
            evolveButton.style.visibility = 'hidden';
            evolution2 = false;
            evolution3 = true;
        }, 4000);
    }
}

document.addEventListener('keydown', function (e) {
    if (keyDown === false) {
        if (e.key === 'ArrowUp') {
            lights();
        } else if (e.key === 'ArrowDown' && isNapping === false) {
            pet.exercise();
        } else if (e.key === 'ArrowLeft' && isNapping === false) {
            pet.eat();
        } else if (e.key === 'ArrowRight' && isNapping === false) {
            pet.play();
        }
        setTimeout(() => {
            keyDown = false;
        }, 1000);
    }
    updateHTML();
})
//whenever a game key is pressed, it triggers a function to either turn on/off the lights (nap)(-sleepiness), exercise (-boredom/+hunger/+sleepiness), eat (-hunger), or play (-boredom)

evolveButton.addEventListener("click", function () {
    evolve();
})
//when the evolve button is clicked the pet will evolve!

const timer = document.querySelector('#timer');
let time = 0;
let timeShow;

function intervals() {
    setInterval(function () {
        time++;
        let minutes = Math.floor(time / 60);
        let seconds = time % 60;
        if (time >= 60) {
            timeShow = minutes + ":" + seconds;
        } else {
            timeShow = "0:" + time;
        };
        timer.innerHTML = `gameplay: ${timeShow}`;
        if (time % 8 === 0) {
            pet.boredom++;
            pet.sleepiness++;
            pet.hunger++;
        }
        if (time % 15 === 0) {
            pet.age++;
        }
        updateHTML();
        death();
    }, 1000);
    setInterval(() => {
        if (pet.age >= 2 && evolution1 === true) {
            evolveButton.style.visibility = 'visible';
        } else if (pet.age >= 4 && evolution2 === true) {
            evolveButton.style.visibility = 'visible';
        }
    }, 15000);
}
//every second the game timer goes up
//every 10 seconds the pet's hunger/boredom/sleepiness goes up by one
//every 20 seconds the pet's age goes up by one
//if the pet's hunger/boredom/sleepiness gets too high the pet will die ):
//every 15 seconds the code checks the pet's age, if they are >2 or >4 you have the option to evolve them!