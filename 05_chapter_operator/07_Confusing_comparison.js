//rule of thumb
//When in doubt, use the strict comparison operator (===) 
// instead of the loose comparison operator (==).
console.log(""==0); //true
console.log(""===0); //false
console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(0==0); //true
console.log(0===0); //true
console.log("0"==0); //true
console.log("0"===0); //false
console.log(""=="0"); //false bcz "" is empty string with no characters, "0" with one character it has.
console.log(""==="0"); //false