let input=document.getElementById("taskInput");
let button=document.getElementById("addBtn");
let list=document.getElementById("taskList");

button.addEventListener("click",function () {
    if (input.value.trim() != "") {
        let li = document.createElement("li");
        li.innerText = input.value.trim();
        list.appendChild(li);
        input.value = "";
    }
});