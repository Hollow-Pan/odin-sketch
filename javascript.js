const container = document.querySelector(".container");

const gridElement = [];
const gridContainer = [];

function makeGridEle(parent){
    let div = document.createElement("div");
    div.classList.add("grid-element");
    parent.appendChild(div);

    // gridElement.push(div);
}

function makeGridRow(columns){
    let gContainer = document.createElement("div");
    gContainer.classList.add("grid-container");
    container.appendChild(gContainer);
    gridContainer.push(gContainer);

    for (let i = 0; i < columns; i++){
        makeGridEle(gContainer);
    }
}

function makeGrid(rows, columns){
    for (let i = 0; i < rows; i++){
        makeGridRow(columns);
    }
}

makeGrid(16,16);