const myNums = [1, 2, 3]

const myTotal1 = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal1);

const myTotal2 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal2);


const shoppingCart = [
    {
        itemName: "JavaScript Course",
        price: 2999
    },
    {
        itemName: "Python Course",
        price: 999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science Course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => {
    console.log(`Accumulator: ${acc} and Item's Price: ${item.price}`);
    return acc + item.price;
}, 0);

console.log("The Total Price is:", priceToPay);