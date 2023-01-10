let gridSize = 0;
let button = document.getElementById("gridButton").onclick = ShowPrompt;

function CreateDivs(number) {

    let containerDiv = document.getElementById("container");
    let child = containerDiv.lastElementChild;
    while (child) {
        containerDiv.removeChild(child);
        child = containerDiv.lastElementChild;    
    }
    
    for (i = 0; i < i.length; i++) {
        containerDiv[i].rem
    }

    for (i = 0; i<number*number; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        containerDiv.appendChild(newDiv);
    }
    containerDiv.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
    let boxes = Array.from(document.querySelectorAll(".box"));
    boxes.forEach(box => box.addEventListener("mouseenter", ChangeColor));
}

function ShowPrompt() {
    gridSize = prompt("How many rows and columns would you like your square grid to have? Can select up to 100.")
    console.log("ppp");
    if (gridSize > 0) {
        console.log(gridSize);
        if (gridSize < 101) {
            CreateDivs(gridSize);
        } else {
            prompt("please select a grid size under 100.")
        }
    }
}

function DeleteDivs() {
    
}


function ChangeColor(e) {
    let element = e.fromElement;
    if (element.className === 'box'){
        element.classList.add('selected');
    }
}