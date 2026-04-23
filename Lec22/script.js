// bubbling = same event on parent and child element

// 1

// const div = document.getElementById('div');
// const btn = document.getElementById('btn');

// div.addEventListener("click", () => {
//     console.log("div clicked");
// })

// btn.addEventListener("click", () => {
//     console.log("button clicked");
// })
// when i will click btn then div will autmatically be clicked because of bubbling



// div.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Prabh";
//     document.body.append(h1);
// })

// btn.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Parth";
//     document.body.append(h1);
// })



// to stop bubbling we can use event.stopPropagation()

// div.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Prabh";
//     document.body.appendChild(h1);
// })

// btn.addEventListener("click", (event) => {
//     event.stopPropagation();        // Stop the event from bubbling up to the parent div
//     const h1 = document.createElement("h1");
//     h1.innerText = "Parth";
//     document.body.appendChild(h1);
// })



// capturing = opposite of bubbling
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// parent.addEventListener("click", () => {
//     const h1 = document.createElement("h1");
//     h1.innerText = "Parent";
//     document.body.appendChild(h1);
// }, true);     // true means capturing

// child.addEventListener("click", (event) => {
//     event.stopPropagation();        
//     const h1 = document.createElement("h1");
//     h1.innerText = "Child";
//     document.body.appendChild(h1);
// });


//2

// prevent default = to stop default behaviour of element
// const form = document.getElementById("form");
// console.dir(form);
// form.onsubmit = (event) => {
//     event.preventDefault();
//     console.log("Prabh");
// }


const form = document.getElementById("form");
console.dir(form);
form.onsubmit = (event) => {
    event.preventDefault();
    console.log("Submit");
    if(event.target[0].value == ""){
        const h1 = document.createElement("h1");
        h1.innerText = "Please fill the name";
        document.body.appendChild(h1);
        setTimeout(() =>{
            h1.remove();    
        },4000)
    }
}
