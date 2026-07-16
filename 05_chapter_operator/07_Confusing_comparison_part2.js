//null and undefined are two distinct types in JavaScript, but they are often confused with each other.
console.log(null==undefined); //true
console.log(null===undefined); //false
console.log(null==0); //false
console.log(null===0);
console.log(null>0); //false
console.log(null>=0); //true
console.log(null==0 || null>0); //false 