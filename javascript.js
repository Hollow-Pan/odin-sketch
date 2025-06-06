const container = document.querySelector(".container");

function makeGridEle(parent){
    let div = document.createElement("div");
    div.classList.add("grid-element");
    parent.appendChild(div);
}
function makeGridRow(side){
    let gContainer = document.createElement("div");
    gContainer.classList.add("grid-container");
    container.appendChild(gContainer);

    for (let i = 0; i < side; i++){
        makeGridEle(gContainer);
    }
}
function makeGrid(side){
    for (let i = 0; i < side; i++){
        makeGridRow(side);
    }
}

function sketch(e){
    e.target.style.backgroundColor = "pink";
}
function attachListeners(){
    const gridElement = Array.from(document.querySelectorAll(".grid-element"));
    gridElement.forEach((ele) => ele.addEventListener('mouseenter', sketch));
}

makeGrid(16);
attachListeners();


function clearGrid(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
}
function resetGrid(side){
    clearGrid();
    makeGrid(side);
    attachListeners();
}


function promptGridSize(){
    let ans = +prompt("Enter new grid size:");
    while (isNaN(ans) || ans > 100 || ans < 1){
        ans = +prompt("Enter new grid size (1-100):");
    }
    resetGrid(ans);
}
const button = document.querySelector(".grid-size");
button.addEventListener('click', promptGridSize);