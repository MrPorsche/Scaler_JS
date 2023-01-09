//Array provides you an ordered collection of data

var arr = [12, 'Dodge' , true , 12.3]


// onsole.log(arr)

// accesing the elements

var a = arr[1]

// console.log(arr[3])

//replacing elements of an array by using index
arr[1] = 'Porsche'

// console.log(arr)

// console.log('The length of an array is ' , arr.length)

// inbuilt js array methods

var arr2 = [12, 14, 56, 57]


// Pop method
// Pop method removes last element of an array
var c = arr2.pop()
console.log(c)

console.log('This is a popped array method', arr2)

// Push Method
// Push method adds a value at the end of an array.

arr2.push(100)

console.log('This is a push array method', arr2)

// shift method
// Shift method removes a starting element of an array

var d = arr2.shift()
console.log(d)

console.log('This is a Shift method', arr2)

// unshift method
// Unshift method adds a value at the start of an array.

arr2.unshift(99)

console.log('This is an Unshift method', arr2)