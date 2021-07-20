// This is a re-do of Javascript Kitchen sink to establish familiarity with basic Typescript syntax.

let myName = 'Sam';
const numberOfUSStates = 50;

let testMath = 5 + 4;

// function sayHello() {
//     alert('Hello World!');
// }

// sayHello();

let name = 'John';
let age = 17;

function checkAge(name, age) {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

// checkAge('Charles, 21');
// checkAge('Abby, 27');
// checkAge('James, 18');
// checkAge(name, age);

let favoriteVegetables = ['garlic', 'kale', 'onions', 'tomatoes'];

for (let i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}

let pet = {
    species: 'feline',
    name: 'Mac',
    breed: 'American Shorthair'
};

console.log(pet.name + " is an " + pet.breed + " " + pet.species);

// Instructions: Create an array of 5 objects that contain name and age properties. Make up names and ages for each object, making sure some are younger than 21 and some are 21+.
// * Use a loop to call the checkAge function for each object in the array, passing the object's name and age as arguments.


let people = [
    {
        name: "Angel",
        age: 45
    },
    {
        name: "Bob",
        age: 85
    },
    {
        name: "Callie",
        age: 17
    },
    {
        name: "Don",
        age: 60
    },
    {
        name: "Eric",
        age: 12
    }
];

for (let i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}


// Instructions: Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
// * Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
// * If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.

function getLength(word) {
    return Number(word.length);
}

let wordLength = getLength('Hello World!');
console.log(wordLength);

if ((wordLength % 2) == 0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}