const userInput = document.getElementById("input");
const listTask = document.getElementById("listTask");

function addTask() {
    let task = document.createElement("li");
    task.innerHTML = userInput.value;
    listTask.appendChild(task);
    userInput.value = "";
}

listTask.addEventListener("click", function() {
    const li = document.getElementById("li");
    li.classList.toggle("done");
});
