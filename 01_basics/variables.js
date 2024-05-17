const accountId = 144
let accountEmail = "parthvaghela@gmail.com"
var accountPassword = "12345"
accountCity = "Ahmedabad"

//accountId = 2 not allowed to change

/*
    prefer not to use var
    because of issue in block scop and functional scope
*/

accountEmail = 'pa@pa.com'
accountPassword = "212121"
accountCity = "baroda"

console.log(accountId)
console.table([accountId,accountEmail,accountPassword,accountCity])