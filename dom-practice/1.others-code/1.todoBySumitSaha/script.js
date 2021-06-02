/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
 */

// select elements & assign them to variables
let newTask = document.querySelector('#new-task');
let form = document.querySelector('form');
let todoUl = document.querySelector('#items');
let completeUl = document.querySelector('.complete-list ul');

// Add task from "add task "  
let addTask = function(event) {
    event.preventDefault();
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = newTask.value;
    checkBox.type = 'checkbox';

    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    todoUl.appendChild(listItem);
    newTask.value = "";
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
    let checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

let completeTask = function() {
    let listItem = this.parentNode;
    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
    let deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

let deleteTask = function() {
    let listItem = this.parentNode;
    let ul = listItem.parentNode;
    ul.removeChild(listItem);
}

form.addEventListener('submit', addTask);
