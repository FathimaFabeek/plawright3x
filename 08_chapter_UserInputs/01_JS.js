let num=prompt("Enter a number :");
num=number(num);// CONVERTING STRING TO NUMBER 
if(num%2==0)
{
    console.log(num + " is even");
}
else
{
    console.log(num + " is odd");
}
// it will not work becz prompt is a nodejs function.