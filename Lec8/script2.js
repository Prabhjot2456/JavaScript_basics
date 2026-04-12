// function greeting(name){
//     console.log(arguments);
//     console.log("Goog morning ", name)
// }
// greeting("Prabh")

// arguments is an array like object which is available in every function and it contains all the arguments passed to that function. It is not a real array but it has length property and can be accessed using index.
// argument is not an array 


function greeting(name){
    if(arguments.length == 0){
        throw new Error("argument missing");
    } 
    else{
        console.log("Good morning ", name)
    }
}
greeting();