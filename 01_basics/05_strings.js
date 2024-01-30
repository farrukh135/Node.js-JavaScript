const name = "farrukh"
const repoCount = 50

// console.log(name + repoCount + " Value"); AVOID IT

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('farrukh-hc-com')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   farrukh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://farrukh.com/farrukh%20ali"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));