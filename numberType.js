// Learning Objective:
// Learn to categorize a number as positive, negative, or zero using conditional statements in JavaScript.
// Assignment Details:
// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a
// corresponding string indicating the type.

function identifyNumberType(num) {

    if (num === 0) {

        return `The given number ${num} is Neutral.`
    }
    else if (num < 0) {
        return `The given number ${num} is Negative.`
    }
    else {


        return `The given number ${num} is Positive.`
    }
}


console.log(identifyNumberType(10))

console.log(identifyNumberType(0))

console.log(identifyNumberType(-10))



