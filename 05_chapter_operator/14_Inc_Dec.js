let a=10;
console.log(++a + a + a++);
console.log(a);
//++a=11, then a=11
//a++=11 first assign the value 11 then increments it as 12 on a(a=12 and a++=11)
//so 11+11+11=33 last value assign to a is 12
let i=1;
let result=i++ + ++i;
console.log(result,i);//i++=1 then increments by 1 then i=2;
//++i=3 then value assign to i=3, so 1+3=4 and i=3
let x=10;
console.log(++x + ++x);
console.log(x);
//++x=11, first increment as 11 then x=11
//++x again =12 then x=12 so 11+12=23 and x=12
let a1=34;
let R=a1++;
console.log(R);
console.log(a1);