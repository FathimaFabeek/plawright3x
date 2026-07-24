let a=10;
console.log(a);
for(let a=10; a<100000; a++){
    console.log(a);
    badcodeFn();
    function badcodeFn(){
        console.log("This is a bad code function");
    }


}