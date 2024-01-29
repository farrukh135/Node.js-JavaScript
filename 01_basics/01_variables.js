const accountId = 212322
let accountEmail = "farrukh@google.com"
var accountPassword = "170404"
accountCity = "Karachi"
let accountState;

// accountId = 2 // not allowed


accountEmail = "fa@fa.com"
accountPassword = "041704"
accountCity = "Hyderabad"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])