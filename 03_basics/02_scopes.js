// var c = 300
let a = 300 
if(true){
    let a = 10
    const b = 20
   // console.log("INNER:", a);
    
}




// console.log(a);
// console.log(b);
// console.log(c);


function one(){
const username = "fawad"

function two (){
    const website = "fawad.com"
    console.log(username); 
}
// console.log(website);

    two();

}

// one();

if(true){
    const username = "fawad"
    if(username === "fawad"){
        const website = " fawad.com"
        //console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// ***************************************INTRESTING***************************************

console.log(addone(5));
 

function addone(num){
    return num + 1;
}


console.log(addTwo(5));

const addTwo = function(num){
    return num + 2; 
}

