const name = "parth"
const repoCount = 50

// console.log(name + repoCount + " value")
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

let gameName = new String('parth-bv')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'))

const newString = gameName.substring(0,4)
console.log(newString);

const anotheString = gameName.slice(-7, 4)
console.log(anotheString)

const newStringOne = "   Parth   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url ="https://parth.com/parth%20vaghela"
console.log(url.replace('%20','-'));
console.log(url.includes('parth'));
console.log(gameName.split('-'));


