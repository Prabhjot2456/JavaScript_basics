// Functions :
// types:  function definition, function declaration, bigfatarrow function

// function declaration: hoisting can be used in this
// function greetings(){
//     console.log("Good Morning");
// }
// greetings();


//Parameters and arguments
// function greetings(name){                      // parameter
//     console.log(`Good morning ${name}`);
// }
// greetings("Prabhjot");                         // argument


// default argument
// function greetings(name = "User"){
//     console.log(`Good morning ${name}`);
// }
// greetings();


// function definition: It will give error if we try hoisting in the function
//reference data type
// var greetings = function(name = "User"){
//     console.log(`Good morning ${name}`);
// }
// greetings("Prabh");


// function greetings(name, message){
//     console.log(`Good morning ${name}, ${message}`);
//     return "Message printed succesfully"
// }
// greetings("Prabhjot", "How are you");
// console.log(greetings("Prabh", "How are you"));

// var greetings = function(name, message="How are you"){
//     console.log(`Good morning ${name}, ${message}`);
//     return "Message printed succesfully"
// }
// greetings("Prabh");
// console.log(greetings("Prabh"))


// Bigfatarrow function: similar to lambda function in python, can return in single line
// var greetings = (name = "User")=>{
//     console.log(`Good morning ${name}`);
// }
// greetings("Prabh");


// var greetings = (name = "User") => console.log(`Good morning ${name}`);
// greetings("Prabh");


// while hoisting in function declaration, we can call the function before its declaration but in function definition and bigfatarrow function, we cannot call the function before its declaration because it will give error.
// let, const give error = not initialization
// var gives error = greeting is not a function






// (function(){
//   console.log("Hii");})();
