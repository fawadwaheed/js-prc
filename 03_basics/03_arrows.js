const user = {
    username: "fawad",
    price: 99,

    wellcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}

// user.wellcomeMessage();
// user.username = "ahmed";
// user.wellcomeMessage();

// console.log(this);

// function chayi(){
//     let username = "fawad";
//     console.log(this.username);
    
// }

// chayi()

// const chayi = function(){
//     let username = "fawad";
//     console.log(this.username);
// }

const chayi = () =>{
    let username = "fawad";
    console.log(this);
}


// chayi()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }

// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) =>  num1 + num2;

const addTwo = (num1, num2) => {(username = "fawad")};

console.log(addTwo(3, 4));


// const myArray = [2, 5, 3, 7, 8]s

// myArray.forEach()
