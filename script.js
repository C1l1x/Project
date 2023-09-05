const userInput = document.getElementById("input");
const listTask = document.getElementById("listTask");

function addTask() {
    let task = document.createElement("li");
    task.innerHTML = userInput.value;
    listTask.appendChild(task);
    userInput.value = "";
}