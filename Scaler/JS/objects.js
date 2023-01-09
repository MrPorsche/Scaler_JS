// in JavaScript objects are in key value pair

var person = {
        firstName: "Ilyas",
        lastName: "Sayyed",
        age: 26,
        carOwns: false
};


// console.log(person)


// accessing values

// dot notation

/* console.log(person.age) */

// bracket notation

// console.log(person['firstName'])

var ironMan = {
    firstName: "Tony",
    lastName: "Stark",
    age: 38,
    avengers : ["Captain America","Black Widow","Hulk","Thor","&","Hawkaye"],
    isAvenger : true,
    address : {
        state:'New York',
        city: {
            name:'brooklyn',
            zip: 12345
        }
    }
}

// console.log(ironMan.avengers[2])
// console.log(ironMan.address.city.name)

// updating value

ironMan.isAvenger = false

// console.log(ironMan)

// adding additional value

ironMan.movies = ['Iron Man','Iron Man 2','Iron Man 3']

// console.log(ironMan)

// deleting value

delete ironMan.address

console.log(ironMan)