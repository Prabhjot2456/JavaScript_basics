// delegation : technique where an event listener is attached to a parent element instead of individual child elements, and the event is handled based on the target element ie parent element

// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const ol = document.getElementById('ol');

// btn.addEventListener("click", () => {
//     const li = document.createElement("li");
//     li.textContent = input.value;

//     input.value = "";
//     ol.append(li);
// });

// ol.addEventListener("click", (event) => {
//     // console.log(event.target);     // to know which element is clicked
//     event.target.style.textDecoration = "line-through";   
// });



// const input = document.getElementById('input');
// const btn = document.getElementById('btn');
// const ol = document.getElementById('ol');

// const listHandler = () => {
//     const li = document.createElement("li");
//     li.textContent = input.value;

//     input.value = "";
//     ol.append(li);
// }
// input.addEventListener("keydown", (event) => {
//     if(event.key === "Enter"){
//         listHandler();
//     }
// });
// btn.addEventListener("click", listHandler);
// ol.addEventListener("click", (event) => {
//     ol.removeChild(event.target);
// });


//2 
const form = document.getElementById('form');

form.addEventListener("submit", (event) => {
    event.preventDefault();   // to prevent default behaviour of form which is to refresh the page
    
});