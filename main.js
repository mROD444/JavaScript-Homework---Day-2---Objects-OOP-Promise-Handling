console.log('testing')
//========== Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


// let person1 = {
//     pizza:"Hawaiian",
//     tacos:"Barbacoa",
//     burgers:"Portillos Burgers",
//     ice_cream:"Chocolate",
//     shakes:'vanilla'
// }


function food(person) {
    for (let foodType in person) {
        if (Array.isArray(person[foodType])) {
            console.log(`${foodType}:`);
            person[foodType].forEach(dish => {
                console.log(`  - ${dish}`);
            });
        } else if (typeof person[foodType] === 'string') {
            console.log(`${foodType}: ${person[foodType]}`);
        } else if (typeof person[foodType] === 'object') {
            console.log(`${foodType}:`);
            for (let shakePlace in person[foodType][0]) {
                console.log(`  - ${person[foodType][0][shakePlace]} from ${shakePlace}`);
            }
        }
    }
}

food(person3)
// food(person1)


//======= Exercise #2=========//
/*
Write an Javascript Class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods.
*/ 

// Create our Person Class

class Persona{
    constructor(name, age){
        this.name = name
        this.age = age
    }

// Use an arrow to create the printInfo method

    printInfo=()=>{
        console.log(`${this.name} is ${this.age} years old!`)

    }

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 
    upAge = () => {
        this.age += 1;
    }

}


const persona1 = new Persona('Braden', 23)
const persona2 = new Persona('Maria', 21)

persona1.printInfo();
persona2.printInfo();



//up age
persona1.upAge();
persona1.printInfo();

persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.upAge();
persona2.printInfo();


// ============= Exercise #3 ============//
/*
    Using the Ergast API, fetch to 'http://ergast.com/api/f1/2008/5/driverStandings.json'
    handle the promise with callbacks (.then(), .catch()) or async/await, and log the data.
*/

const driverStandingsData = async () => {
    const response = await fetch('http://ergast.com/api/f1/2008/5/driverStandings.json')
    const data = await response.json()
    console.log(data)
}
driverStandingsData()


// answer 2 code wars problems for tonight as well. One that you've done previously in python, one that you have not yet done. All must be produced in JavaScript.
// Convert a Number to a String!
// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// Examples (input --> output):
// 123  --> "123"
// 999  --> "999"
// -100 --> "-100"

function numberToString(num) {
    return String(num)
}

let result1 = numberToString(8)
console.log(typeof result1)
console.log(result1)


let result2 = numberToString(444)
console.log(result2)
console.log(typeof result2)

let result3 = numberToString(388)
console.log(result3)
console.log(typeof result3)


// Returning Strings
// Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]
function greet(name){
    return "Hello, " + name + " how are you doing today?"
  }

let name1 = greet('Braden')
console.log(name1)

let name2 = greet('Maria')
console.log(name2)

let name3 = greet('Taylor Swift')
console.log(name3)