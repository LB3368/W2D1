/*EXERCISE 1: Write a Function Declaration
Write a function named computeArea using the function declaration approach.

It will have two parameters: width& height.

It will compute the area of a rectangle (width X height) and return a string in the following form:

The area of a rectangle with a width of _ and a height of _ is ___ square units.

Invoke the function to test it.*/
function computeArea(width, height){
    return(width * height)
}

console.log("The area of a rectangle with a width of " + 25 + " and a height of " + 15 + " is "  + computeArea(25, 15) + " square units.")



/*EXERCISE 2: Write a Function Expression
Write a function named planetHasWater using the function expression syntax.

It will have one parameter: planet.

Return trueif the planetargument is either "Earth" or "Mars", otherwise return false.

Bonus points if you ensure the function will work regardless of the casing of the planetbeing passed in ('earth', 'MARS', etc.).

Invoke the function a couple of times to test it!*/
//const sayHelloAgain = function (name) {
    //if (typeof name !== "string" ) {
       // console.log("Input was not a string, Try again")
      //  return
    //console.log(typeof name)
   // console.log("Hello " + name + "!")
 // }
//}

//  sayHelloAgain("18")
const planetHasWater = function (planet) {
    if (planet.toLowerCase() === "earth" || planet.toLowerCase() === "mars") {
        return true
    } else {
        return "Wrong Planet"
    }
}

console.log(planetHasWater("Mars"))




/*FUNCTION REVIEW QUESTIONS
❓ How many different ways are there to define a function?

❓ What's the only practical difference between a function definition and a function expression?*/
