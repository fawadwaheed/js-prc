// //  primitive

// // const { useImperativeHandle } = require("react");

// // 7 types: string, number, boolean, null, undefined, symbol, bigint

// const score = 100
// const scoreValue = 100.3

// const isloggedIn = false
// const outsideTempr = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// //console.log(id === anotherId);

// //const bigNumber = 321454356603164938011n 


// //  refrence(non-primitive)

// //  array, objects, functions

// const heros = ["ironman", "thor", "loki"]
// {
//     name: "fawad"
//     age: 18
// }

// const myFunction = function(){
//     //console.log("hellow world");
    
// }

// //console.log( typeof heros );


//*************************************STACK & HEAP******************************************************************* */


//        Stack(peimitive) & heap(non-primitive)

let myName = "fawad waheed"

let anothrName = myName
anothrName = "fadee"

//console.log(myName);
//console.log(anothrName);

let userOne = {
    email: "user@google.com",
    sadapay: "user@ybr"
}

let userTwo = userOne

userTwo.email = "fbutt7320@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);


 