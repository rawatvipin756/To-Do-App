let input=document.getElementById("taskInput");
let button=document.getElementById("addBtn");
let list=document.getElementById("taskList");

function addTask(){
    if (input.value.trim() != "") {
        let li = document.createElement("li");
        li.innerText = input.value.trim();
        list.appendChild(li);
        let deleteBtn=document.createElement("button");
        deleteBtn.innerText = "Delete";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click",function() {
            li.remove();
        })
        input.value = "";
    }
};

button.addEventListener("click",function () {
    addTask();
});

input.addEventListener("keydown",function(event) {
    if(event.key==="Enter"){
        addTask();
    }
});

list.addEventListener("click",function() {
    li.style.textDecoration = "line-through";
});