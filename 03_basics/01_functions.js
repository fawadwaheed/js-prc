// Functions in JavaScript are blocks of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).
// Functions are defined using the `function` keyword, followed by a name, parentheses, and curly braces.
// Functions can take parameters and return values.

// console.log("f");
// console.log("a");
// console.log("w");
// console.log("a");
// console.log("d");


function sayMyName(){
    console.log("f");
console.log("a");
console.log("w");
console.log("a");
console.log("d");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }


function addTwoNumbers(num1, num2){
    let result = num1 + num2;
    // console.log("fawad");
    // return result;
    return num1 + num2;
}

const result =  addTwoNumbers(3, 5);   

// console.log("result:",result);

function loginUserMassage (username = "ahmed"){
    if(!username){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMassage("fawad"));
// console.log(loginUserMassage("fawad"));



function calculateCartPrice(value1, value2, ...num1){
    return num1
}
// console.log(calculateCartPrice(300, 400, 500, 200));


const user = {
    uesrname: "fawad",
    price: 199, 
}

function handleObject(anyobject){
    console.log(`Username: ${anyobject.username}, Price: ${Object.price}}`);
}

// handleObject(user)
handleObject({
    username: "ahmed",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSeconvalue(getArray){
    return getArray[1];
}

// console.log(returnSeconvalue(myNewArray));
console.log(returnSeconvalue([200, 400, 100, 600]));