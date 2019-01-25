/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

/*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:
class GameObject {
  constructor(gameAttrs) {
    this.createdAt = gameAttrs.createdAt;
    this.dimensions = gameAttrs.dimensions;
  }
  destroy() {
    return `${this.name} was removed from game`;
  }
}

class CharacterStats extends GameObject {
  constructor(charAttrs) {
    super(charAttrs);
    this.healthPoints = charAttrs.healthPoints;
    this.name = charAttrs.name;
  }
  takeDamage() {
    return `${this.name} took damage.`;
  }
}

class Humanoid extends CharacterStats {
  constructor(humanAttrs) {
    super(humanAttrs);
    this.team = humanAttrs.team;
    this.weapons = humanAttrs.weapons;
    this.language = humanAttrs.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

// HERO CONSTRUCTOR
class Hero extends Humanoid {
  constructor(heroAttrs) {
    super(heroAttrs);
    this.attackPoints = heroAttrs.attackPoints;
    this.luck = heroAttrs.luck;
    this.isDestroyed = false;
  }
  attack(attackee) {
    this.checkIfIsDestroyed();
    attackee.checkIfIsDestroyed();
    if (this.isDestroyed) {
      return `${this.name} is destroyed and cannot attack`;
    } else if (attackee.isDestroyed) {
      return `${attackee.name} is destroyed and cannot be attacked`;
    } else {
      // DAMAGE IS BASED ON ACTION POINTS X RANDOM NUMBER FROM ZERO TO LUCK
      let damage =
        this.attackPoints * Math.floor(Math.random() * Math.floor(this.luck));
      attackee.healthPoints -= damage;
      attackee.checkIfIsDestroyed();
      return attackee.isDestroyed
        ? `${this.name} did ${damage} damage to ${attackee.name}. ${
            attackee.name
          } is destroyed.`
        : `${this.name} did ${damage} damage to ${attackee.name}. ${
            attackee.name
          } now has ${attackee.healthPoints} health remaining.`;
    }
  }
  checkIfIsDestroyed() {
    this.isDestroyed = this.healthPoints <= 0 ? true : false;
  }
}

// VILLAIN CONSTRUCTOR
class Villain extends Hero {
  constructor(villainAttrs) {
    super(villainAttrs);
  }
  evilLaugh() {
    return `Mwah Ha Ha Ha!`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

// HERO
let frodo = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 1,
    height: 1
  },
  healthPoints: 15,
  name: "Frodo",
  team: "The Fellowship",
  weapons: ["Sting"],
  language: "Common Tongue",
  attackPoints: 2,
  luck: 15
});

//VILLAIN
let sauron = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 20,
    width: 20,
    height: 20
  },
  healthPoints: 40,
  name: "Sauron",
  team: "Team Mordor",
  weapons: ["Orcs"],
  language: "All of them",
  attackPoints: 10,
  luck: 2
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

window.addEventListener("DOMContentLoaded", function() {
  // GET DOM ELEMENTS
  let heroBox = document.querySelector("#hero");
  let villainBox = document.querySelector("#villain");
  let results = document.querySelector(".results");
  let heroButton = document.querySelector("#hero button");
  let villainButton = document.querySelector("#villain button");
  let fightButton = document.querySelector("#fight-button");
  let resetButton = document.querySelector("#reset-button");
  let randomHero;
  let randomVillain;
  // initialize counter
  let counter = 0;
  // array of hero names
  let heroNames = [
    "Greihar",
    "Sevendadia",
    "Legiaw",
    "Alelle",
    "Qardotrem",
    "Mebeth",
    "Dwaligord",
    "Afaedia",
    "Edeajan",
    "Mireliswen",
    "Ulerigan",
    "Rhebeth",
    "Iberiand",
    "Unoin",
    "Rawyr",
    "Rhalicia",
    "Wild",
    "Ulaleveth",
    "Miraulith",
    "Aloinia",
    "Ulomab",
    "Haaodia",
    "Neinidd",
    "Ibirien",
    "Taot"
  ];
  // array of villain names
  let villainNames = [
    "Ocaojar",
    "Bireria",
    "Eowendaseth",
    "Aroreswen",
    "Pilimond",
    "Ethilin",
    "Acirakith",
    "Dwarith",
    "Umies",
    "Thigoswen",
    "Rherras",
    "Frudia",
    "Qaoric",
    "Haelillan",
    "Prardohan",
    "Collan",
    "Gralim",
    "Larilimeth"
  ];
  // log results after each hit
  function logResults(newResult) {
    results.innerHTML += `<p>${newResult}</p>`;
  }
  // reset for new fight, i had to use .reload in order to bind events to the reset elements
  function reset() {
    document.location.reload();
  }
  // heroes have fewer attack points and higher luck
  function generateHero(nameArr) {
    return new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 1
      },
      healthPoints: Math.floor(Math.random() * 50),
      name: nameArr[Math.floor(Math.random() * nameArr.length)],
      team: "",
      weapons: "",
      language: "",
      attackPoints: Math.floor(Math.random() * 20),
      luck: Math.floor(Math.random() * 20)
    });
  }
  // update content for hero square
  function updateHero(hero) {
    if (hero.isDestroyed) {
      heroBox.innerHTML = `<h2>${hero.name}</h2><h2>DESTROYED</h2>`;
    } else {
      heroBox.innerHTML = `<h2>${hero.name}</h2><p>Health Points: ${
        hero.healthPoints
      }</p><p>Attack Points: ${hero.attackPoints}</p><p>Luck: ${hero.luck}`;
    }
  }
  //villains are more likely to have more attack points and lower luck
  function generateVillain(nameArr) {
    return new Villain({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 1,
        height: 1
      },
      healthPoints: Math.floor(Math.random() * 50),
      name: nameArr[Math.floor(Math.random() * nameArr.length)],
      team: "",
      weapons: "",
      language: "",
      attackPoints: Math.floor(Math.random() * 30),
      luck: Math.floor(Math.random() * 15)
    });
  }
  // update content for villain square
  function updateVillain(villain) {
    if (villain.isDestroyed) {
      villainBox.innerHTML = `<h2>${villain.name}</h2><h2>DESTROYED</h2>`;
    } else {
      villainBox.innerHTML = `<h2>${villain.name}</h2><p>Health Points: ${
        villain.healthPoints
      }</p><p>Attack Points: ${villain.attackPoints}</p><p>Luck: ${
        villain.luck
      }`;
    }
  }
  // battle
  function battle(hero, villain) {
    if (typeof hero !== "undefined" && typeof villain !== "undefined") {
      if (counter % 2 === 0) {
        let string = hero.attack(villain);
        logResults(string);
        updateVillain(villain);
        counter++;
      } else {
        let string = villain.attack(hero);
        logResults(string);
        updateHero(hero);
        counter++;
      }
    } else {
      logResults("You need an opponent to fight!");
    }
  }

  //EVENT LISTENERS
  // generate a random hero when hero button pressed
  heroButton.addEventListener("click", function() {
    console.log("hero click");
    randomHero = generateHero(heroNames);
    updateHero(randomHero);
    results.innerHTML = "";
  });
  // generate random villain when villain button is pressed
  villainButton.addEventListener("click", function() {
    console.log("villain click");
    randomVillain = generateVillain(villainNames);
    updateVillain(randomVillain);
    results.innerHTML = "";
  });

  // WHEN THE FIGHT BUTTON IS PRESSED, IF COUNTER IS EVEN THEN HERO ATTACKS, ELSE VILLAIN ATTACKS
  fightButton.addEventListener("click", function() {
    battle(randomHero, randomVillain);
  });
  resetButton.addEventListener("click", reset);
});
