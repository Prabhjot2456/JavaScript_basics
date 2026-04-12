// Loops :
// Initialization, Condition, Iteration

// While :

// var a = 0;
// while(a<10){
//     console.log("Hello");
// }

// var a = 0;
// var b = a++;
// console.log(b);
// console.log(a);

// var a = 0;
// while (a<10){
//     console.log("Hello");
//     a++;
// }


// Do While : if condition is false then loop will run once

// var a = 6;
// do{
//     console.log("Hello");
//     a++;
// }while(a<=5);

// var a = 0;
// do{
//     console.log("Hello");
//     a++;
// }while(a<=5);


// For : 

// for (var i=0; i<5; i++ ){
//     console.log("Hello");
// }

// var arr = [1, 2, 3, 4, 5]
// for (var i=0; i <= arr.length-1; i++ ){
//     console.log(arr[i]);
// }

// var a =0;
// while(a<=arr.length-1){
//     console.log(arr[a]);
//     a++;
// }

// var a =0;
// do{
//     console.log(arr[a]);
//     a++;
// }while(a<=arr.length-1);


// For of : it gives element directly
// var arr = [1, 2, 3, 4, 5]
// for(name1 of arr){                //name1 is identifier
//     console.log(name1);
// }


// For in : it gives index
// var arr = [1, 2, 3, 4, 5]
// for(name1 in arr){                
//     console.log(arr[name1]);
// }


// For each 
// myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function example(element, index){
//     // console.log("Hello");
//     myarr[index] = element + 1;
// }
// myarr.forEach(example);

// myarr.forEach((element, index)=>myarr[index] = element + 1);
// console.log(myarr);






// var arr = [1, 2, 3, 4, 5]
// arr.forEach((item)=>{
// console.log(item);
// })


// var arr = [1, 2, 3, 4, 5]
// arr.map((item)=>{
// console.log(item);
// })


// Difference between forEach and map : forEach does not return anything but map returns new array with the help of callback function 

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((item)=>item*2);
// console.log(newArr);             // returns new array

// const newArr2 = arr.forEach((item)=>item*3);
// console.log(newArr2);            // returns undefined 
