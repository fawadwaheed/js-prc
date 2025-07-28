const userEmail = []

if (userEmail) {
  console.log("Got user email");
} else{
    console.log("Please provide user email"); 
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values 
// "0", 'false', "", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObject = {}

if (Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
    
}

// nullish Coalescing operator (??): null undefined


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 10


console.log(val1);

// trinity operator (?:)

// condition ? true : false

const iceTearPrice = 100;
iceTearPrice >= 80 ? console.log("less thn 80") : console.log("greater than 80 ");

