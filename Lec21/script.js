const a = document.getElementById("ui");
// a.onkeydown = () => {
//     // console.log("Prabh");
//     // console.log(a.value);
//     document.body.style.backgroundColor = a.value;
// }

// a.onfocus = (e) => {
//     // console.log("Focused");
//     a.style.border = "2px solid red";
// }

// a.onkeydown = (event) => {
//     // console.log(event);

//     // console.log(a == event.target); // true
//     document.body.style.backgroundColor = event.target.value;
// }



// 2 

// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//     // console.log("Button clicked");
//     document.body.style.backgroundColor = "cyan";
// });




// 3

// document.body.addEventListener("keydown", (event) =>{
//     // console.log("Key down");

//     const h1 = document.createElement("h1");
//     h1.innerText += event.key;
//     document.body.append(h1);
// });




// 4 

const input = document.getElementById("ui");
const btn = document.getElementById("btn");
const ol = document.getElementById("ol");

btn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.addEventListener("click", () => {
        // li.style.textDecoration = "line-through";
        li.style.display = "none";
    });
    li.textContent = input.value;
    input.value = "";
    ol.appendChild(li);
});