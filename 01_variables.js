const accountId = 144553
let accountEmail = "biren@google.com"
var accountPassword = "1234"
accountCity = "Patan"
let accountState;

//accountId = 2; // not allowed

accountEmail = "hello@google.com";
accountPassword = "28";
accountCity  = "Ahmedabad";

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])