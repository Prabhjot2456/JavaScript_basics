// Recursion: first in last execution
// funtion is excuted in stack
// callback function

// function countdown(num){
//     if(num == 0){            // breaking condition of recursion
//         console.log("Happy new year");
//     }    
//     else{
//         console.log(num);
//         countdown(num-1);
//     }
// }
// countdown(5);


// First in last execution
// function countdown(num){
//     if(num == 0){            
//         console.log("Happy new year");
//     }    
//     else{
//         countdown(num-1);
//         console.log(num);  // this will also go to blocking window
//     }
// }
// countdown(5);
// console.log("Hello")   //it goes in the blocking window after the function call in previous line 



// write a function which will take two argument power and base solve the particular example with the help of recursion
// function exponent(power, base){
//     if(power == 0){
//         return 1;
//     }
//     else if(power == 1){
//         return base;
//     }
//     else{
//         return base*exponent(power-1, base);
//     }
// }
// console.log(exponent(4, 2));


// function fact(num){
//     if(num == 0){
//         return 1;
//     }
//     else if(num == 1){
//         return 1;
//     }
//     else{
//         return num*fact(num-1);
//     }
// }
// console.log(fact(5));