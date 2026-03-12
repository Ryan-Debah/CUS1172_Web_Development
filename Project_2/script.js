let tasks = [];

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");


form.addEventListener("submit", function(event){

event.preventDefault();

let title = document.getElementById("taskTitle").value;
let priority = document.getElementById("taskPriority").value;

let statusElements = document.getElementsByName("status");
let status = "";

for(let i = 0; i < statusElements.length; i++){
    if(statusElements[i].checked){
        status = statusElements[i].value;
    }
}

let task = {
title: title,
priority: priority,
status: status
};

tasks.push(task);

addTaskToDOM(task, tasks.length - 1);

form.reset();

});

function addTaskToDOM(task, index){

let li = document.createElement("li");
li.className = "list-group-item";

let taskInfo = document.createElement("span");
taskInfo.className = "task-info";
taskInfo.innerText =
task.title + " | Priority: " + task.priority + " | Status: " + task.status;

if(task.status === "Completed"){
taskInfo.classList.add("completed");
}

let removeBtn = document.createElement("button");
removeBtn.className = "btn btn-danger btn-sm me-2";
removeBtn.innerText = "Remove";

removeBtn.addEventListener("click", function(){
removeTask(index, li);
});

let completeBtn = document.createElement("button");
completeBtn.className = "btn btn-success btn-sm";
completeBtn.innerText = "Mark Complete";

completeBtn.addEventListener("click", function(){
markComplete(taskInfo, index);
});

let buttonGroup = document.createElement("div");
buttonGroup.appendChild(removeBtn);
buttonGroup.appendChild(completeBtn);

li.appendChild(taskInfo);
li.appendChild(buttonGroup);

taskList.appendChild(li);

}

function removeTask(index, element){

tasks.splice(index, 1);

element.remove();

}

function markComplete(taskInfo, index){

taskInfo.classList.add("completed");

tasks[index].status = "Completed";

}