let title = document.getElementById("title");
let button = document.getElementById("changeBtn");
let button2 = document.getElementById("resetBtn");

// Store original state
let originalState = {
    text: title.textContent,
    background: document.body.style.backgroundColor
};

button.addEventListener("click", function() {
    title.textContent = "You clicked the button!";
    document.body.style.backgroundColor = "lightblue";
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added!";
    document.body.appendChild(newParagraph);
});

button2.addEventListener("click", function(){
    title.textContent = originalState.text;
    document.body.style.backgroundColor = originalState.background;
})