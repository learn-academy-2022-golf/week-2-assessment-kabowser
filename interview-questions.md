# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: My knowledge of a parameter is that it is a placeholer for a value that would be inputted buy let's say a user, while an argument is logic to be performed within a function.

Researched answer: When dealing with higher order functions, an argument can also be a function itself. I think it could be easier to explain if we look at the example below. In this instance the parameter is value, the computer doesn't care what data is there, it is more useful to communicate to other developers what is there i.e. it is a place holder. It could represent anything that a user presents or provides. The arguement can be thought of as the information that is being passed to a function invocation! So in the below example multiplier is the arguement. Also, the arguement is the values that will take the place of the parameter. Arguements are often presented as variables as well.

const myArray = [5, 3, 2, 9, 8]

const multiplier = myArray.map((value) => value * 3)

console.log(multiplier)
// output: [15, 9, 6, 27, 24]

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The built in method .map() takes in 3 predefined paraemeters. I'm fairly certain that the order of these parameters are important as well. However, only one parameter is required! That parameter would be the value. These 3 parameters are represented like this: .map(value, index , array?)

Researched answer: So .map() is an example of a higher order function. The three parameters are value, index, array. 

3. What is the difference between map and filter?

Your answer: I can tell you that both are high order functions, .map() will iterate through every value and return the same length array. While, .filter() is what it sounds like, it will filter through the arrays and create a new length array depending on whether or not the values are true/ truthy. So I believe this also means the .filter would need sometype of argument to compare the values to.

Researched answer: .map() changes or goes through each value of an array and will return an array of the same length. Only the values are changed, that's it. Some values can stay the same. But! still the array length doesn't change. .filter requires some type of logic to be done, .filter will iterate through each array and evaluate the value to some sort of argument that should result in a true value. Filter involves a condition to be met and an evaluation.

4. What is iteration?

Your answer: A process that repeats itself until a certain condition is met or satisfied. For loops are a great tool for iteration.

Researched answer: Specifically as it pertains to coding/ developing is that a code block is ran or performed by the computer until a predefined condition is met. Or not met and in this case the iterations would just keep going because the condition is evaluating has not been defined.

5. What is the difference between a class and an object?

Your answer: A class contains objects and i believe they also serve as a blueprint for objects. Objects are a composite data type that consists of pair values, one being key(symbol data type): value(any primitive data type). Objects also serve as way to access information via a certain pathway.

Researched answer: It is true that objects consist of key: value pairs. What's interesting about objects is that they can contain static information. Static being the values stay the same. Also contain actions, in the form of methods! One great way to tell the difference between objects and classes is that objects are assigned one of the variable declerations, usually const. While classes are special and unique they are identified and assigned class. Both contain information in curly brackets. Classes contain data and behavior while also maintaining their own local scope.

6. STRETCH: What is hoisting in JavaScript?

Your answer: Maybe it is a way of being able to pull or access information outside of its scope? 

Researched answer:
Process of moving information prior to execution of code blocks. There are three references of hoisting. Being able to use the value of a variable before the code has been exectuted in javscript. (value hoisting)

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. User stories: What a software is or does based on lamens terms or a friendly way for the user to interprit what it is.

2. Spread operator: Allows an array to have more values based on iteraton if the... yeah

3. React: React is a javascript library that came out in 2012 by facebook which allows us to create front end development/ user interfaces. I think it is also a good way/ technique to compartmentalize code

4. React props: Allows data to be passed from one component to another. 

5. DOM events: stands for Document Object Model. it's the visual representation of all the code, at least the code we want the users to be able to visualize.
