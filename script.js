let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("taskList");

// Load tasks from Local Storage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Create and display a task
function createTask(taskText) {
    let li = document.createElement("li");
    li.innerText = taskText;

    // Toggle completed
    li.addEventListener("click", function () {
        if (li.style.textDecoration === "line-through") {
            li.style.textDecoration = "none";
        } else {
            li.style.textDecoration = "line-through";
        }
    });

    // Delete button
    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent line-through when clicking Delete

        li.remove();

        // Remove from array
        tasks = tasks.filter(task => task !== taskText);

        // Save updated array
        localStorage.setItem("tasks", JSON.stringify(tasks));
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}

// Add a new task
function addTask() {
    let task = input.value.trim();

    if (task === "") return;

    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    createTask(task);

    input.value = "";
}

// Load saved tasks
tasks.forEach(function (task) {
    createTask(task);
});

// Add button
addBtn.addEventListener("click", function () {
    addTask();
});

// Enter key
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});