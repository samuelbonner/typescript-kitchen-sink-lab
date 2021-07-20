// This is a re-do of Javascript Kitchen sink to establish familiarity with basic Typescript syntax.
var myName = "Sam";
var numberOfUSStates = 50;
// let testMath = 5 + 4;
function sayHello() {
    return "Hello World!";
}
sayHello();
var name2 = "John";
var age = 17;
function checkAge(name2, age) {
    if (age < 21) {
        console.log("Sorry " + name2 + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge(name2, age); // inputs 'John' and 17 for arguments
var favoriteVegetables = ["garlic", "kale", "onions", "tomatoes"];
for (var i = 0; i < favoriteVegetables.length; i++) {
    console.log(favoriteVegetables[i]);
}
var pet = {
    species: "feline",
    name: "Mac",
    breed: "American Shorthair"
};
console.log(pet.name + " is an " + pet.breed + " " + pet.species);
var people = [
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
for (var i = 0; i < people.length; i++) {
    checkAge(people[i].name, people[i].age);
}
// // Instructions: Create a function called getLength that takes any word as an argument. The function should return the number of characters in the string.
// // * Call the getLength function, passing 'Hello World' as the argument. Store the returned result of that function in a variable.
// // * If the number is even, display 'The world is nice and even!' in the developer console. Otherwise if the number is odd, display 'The world is an odd place!' in the developer console.
function getLength(word) {
    return Number(word.length);
}
var wordLength = getLength('Hello World!');
console.log(wordLength);
if ((wordLength % 2) == 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
