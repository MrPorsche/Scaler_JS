// Loops are the statements that we can use to control a flow of the program and to do some repetative tasks.


// for loop

/* var a = '*'

for (var i=0; i<5; i++) {
    console.log(a)
} */

// You have an Array and you want to square each element of that array
/*
var num = [2,3,4,5,6,7,8]

var squaresArr = [] //An empty array
for(var i = 0; i<num.length; i++) {
    squaresArr.push (num[i]*num[i])

}

console.log(squaresArr);
*/
// While loop evaluates the condition inside the parenthesis ().
// If the condition evaluates to true, the code inside the while loop is executed.
// The condition is evaluated again.
// This process continues until the condition is false.
// When the condition evaluates to false, the loop stops.

// printing 1 - 10 using while loop

/*
var i = 1
var n = 10

while (i<=10) {
    console.log(i)
    i++
}
*/

// Do while loop

/*
var i = 11
var n = 10

do {
    console.log(i)
    i++
} while (i<=n)
*/


// for in loop
// In JavaScript, the for-in loop allows you to loop through the properties of an object.
// The statement of code found within the loop body will be executed once for each property of the object.

/*
var myColors = {
    primary : "White",
    secondary : "Gray",
    tertiary : "Black"
};


for(var color in myColors) {
    console.log(color + ' -> ' +myColors[color])
}

var colors = ["White","Dark","Sky Blue","Tomato"]

for (var color in colors) {
    console.log(color + ' -> ' +colors[color])

}

*/

// for of loop
// The for of statement creates a loop iterating over iterable objects,
// including: built-in String, Arra, array-like objects like NodeList and also map and set

/*
var marks = [59, 91, 75, 92]

for(var mark of marks){
    mark = mark+5
    console.log(mark)
}
*/
/*
// entries method for index values

let colors = ["White","Dark","Black"] 

for(var [index,color] of colors.entries()) {
    console.log(index+'->'+color)
}

*/

// String

/*
var str = 'Scaler'

for(var c of str){
    console.log(c)
}

*/

let a = 100; for(let i = 1 ; i <= a ; i++){ if( i%2 != 0){ console.log(i); } }
