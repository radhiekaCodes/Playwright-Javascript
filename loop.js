// Write a program to print only odd numbers between 1 to 20

// pseudocode 
// 1.initialise the variable
// 2.while condition is true that i<=20
// 3.Check if block variale is odd using formula i%2!==0 then odd 
// 4.Print the number 
// 5 increement the variable. 

function printOddNumbersUpto(num){

    let i =1

while(i<=num){
    if(i%2!==0){
    console.log(i)
    }
    i++
}
}

console.log("Print odd numbers")
printOddNumbersUpto(20)