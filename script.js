let inputText=document.getElementById("inputText");
let addBtn=document.getElementById("addBtn");
let taskList=document.getElementById("taskList");
let comp=document.getElementById("comp");

let completed=0;
let uncompleted=0;
let total=0;

// storing in local storage
let allTasks=[];
let task=localStorage.getItem("allTask");
if(task!==null){
    allTasks=JSON.parse(task);
    console.log(allTasks);
}

for(let i=0;i<allTasks.length;i++){
    createTask(allTasks[i]);
}

function createTask(task){
    total++;

    let text=document.createElement("p");
    let editBtn=document.createElement("button");
    let delBtn=document.createElement("button");
    let checkbox=document.createElement("input");
    let box=document.createElement("div");

    checkbox.type="checkbox";
    checkbox.checked=task.completed;
    if(task.completed){
        completed++;
        text.style.textDecoration="line-through";
    }
    uncompleted=total-completed;
    comp.innerText="Completed : " + completed + " | " + "Uncompleted : " + uncompleted;

    checkbox.addEventListener("change",()=> {
        if(checkbox.checked){
            completed+=1;
            uncompleted=total-completed;
            text.style.textDecoration="line-through";
        }else{
            completed-=1;
            uncompleted=total-completed;
            text.style.textDecoration="none";
        }
        task.completed = checkbox.checked;

        localStorage.setItem("allTask", JSON.stringify(allTasks));
        comp.innerText="Completed : " + completed + " | " +  "Uncompleted : " + uncompleted;
    });

    text.innerText=task.text;
    editBtn.innerText="Edit";
    delBtn.innerText="Delete";

    box.appendChild(checkbox);
    box.appendChild(text);
    box.appendChild(delBtn);
    box.appendChild(editBtn);

    taskList.appendChild(box);

    editBtn.addEventListener("click",()=> {
        let newText=prompt("Enter new value");
        if(newText===null || newText.trim()===""){
            return;
        }
        task.text=newText.trim();
        text.innerText=newText;
        localStorage.setItem("allTask",JSON.stringify(allTasks));
    });

    delBtn.addEventListener("click",()=> {
        box.remove();
        total-=1;
        if(checkbox.checked){
            completed-=1;
        }
        uncompleted=total-completed;
        let index=allTasks.indexOf(task);
        allTasks.splice(index,1);
        localStorage.setItem("allTask", JSON.stringify(allTasks));
        comp.innerText="Completed : " + completed + " | " +  "Uncompleted : " + uncompleted;
    });
}


addBtn.addEventListener("click",()=> {
    if(inputText.value.trim()===""){
        alert("Please enter value");
        return;
    }
    let newTask={
        text:inputText.value.trim(),
        completed:false
    }
    // storing in local storage
    allTasks.push(newTask);
    localStorage.setItem("allTask",JSON.stringify(allTasks));

    createTask(newTask);
    inputText.value="";
});