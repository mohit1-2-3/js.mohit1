const name="mohit";
const repo=50;


console.log(name + repo + "value");
console.log(`hello my nane is ${name} and my repo count is ${repo}`);

console.log("hello");

const gameName= new String('mohit')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString= gameName.substring(0,4);
console.log(newString);

const anotherString=gameName.slice(-2, 4)
console.log(anotherString);

const newStringOne="  mohit   "

console.log(newStringOne);
console.log(newStringOne.trim());

