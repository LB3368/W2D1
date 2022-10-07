/*Exercise


Setup & Instructions
For the exercises in this lab, create a JavaScriptREPLfrom repl.it -- you can name it "JavaScript Functions lab".

As a reminder this lab is not a deliverable.



Requirements
Define and code the functions below.

Define the functions using the approach as specified (either as a function expression or declaration).

Be sure to number each function with a comment above it.

After each function, call it at least once and console.logthe results.

For example, here's the first function, our gift to you:*/

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}
console.log(maxOfTwoNumbers(3, 9));

/* 2.
...
Here are the functions:

(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.*/


/*
2. Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.*/

const maxOfThree = function(x, y, z) {
  let largest 
    if (x >= y) {
      largest = x;    
  } else if (y >= z){
    largest = y;
  } else {
    largest = z
  }
  return largest
}


  console.log(maxOfThree(5, 18, 10))

/*
3. Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.*/

function isCharAVowel(character) {
  const vowel = ["a", "e", "i", "o", "u", "y"]
  
  switch(character){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
      return true;
      break;
    default: 
      return false;
      break;
  }
}
console.log(isCharAVowel("z"))

/*
4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.*/


const sumArray = function (nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return sum;
}
console.log(sumArray([7, 5, 10]))

/*
5. Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.*/

function multiplyArray (nums) {
  let product = 1;
  for (let i = 0; i < nums.length; i++) {
    product = product * nums[i];
  }
  return product;
}

console.log(multiplyArray([2, 4, 5]))


/*
6. Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.*/


const numArgs = function (...args) {
  return arguments.length
}
console.log(numArgs (1, 2, 23))

/*
7. Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".*/

function reverseString (str) {
  let flippedStr = ""

  for (let i = str.length -1; i >= 0; i--) {
    flippedStr += str[i]
  }
  return flippedStr
}

console.log(reverseString('rockstar'))

/*
8. Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.*/

const longestStringInArray = (args) => {
  let longest = 0;
  args.forEach((str) => {
    if (str.length > longest) {
      longest = str.length;
    }
  });
  return longest
}

console.log(longestStringInArray(["Tony", "Apple", "Cat", "Superdupperfly"]))
/*
9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"]*/


function stringsLongerThan (names, num) {
  let keptStr = []
  names.forEach((str) => {
    if (str.length > num) {
      keptStr.push(str);
    }
  })
  return keptStr
}


console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3))
