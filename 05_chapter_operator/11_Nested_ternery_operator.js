//multiple condition- nested ternery operator
let age=26;
let is_pramod_goingto_goa=age>=18 ?(age>26 ? "Drink":"no"):"false";
console.log(is_pramod_goingto_goa);
console.log(`is promod drink? ${is_pramod_goingto_goa}`);
//IQ
let status_code=404;
let category=
status_code<300 ? "success":
status_code<400 ? "redirect":
status_code<500 ? "client error":"server error";
console.log(`Status Code: ${status_code}, Category: ${category}`);
//IQ
let temp=35;
let feel =temp>=40 ?"very hot" :
temp>=30 ?"hot" :
temp>=20 ?"warm" :
temp>=10 ?"cool" :" cold";
console.log(`Temperature: ${temp}, Feel: ${feel}`);