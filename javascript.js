//Board Size Changer

function boardSize(size) {
    let board = document.querySelector(".board");
    let boxes = board.querySelectorAll(".box");
    boxes.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("box"); // Stops users from being able to drag divs.
        square.addEventListener("mousedown", colorSquare);
        square.addEventListener("mouseover", colorSquare);
        square.style.backgroundColor = "antiquewhite";
        board.insertAdjacentElement("beforeend", square);
    }
};

//Grid Slider Input

function gridSlider (input) {
    boardSize(input);
};

//Mouse Down & Held to Activate colorSquare

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

//Color Functions

function colorSquare(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    if (color === "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    this.style.backgroundColor = color;
}

function changeColor(selection) {
    color = selection;
}

//Reset Function

function resetBoard() {
    let board = document.querySelector(".board");
    let boxes = board.querySelectorAll(".box");
    boxes.forEach((div) => div.style.backgroundColor = "antiquewhite");
}