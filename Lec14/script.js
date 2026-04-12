// asynchornous programming 
// Timers : 

// setTimeout(() => {}, 5000)  // callBack function executes the function after 5 seconds
// setTimeout(() => {
//     // console.log("Hello World")
//     document.body.style.backgroundColor = "red";
//     document.body.innerHTML = "<h1>Hello World</h1>";
// }, 4000)


// setTimeout(() => {
//     console.log("Hello from timeout");
// }, 0)
// for(let i=0; i<10000; i++) {
//     console.log("Hello from loop");       // this will execute first 
// } 
// console.log("Hello from outside"); 



// setInterval(() => {
//     console.log("Hello!!");
// }, 2000)  // callBack function executes the function every 2 seconds


// setTimeout(() => {
//     document.body.style.backgroundColor = "red";
//     setTimeout(() => {
//     document.body.style.backgroundColor = "blue";
//         setTimeout(() => {
//         document.body.style.backgroundColor = "green";
//             setTimeout(() => {
//             document.body.style.backgroundColor = "yellow";
//                 setTimeout(() => {
//                 document.body.style.backgroundColor = "lavender";
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)



// alert("Hello!!");

// const a = confirm("Are you sure you want to delete this file?"); 
// console.log(a);  

// const b = prompt("What is your name?"); 
// console.log(b);  


// Destructuring : 
// const a = ["apple", "banana", "cherry"];
// const [fruit1, fruit2, fruit3] = a;
// console.log(fruit1); 

// object destructuring :
const myobj = {
    name: "Prabh",
    city: "Ropar",
    age: 18
}
const {name, city, age} = myobj;
console.log(name);
