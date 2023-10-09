document.addEventListener("DOMContentLoaded", function() {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const clearTasksBtn = document.getElementById("clearTasksBtn");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        tasks.forEach(function(task, index) {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <button class="delete" data-index="${index}">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }

    // Add task
    addTaskBtn.addEventListener("click", function() {
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks();
        }
    });

    // Delete task
    taskList.addEventListener("click", function(e) {
        if (e.target.classList.contains("delete")) {
            const index = parseInt(e.target.getAttribute("data-index"));
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }
    });

    // Clear all tasks
    clearTasksBtn.addEventListener("click", function() {
        localStorage.removeItem("tasks");
        tasks.length = 0;
        displayTasks();
    });

    // Initial display
    displayTasks();
});
