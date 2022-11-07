// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

// const cohort = "Golf 2022"
// console.log(cohort.split(""))

// a) Your answer: "G o l f  2 0 2 2"
// b) Verify and explain: .split method actually converts a string to an array, while the "" is telling the built to add a comma between each value/index or element.
// [
//   'G', 'o', 'l',
//   'f', ' ', '2',
//   '0', '2', '2'
// ]


// --------------------2) What will this log?

// const greeter = (name) => {
//   `Hello, ${name}!`
// }
// console.log(greeter("LEARN Student"))

// a) Your answer: `Hello, LEARN student`
// b) Verify and explain: Returned undefined after doing some testing i realized the function was missing a return, also the fact that terminal told me it was undefined points me in that direction. All functions must have a return

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: [8, 10, 12, 14, 16]
// b) Verify and explain: higher order function .map method works on every index of the array, so the values at those indexes are then multiplied by two as indicated in the return statement.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: Should return only the odd numbers as a new array. [11, 13, 15]
// b) Verify and explain: Output on terminal matches my prediction. It returns a new array with a different set of values and indexes because .filter method returns a new array as long as a certain condition is meant and deemed true.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: It returns JavaScript because we accessing the object via dot notation, which allows us to access the key languages and the given index value of zero tells me it will pull what ever element is in the zero index of the array that is assigned to the key languages.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("george")
console.log(learnStudent)

// a) Your answer: oooooooohhhhhh. Ooof, I think it will return what ever key contains a string data type. 
// b) Verify and explain: We are working with a class, from what I can tell by messing with the code and trying to T/S is that constructor is calling for a value, and in this case it has been set as a parameter name. The new variable learnStudent is being assigned a new instance of the class, with the value being inputted as "George" for the this.student. The constructor is referencing name so anything put in the variable learnStudent will be console logged. 

//Learn { student: 'George', cohort: 'Foxtrot', year: 2022 }
