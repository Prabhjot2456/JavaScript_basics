// DOM Overview: 

// console.log(window);  // window is a global object

// function greet() {
//     console.log("Hello World");
// }
// window.greet();



// var name = "Prabh";
// console.log(window.name);  // name is a property of window object

// console.log(window.name);   // it will still give prah because it stores the value in the window object



// console.log(window.document);    // OR
// console.log(document);          // document is also global object and it represents the HTML document that is loaded in the browser
// console.dir(document);


// document.body.style.backgroundColor = "lightblue"; //change background color of the body element 
// document.body.innerHTML = "Prabh";   // change the content of the body element to "Prabh"
// document.body.innerHTML = "<h1>Prabh</h1>";


// spread operator
// var a = [1, 2, 3, 4, 5];
// // var b = a;
// var b = [...a];         // it will create a new array by copying the elements of array 
// a.pop();
// console.log(b);    


// shallow copy : always copy from outer level, if there is any nested array or object then it will not copy that and it will point to the same reference in memory.    

// deep copy : it will copy all the levels of the array or object, it will create a new reference in memory for all the nested arrays or objects.


// var a = [1, 2, 3, 4, 5, [1, 2, 3]];    // shallow copy
// var b = [...a];   
// console.log(b);    


// var a = ["apple", "banana", "cherry", ["grape", "mango"]];
// var copyOfA = [...a];
// // a.pop();
// a[3].pop();   
// console.log(copyOfA);   



const myObj = {
    name: "Prabh",
    hobby:{
        hobby1:"sleeping",
    },
};
const copyOfMyObj = {...myObj};  
// myObj.name = "Prabhjot";
// console.log(copyOfMyObj); 
myObj.hobby.hobby1 = "eating";
console.log(copyOfMyObj);  