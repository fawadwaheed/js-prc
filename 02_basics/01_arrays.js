// ***********************************ARRAYS***********************************
// Arrays are used to store multiple values in a single variable.
// They can hold items of any type, including numbers, strings, and even other arrays.

const myArr = [0, 1, 2, 3, 4, 5,];
const myHeros = ["tonystark", "brucewayene", "peterparker", "thor", "hulk"];

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArra[1]);

//********************************ARRAY METHODS*******************************************************

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.unshift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()


// console.log(myArr);
// console.log( typeof newArr);


//  slice and splice methods

console.log("A ", myArr);

const myn1 =myArr.slice(1, 3);
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3);
console.log(myn2);