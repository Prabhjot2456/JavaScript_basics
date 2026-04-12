// const input = prompt("Enter your age: ");
// if (input >= 18) {
//     // // document.body.innerHTML = "<h1>You are eligible to Drive</h1>";
//     document.body.textContent = "<h1>You are eligible to Drive</h1>";  // cannot display html tags
//     document.body.style.color = "blue";
// }
// else{
//     // document.body.innerHTML = "<h1>You are not eligible to Drive</h1>";
//     document.body.textContent = "<h1>You are not eligible to Drive</h1>";
//     document.body.style.color = "red";
// }

// 2nd method
// if (input >= 18) {
//     document.body.innerHTML = "<h1 id='prabh'>You are eligible to Drive</h1>";
//     document.getElementById("prabh").style.color = "blue";
// }
// else{
//     document.body.innerHTML = "<h1 id='prabh'>You are not eligible to Drive</h1>";
//     document.getElementById("prabh").style.color = "red";
// }



// query selector:
// const a = document.querySelector("h1");
// console.log(a);
// const b = document.querySelector("#milanLoda");
// console.log(b);

// const c = document.querySelectorAll("h1");
// console.log(c);
// for(var i=0; i<c.length; i++){
//     c[i].style.color = "red";
//     c[i].style.backgroundColor = "lightblue";
// }


setTimeout(() => {
    const input = prompt("Enter your age: ");

    if (input >= 18){
        console.log("You are eligible to Drive");
    }
    else{
        console.log("You are not eligible to Drive");
    }
}, 5000);