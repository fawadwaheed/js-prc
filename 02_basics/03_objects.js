// SINGLETON PATTERN
// A singleton is a design pattern that restricts a class to a single instance and provides a global point of access to it.

//object literal syntax

const mySum = Symbol("myKey1")

const Jsuser = {
    name: "fawad",
    "full-name": "fawad waheed",
    mySum: "myKey1",
    age: 18,
    location: "Pakistan",
    email: "fbutt@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "saturday"],

}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full-name"]);
// console.log( typeof Jsuser.mySum);

Jsuser.email = "fbutt7320@gmail.com"
// Object.freeze(Jsuser)
Jsuser.email = "fbutt73200@gmail.com"
console.log(Jsuser);

Jsuser.greetings = function () {
    console.log("hello Jsuser");
}
Jsuser.greetingsTwo = function () {
    console.log('hello Jsuser, ${this.name}');
}
console.log(Jsuser.greetings());
console.log(Jsuser.greetingsTwo());

