// LOOPS in javaScript :
// Loops are used to repeat a block of code a certain number of times.
// There are three types of loops in javascript:
// 1. for loop
// 2. while loop
// 3. do while loop

// for loop :
// For loop is used when the user knows how many times the loop needs to be run to get the desired output.
// syntax : for (initialisation; condition; update) { }
// Example :
// Program to print numbers form 0 to 10 .
for (let i=0; i<10; i++) {
    console.log(i);
}

// 2nd example :
// Program to print even numbers from 0 to 10.
for (let i=0; i<10; i++) {
    if (i%2==0) {
        console.log(i);
    }
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
// While Loop :
// While loop is used when the user doesn't know how many times the loop needs to be run to get the desired output.
// syntax : while (condition) { }
// Example :
// Program to print numbers from 0 to 10 .
let i=0;   // need to declare a variable to increment it's value (let is use 'mutable')
while (i<10) {
    console.log(i);
    i++;   // increase the value of i by 1 each time the loop runs.
}

// 2nd example :
// Program to print even numbers from 0 to 10.
let j=0;   // need to declare a variable to increment it's value (let is use 'mutable')
while (j<10) {
    if (j%2==0) {
        console.log(j);
    }
    j++;   // increase the value of j by 1 each time the loop runs.
}

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
// Do While Loop :
// Do while loop is used when the user doesn't know how many times the loop needs to be run to get the desired output.
// syntax : do { } while (condition);
// Example :
// Program to print numbers from 0 to 10 .
let k=0;   // need to declare a variable to increment it's value (let is use 'mutable')
do {
    console.log(k);
    k++;   // increase the value of k by 1 each time the loop runs.
} while (k<10);

// 2nd example:
// Program to print even numbers from 0 to 10.
let l=0;   // need to declare a variable to increment it's value (let is use 'mutable')
do {
    if (l%2==0) {
        console.log(l);
    }
    l++;   // increase the value of l by 1 each time the loop runs.
} while (l<10);