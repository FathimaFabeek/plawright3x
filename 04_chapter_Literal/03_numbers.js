//numeric separators
let million=1_000_000;
let binarysep=0b1010_0001_1000_0101;
let hexsep=0xA0_B0_C0;  
console.log("separator 1_000_000:", million);
console.log("separator 0b1010_0001_1000_0101:", binarysep);
console.log("separator 0xA0_B0_C0:", hexsep);
let Big1=1234567890123456789012345678901234567890n; // BigInt literal
let big2=BigInt(1234567890123456789012345678901234567890); // BigInt literal    
console.log("BigInt literal 1234567890123456789012345678901234567890n:", Big1); 
console.log("BigInt from string:", big2);
console.log("typeof BigInt literal:", typeof Big1);
