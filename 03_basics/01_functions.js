function sayMyName(){
    console.log("F");
    console.log("A");
    console.log("R");
    console.log("R");
    console.log("R");
    console.log("U");
    console.log("K");
    console.log("H");
}

sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);

function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage("Farrukh"))


function calculateCartPrice(val1, val2, ...num1){ //Rest Operator
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "Farrukh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user)
handleObject({
    username: "Ali",
    price: 399
})

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); 