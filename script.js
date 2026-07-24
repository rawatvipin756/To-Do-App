let input=document.getElementById("taskInput");
let button=document.getElementById("addBtn");
let list=document.getElementById("taskList");

button.addEventListener("click",function () {
    let li=document.createElement("li");
    li.innerText=input.value;
    list.appendChild(li);
    input.value="";
});