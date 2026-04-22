const input = document.getElementById("ui");
const button = document.getElementById("btn");
const ol = document.getElementById("ol");

button.onclick = function(){
    const li = document.createElement("li");
    li.onclick = function(){
        li.style.textDecoration = "line-through";
    }


    li.textContent = input.value;
    input.value = "";
    ol.append(li);
}