    // ASSESSMENT 2: Coding Practical Questions with Jest

//const { array } = require("yargs")

// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
// describe("multByThree", () => {
//     it("takes in an array of numbers and returns an array with all the numbers multiplied by 3.", () => {
//         const numbersArray1 = [6, 7, 8, 9, 10]
//         const numbers1Output = [18, 21, 24, 27, 30]
//         const numbersArray2 = [24, 27, 30, 33, 36]
//         const numbers2Output = [72, 81, 90, 99, 108]
//         expect(multByThree(numbersArray1)).toEqual (numbers1Output)
//         expect(multByThree(numbersArray2)).toEqual(numbers2Output)
//     })
// })


//const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
//const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
//Pseudocode
// Create a function called multBythree that takes in an array
// one parameter - array
//Iterate over array using .map so that we can modify each value in the array
//return mapped array
// const multByThree = (array) => {
//     return array.map(value => value * 3)
//}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("evenlyDivByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        const object1Output = object1 %3 === 0
        const object2 = { number: 0 }
        const object2Output = object2 %3 === 0
        const object3 = { number: -7 }
        const object3Output = object3 %3 === 0
        expect(evenlyDivByThree(object1)).toEqual(object1Output)
        expect(evenlyDivByThree(object2)).toEqual(object2Output)
        expect(evenlyDivByThree(object3)).toEqual(object3Output)
    })
})

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// b) Create the function that makes the test pass.
//pseudocode:
// Create a function named evenlyDivByThree
//input: object 1, object 2, object 3
//output: whether number value in objects are evenly divisible by three, meaning no remainder.
//will need 3 return statements
// conditionals to do the math and compare to input values.
//return string that states if it is evenly divisible by three.
const evenlyDivByThree = () => {
    if (object1 === 0) {
        return "15 is divisible by three"
    } else if (object2 === 0) {
        return "0 is divisible by three"
    } else if (object3 === 0){
        return "-7 is not divisible by three"
    } else {
        return "error"
    }
}
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

    describe("allCaps", () => {
        it("takes in an array of words and returns an array with all the first letters of each words capitalized.", () => {
           expect (toCaps.toEqual(randomNouns1))
        })
    })
const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.
//Pseudocode:
//input: An array
//output: Returns same length array, but the first letter of each word is capatalized.
//will need to use a built in method that will work on an array.

const toCaps = (array) => {
    return array.map
    }
}

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel.", () => {
        const vowelTester1 = "learn"
        const vowelTester1Output = 1
        const vowelTester2 = "academy"
        const vowelTester2Output = 0
        const vowelTester3 = "challenges"
        const vowelTester3Output = 2
        expect () 
        expect ()
        expect ()
    })
})

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.
//Pseudocode
// Make function called firstVowelIndex
//input: "learn", "academy", "challenges"
//output: 1, 0, 2
//Built in method that is specific to strings to identify first vowel in word and return that values index to us.

const firstVowelIndex = () => {}