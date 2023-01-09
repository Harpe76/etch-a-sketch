function CreateDivs(number) {
    for (i = 0; i<number; i++){
        let newDiv = document.createElement("div");
        newDiv.className = "box";
        let containerDiv = document.getElementById("container");
        containerDiv.appendChild(newDiv);
    }
}

CreateDivs(256);