const prompt = require('readline-sync');

class Character {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    if(name === 'Steeve') {
      console.log(`Everyone loves ${name}`);
    } else {
      console.log(`Your character is ${name}`);
    }
  }

  static makeCharacter(character) {

  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getSixSidedDiceRoll() {
  return getRandomInt(1, 6);
}

function getTenSidedDiceRoll() {
  return getRandomInt(1, 10);
}

function getFourSidedDiceRoll() {
  return getRandomInt(1, 4);
}

const steeve = new Character('Steeve', 'the rock star');

console.log('You have four character options:')
console.log('1. Steeve the rock star');
console.log('2. Quack Daddy on bass');
console.log('3. Quack Mama on keys');
console.log('4. Robert on triangle');

let character = 0;

while(isNaN(character) || character < 1 || character > 4 ) {
  character = parseInt(prompt.question('Choose your character (1, 2, 3 or 4): '));
}

switch (character) {
  case 1:
    console.log('Your character is Steeve');
    console.log('Everyone loves Steeve');
    break;
  case 2:
    console.log('Your character is Quack Daddy');
    console.log('just too cool');
    break;
  case 3:
    console.log('Your character is Quack Mama');
    console.log('Only girl in the band');
    break;
  case 4:
    console.log('Your character is Robert');
    console.log('Nobody cares about Robert');
    break;
  default:
}


console.log('You have four weapon options:')
console.log('1. Spaghetti Whip');
console.log('2. Bird Leaf');
console.log('3. Almighty Hot Dog');
console.log('4. Too Clean To Be Soap');

let weapon = 0;
let damage = 0;

while(isNaN(weapon) || weapon < 1 || weapon > 4 ) {
  weapon = parseInt(prompt.question('choose your weapon (1, 2, 3 or 4): '));
}

switch (weapon) {
  case 1:
    console.log('Your weapon is the Spaghetti Whip');
    console.log('25 damage')
    damage = 25
    break;
  case 2:
    console.log('Your weapon is the Bird Leaf');
    console.log('50 damage')
    damage = 50
    break;
  case 3:
    console.log('Your weapon is the Almighty Hot Dog');
    console.log('75 Damage')
    damage = 75
    break;
  case 4:
    console.log('Your weapon is the Too Clean To Be Soap');
    console.log('100 Damage');
    damage = 100
    break;
  default:
}


const rollPrompt = prompt.question('Roll? ');

const roll = getSixSidedDiceRoll();

console.log(`You have moved ${roll} spaces.`);

let monster = 0

switch (monster) {

  case 1:
    console.log('Oh no! You ran into The Beating Drums 25 HP');
    console.log('The Spaghetti Whip does 25 more damage');
    break;
  case 2:
    console.log('Oh no! You ran into The Vengful Violin 50 HP');
    console.log('The Bird Leaf does 25 more damage ');
    break;
  case 3:
    console.log('Oh no! You ran into The Piano Man 75 HP');
    console.log('The Almighty Hot Dog does 25 more damage');
    break;
  case 4:
    console.log('Oh no! you ran into The Noisy Microphone 125 HP');
    console.log('The Too Clean To Be Soap does 25 more damage');
    break;
  default:
}
