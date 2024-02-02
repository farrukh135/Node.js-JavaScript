const user = {
    username: "Farrukh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}                                           // We can use "this" in Object Blocks only

user.welcomeMessage()
user.username = "HFA"
user.welcomeMessage()
console.log(this);

function chai(){
    let username = "Farrukh"
    console.log(this.username);
}
chai()                                        // We can not use "this" in Function

const chai1 = function () {
    let username = "Farrukh"
    console.log(this.username);
}                                         // We can not use "this" in Function Declaration

const chai2 =  () => {                   // Arrow Function
    let username = "Farrukh"
    console.log(this);
}
chai1()                                 // We can not use "this" in Arrow Function

const addTwo1 = (num1, num2) => {
    return num1 + num2
}

// // const addTwo = (num1, num2) =>  num1 + num2                 // We can use Arrow funtion like this

// // const addTwo = (num1, num2) => ( num1 + num2 )              // We can use Arrow funtion also like this

const addTwo2 = (num1, num2) => ({username: "Farrukh"})           // We can use Arrow funtion also like Object Block
console.log(addTwo2(3, 4)) 


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()