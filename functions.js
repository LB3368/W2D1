//function = a reusable block of code to perform a single purpose
//break complex problems into smaller problems
// DRY - Don't Repeat Yourself
/* Things to remember
Good input (Garbage in Garbage out) 
Name function accordingly.
*/

// 2 Ways to Write a function
 // ========Function DECLARATION===========
// function declarations will be hoisted to the top.
/*
 function sayHello (name) {
    console.log("Hello" + name + "!")
 }

 sayHello("Toby")
  // ======FUNCTION EXPRESSION=========
  const sayHelloAgain = function (name) {
    if (typeof name !== "string" ) {
        console.log("Input was not a string, Try again")
        return
    //console.log(typeof name)
    console.log("Hello " + name + "!")
  }
}

  sayHelloAgain("18")

  // Arrow Functions - explicitly return
  //shorthand arrow function
  const add = (num1, num2) => num1 + num2

  console.log(add(85256, 2))

  //const add = (num1, num2) => {
   // return a + b
 // }

 //const add = (num = 10, num2 = 15, num3 = 5) => num1 + num2 + num3

 //console.log(add(70, 15, 38))

 function areBothEven(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        console.log("is not a number")
        return
    } else {
        return !(n1 % 2) && !(n2 % 2);
    }
 }

 //function expression uses "="
 console.log(areBothEven(2, "anton"))
/* example of truthy and falsey scenario
 const arr = []

 if (!arr.length) {
    console.log("I have elements!!")
 } else {
    console.log("I'm empty")
 }
 */

 // Parameters - the slots the placeholders for inputs that the function should receive
  // Arguments - the specific values of JS data types that we give those slots when we run a function

  function bottleCapper ( bottle /** parameters */, cap) {
    return bottle + cap
  }
    //console.log(bottle) ReferenceError
  bottleCapper("green botle (argument)", "white cap (argument)")
 
// Spread Operator - help us gather as many arguments as we want using an array

function getDevObject(name,age, ...skills) {
    console.log(skills)

    return {
        devName: name,
        jobSkills: skills,
        age: age
    };
}

console.log(getDevObject("Betty", 1298736, "awesome", "cool"))
//Default Parameters - any expression can be provided as a default, including objects

/*old code
function setColor(bicycle, color) {
    //set color to 'purple' if not provided
    bicycle.color = color || 'purple';
}

const bike = new Bicycle();
setColor(bike, 'blue'); // sets color to blue
setColor(bike); // sets color to purple by default

function setColor(bicycle, color = 'purple') {
    bicycle.color = color;
}

// Objects
// key/value pairs
const arr = [1,2,3,4]// bracket notation
const person = { // Dot notation
    name: "Mina",
    job: "developer",
    isAwesome: true,
    skills: ["coding", "something else"],
    pet: {
        name: "fiddo"
    }
}*/

/*console.log(person.pet.name)

const arrOfObj = [
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
    {
      username: "blah",
      emaill: "alksdj@gmail.com"
    },
  ]

  console.log(arrOfObj[1].username)

const bicycle = {
    brand: "mongoose",
    color: "red"
}

function setColor(bicycle, color) {
    bicycle.color = color || "purple"
}

setColor(bicycle)

console.log(bicycle);

// ES6 way

function setColor(bicycle, color = "purple") {
    bicycle.color = color
}
    setColor(bicycle)
    console.log(bicycle);

// Functions as arguments
const a = ['red', 'green', 'blue'];

a.forEach(function(color) {
    console.log(color);
});*/

//parameters are in (), the arguments are the data value you pass through

// Scope - accessibility of variables and functions from a given point of the code
//JS has 3 types of scope:
// A single global scope - anything defined at the global level

// function scope - known as local scope

// block scope -  let & const

//Principle of Lease Access - based on the idea that limiting the accessibility of variables helps reduce bugs in the code.

// benefit- being able to use the same names for variables in different functions.
//Global Scope
const num = 4

function foo(x) {
    //local scope
    const b = num * 4

    function bar(y) {
        const c = y * b
        // foo(1) will give a reference error
        return c
    }
    return bar(b)
}

console.log(foo(num));

// Global scope in the browser

// Key takeaway: functions have access to the set of variables and functions defined w/n their own scope AND in the outer scopes

//You can look out but you can look in

// When a line of code accesses a variable, JS will traverse up the scope chain unti it finds what its looking for

// IFFE - Immediately invoked function expression
(() => {
    console.log("I was ran immediately")
})();


console.log("after the IFFE")