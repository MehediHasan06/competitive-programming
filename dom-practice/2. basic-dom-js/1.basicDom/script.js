let body = document.querySelector("body");

// header
let header = document.createElement("h3");
header.innerHTML = "If you want to see what js can do, please try the below button !";
header.setAttribute("id", "header-id");

// button & paragraph
let button = document.createElement("button");
button.type = "button";
button.innerHTML = "Click Here";
button.addEventListener("click", () =>{
  let paragraph = document.createElement("p");
  paragraph.innerText = "JavaScript can change HTML content and can change the attribute of any html tag !"
  body.appendChild(paragraph);
});
button.style.marginBottom = "10px"

// line break
let lineBreaker = document.createElement("br");

body.appendChild(header);
body.appendChild(button);
body.appendChild(lineBreaker);

// Bulb project ---------------------------------

// bulb on button
let onButton = document.createElement("button");
onButton.type = "button";
onButton.innerText = "Turn on the Light";
body.appendChild(onButton)

// image (By default off)
let bulbImage = document.createElement("img");
bulbImage.src = "https://www.w3schools.com/js/pic_bulboff.gif";
bulbImage.style.width = "100px";
bulbImage.setAttribute("id", "defaultBulb");

body.appendChild(bulbImage);

// bulb off image
let offButton = document.createElement("button");
offButton.type = "button";
offButton.innerText = "Turn off the light";
body.appendChild(offButton);

// Button functionality
onButton.addEventListener("click", () => {
  let bulb = document.getElementById("defaultBulb");
  bulb.src = "https://www.w3schools.com/js/pic_bulbon.gif";
});

offButton.addEventListener("click", () => {
  let bulb = document.getElementById("defaultBulb");
  bulb.src = "https://www.w3schools.com/js/pic_bulboff.gif";
});


// Button to change the style of the header  ------------------------------
let styleParagraph = document.createElement("p");
styleParagraph.innerText = "Button to change the css style";
body.appendChild(styleParagraph);

let styleButton = document.createElement("button");
styleButton.type = "button";
styleButton.innerText = "Change the style of the header";
styleButton.addEventListener("click", () => {
  let header = document.getElementById("header-id");
  header.style.color = "red";
  header.style.textAlign = "center";
});


body.appendChild(styleButton);

// Button to hide any html element  -------------------------
let hideParagraph = document.createElement("p");
hideParagraph.innerText = "Button to hide the html element";
body.appendChild(hideParagraph);

let hideButton = document.createElement("button");
hideButton.type = "button";
hideButton.innerText = "Hide the element of html";
hideButton.addEventListener("click", () => {
  let header = document.getElementById("header-id");
  header.style.display = "none";
});

body.appendChild(hideButton);

// Button to show any hidden html element  -------------------
let showParagraph = document.createElement("p");
showParagraph.innerText = "Button to hide the html element";
body.appendChild(showParagraph);

let showButton = document.createElement("button");
showButton.type = "button";
showButton.innerText = "Show the element of html";
showButton.addEventListener("click", () => {
  let header = document.getElementById("header-id");
  header.style.display = "block";
});

body.appendChild(showButton);
