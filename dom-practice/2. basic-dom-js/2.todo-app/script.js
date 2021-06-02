/**
 * * Setting up The Structure of the HTML
 */
let mainDiv = document.createElement("section");
mainDiv.id = "main";

// Main header
let header = document.createElement("h1");
header.innerText = "To-Do App";
header.id = "header";
mainDiv.appendChild(header);

//Add Task Form 
let form = document.createElement("form");
form.id = "form";
form.innerHTML = `
  <label for="new-task">Add New Task</label>
  <input type="text" id="new-task" />
  <button type="submit" id="addTask" onClick="addTaskFunc()"/>Add Task</button>
`;
mainDiv.appendChild(form);   

//To-Do list section 
let todoSection = document.createElement("div");
todoSection.id = "todo";

// Incomplete Task Section 
let incompleteDiv = document.createElement("div");
incompleteDiv.id = "incomplete-task";
incompleteDiv.innerHTML = `
  <h3>Incomplete Task</h3>
`;
todoSection.appendChild(incompleteDiv);

// Completed Task Section
let completedDiv = document.createElement("div");
completedDiv.id = "completed-task";
completedDiv.innerHTML = `
  <h3>Completed Task</h3>  
`;
todoSection.appendChild(completedDiv);

mainDiv.appendChild(todoSection);

const body = document.querySelector("body");
body.appendChild(mainDiv);

/**
 * * Setting up The Functionality
*/
let formInput = document.querySelector("#new-task");
let formSubmit = document.querySelector("#form");

let addTaskFunc = (event) => {
  event.preventDefault();
  let inputValue = formInput.value;
  console.log(inputValue)
}


/**
 * * Setting up The CSS Style 
*/
let cssStyle = document.createElement("style");
let styles = `
  #main{
    text-align: center;
  }
  #todo{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
`;

let styleRule = document.createTextNode(styles);
cssStyle.appendChild(styleRule);
document.querySelector("head").appendChild(cssStyle);
