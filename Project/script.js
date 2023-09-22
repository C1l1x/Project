const userInput = document.getElementById("input");
const listTask = document.getElementById("listTask");

// function to add new task to list
function addTask() {
    let task = document.createElement("li");
    task.innerHTML = userInput.value;
    listTask.appendChild(task);
    userInput.value = "";
    let span = document.createElement("span");
    span.innerHTML = "x";
    task.appendChild(span);

    saveData()
}

// function to toggle a list as "done"
listTask.addEventListener("click", function(Done) {
    if(Done.target.tagName === "LI"){
        Done.target.classList.toggle("done");
        saveData()
    }
    else if(Done.target.tagName === "SPAN") {
        Done.target.parentElement.remove();
        saveData();
    }
}, false);

// function to saving data in the browser
function saveData() {
    localStorage.setItem("data", listTask.innerHTML)
}

// function to call saved data when refresh the page
function showSavedData() {
    listTask.innerHTML = localStorage.getItem("data");
}

showSavedData();