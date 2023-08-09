// let name = prompt("Enter Your Name: ");
// let age = prompt("Enter Your Age: ");

// // console.log("Welcome",name,"Your age is",age);
// console.log(`Welcome ${name}!
// Your Age is ${age}`)

// let num1 = prompt("Enter num1: ");
// let num2 = prompt("Enter num2: ");
// let num3 = prompt("Enter num3: ");

// console.log(`Numbers are: num1=${num1} num2=${num2} num3=${num3}`)
// if(num1 > num2 && num1 > num3){
//     console.log("Greater num is " + num1);
// } else if(num2 > num1 && num2 > num3){
//     console.log("Greater num is " + num2);
// }else{
//     console.log("Greater num is " + num3);
// }

let num1 = prompt("Enter num1: ");
let num2 = prompt("Enter num2: ");

console.log(`Num1 is ${num1} and num2 is ${num2}`);
// if(num1[num1.length-1] === num2[num2.length-1]){
//     alert("Yes Same digit!");
// }else{
//     alert("Not Same!");
// }

if(num1%10 === num2%10){
    alert("Yes Same digit!");
}else{
    alert("Not Same!");
}