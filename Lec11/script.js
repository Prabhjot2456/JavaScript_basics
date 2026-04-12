// Sort() 
// const myarr =["Aditya", "Prabh", "Nikhal", "Milan", "Parth"];
// console.log(myarr.sort()); 
// console.log(myarr);   // sort changes the original array and it does not make new array


// const myarr2 = [100, 100000000, 11111111, 2, 3, 4, 5, 9990909];
// console.log(myarr2.sort());    

// for sorting numbers
// ascending order --> a-b
// descending order --> b-a


// const myarr2 = [100, 100000000, 11111111, 2, 3, 4, 5, 9990909];
// function example(){
//     console.log(arguments);
//     console.log("Hello");
// }
// console.log(myarr2.sort(example));


// const myarr2 = [100, 100000000, 11111111, 2, 3, 4, 5, 9990909];
// function example(a, b){
//     return a - b;
// }
// console.log(myarr2.sort(example));


// filter

// const chai = ["doodh", "patti", "paani", "sugar", "milk", "elaichi"];
// function example(elements){
//     return true;
// }
// const a = chai.filter(example);
// console.log(a);


// const chai = ["doodh", "patti", "paani", "sugar", "milk", "elaichi"];
// function example(elements){
//     // if(elements === "paani" || elements === "milk" || elements === "sugar") return true;
//     return elements === "paani" || elements === "milk" || elements === "sugar";
// }
// const a = chai.filter(example);
// console.log(a);

// const a = chai.filter((elements) => elements === "paani" || elements === "milk" || elements === "sugar");
// console.log(a);


// reduce
// accumulator : it is a variable that stores the accumulated value of the function that we are applying to the array elements. 
// const myarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function example(){
//     console.log(arguments);

// }
// //console.log(myarr.reduce(example)); 
// console.log(myarr.reduce(example, 0)); // it will initialize the accumulator with 0


// const numbers = [1, 2, 3, 4];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 10
