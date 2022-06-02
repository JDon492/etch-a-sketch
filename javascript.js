onload = () => {
    boardSize(16)
}

//Board Size Changer

function boardSize(size) {
    let board = document.querySelector(".board");
    let boxes = board.querySelectorAll(".box");
    boxes.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    //Creates boxes and enters into the grid based on grid slider input

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("box"); // Stops users from being able to drag divs.
        square.addEventListener("mousedown", colorSquare);
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "antiquewhite";
        board.insertAdjacentElement("beforeend", square);
    }
};

//Reset Function

function resetBoard() {
    let board = document.querySelector(".board");
    let boxes = board.querySelectorAll(".box");
    boxes.forEach((div) => div.style.backgroundColor = "antiquewhite");
}

//Grid Slider Input

function gridSlider (input) {
    boardSize(input);
};

//Mouse Down & Held to Activate colorSquare

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Color Functions

let currentMode = "color"
let currentColor = "#000000";

function colorSquare(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (currentMode === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else if (currentMode === "eraser") {
        this.style.backgroundColor = "antiquewhite";
    } else if (currentMode === "color") {
        this.style.backgroundColor = currentColor;
    }
}

//Mode and Color Functions

function changeColorandMode (color,mode) { //This is for when selecting the RGB selector that it also switches mode to color
    changeColor(color);
    changeMode(mode);
}

function changeColor(selection) {
    currentColor = selection;
}

function changeMode(selection) {
    currentMode = selection;
}

//RGB Color Selector

const rgbSelect = document.getElementById("rgbSelect");
rgbSelect.oninput = e => changeColorandMode(e.target.value,"color")