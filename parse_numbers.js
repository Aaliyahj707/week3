//FOUR INPUTS
var a = " 101.1 ";
var b = "55";
var c = "402 Stevens";
var d = "Number 5";

//FOUR FUNCTIONS //parseInt() //parseFloat() //Number() //Unary +
console.log("\n===parseInt(n)")
console.log(parseInt(a)) //101
console.log(parseInt(b)) //55
console.log(parseInt(c)) //402
console.log(parseInt(d)) //NaN (NOT A NUMBER)

console.log("\n===parseFloat(n)")
console.log(parseFloat(a)) //101.1
console.log(parseFloat(b)) //55
console.log(parseFloat(c)) //402
console.log(parseFloat(d)) //NaN (NOT A NUMBER)

console.log("\n===Number(n)")
console.log(Number(a)) //101.1
console.log(Number(b)) //55
console.log(Number(c)) //Nan (NOT A NUMBER)
console.log(Number(d)) //NaN (NOT A NUMBER)

console.log("Unary +")
console.log(+a) //101.1
console.log(+b) //55
console.log(+c) //Nan (NOT A NUMBER)
console.log(+d) //NaN (NOT A NUMBER)