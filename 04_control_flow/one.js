// if

// const iUserLoggedIn = true
// const temprature = 30
// if (temprature === 30 ){
//     console.log("less thn 30");
// } else{
//     console.log("greater than 30");
// }

// console.log("executed");
//<, >, <=, >=, ==, ===, !=, !==

const score = 200

if (score > 100){
    var  power = "fly"
    // console.log(`user power: ${power}`);
    
}
//  console.log(`user power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"), console.log("test2");

// if(balance < 500){
//     console.log("balance is less than 500");
// } else if(balance < 750){
//     console.log("balance is less than 750");
// } else if(balance < 900){
//     console.log("balance is less than 900");
// } else{
//     console.log("balance is greater than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==3){
    console.log("Allow to buy  course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
    
}