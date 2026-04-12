// scope implications

// var = function scope
// let = block scope


// {
//     // let a = 5;
//     // var a = 5;  // only this will work, because var is function scope and let is block scope
//     // const a = 5;
// }
// console.log(a);


// // var a = 5;
// // let a = 5;
// // const a = 5;
// {
//     console.log(a);
// }



// lexical scoping: 
// closures
// const a = 5;
// function example(){
//     // const a = 6;
//     console.log(a);
// }
// example();

// const a = 5;
// function example(){
//     // const a = 6;
//     function example2(){
//         // const a = 7;
//         console.log(a);
//     }
//     example2();
// }
// example();


// break and continue
// var a = 1;
// for(a = 1; a<=10; a++){
//     if(a == 5){
//         break;
//     }
//     console.log(a);
// }

// var a = 1;
// for(a = 1; a<=10; a++){
//     if(a == 5){
//         continue;
//     }
//     console.log(a);
// }

// var a = 1;
// for(a = 1; a<=10; a++){
//     if(a == 5){
//     } else{                  // also work in the same way
//     console.log(a);
//     }
// }


// switch case
// var a = 1;
// switch(a){
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid day")
//         break;
// }


// Call by reference and call by object
// var a = 5;
// var b =[1, 2, 3, 4, 5];
// function example(prim, ref){
//     prim = 6;
//     ref.pop();
// }
// example(a, b);
// console.log(a);
// console.log(b);


// var a = "Prabhjot"
// var b ={
//     name : "Prabhjot"
// }
// console.log("Before", a);
// console.log("Before", b);
// function example(prim, ref){
//     prim = "Singh";
//     ref.name = "Singh";
// }
// example(a, b);
// console.log("After", a);
// console.log("After", b);