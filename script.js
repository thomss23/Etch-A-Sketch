const container = document.createElement("div");
container.classList.add("container");
const body = document.querySelector("body");
body.appendChild(container);
const boardSize = 600;
let rainbowMode = false;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

function createSquares(n) {
    let squareElement;

    for(let i = 1; i <=n; i++) {
        for(let j = 1; j<=n; j++) {
            squareElement = document.createElement('div');
            squareElement.classList.add("square");
            let height = boardSize/n - 2;
            let width = boardSize/n - 2;
            squareElement.style.height = height + "px";
            squareElement.style.width = width + "px";
            container.appendChild(squareElement);
        }

    } 

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.addEventListener('mouseover', () => {
            if(rainbowMode == false) {
                square.style.backgroundColor = "white";
            } else {
                square.classList.remove('hovered-square');
                let rColor = random(1, 256);
                let gColor = random(1, 256);
                let bColor = random(1, 256);
                let squareColor = "rgb(" + rColor + ", " + gColor + ", " + bColor + ")";
                square.style.backgroundColor = squareColor;

            }
        });
    });

}

function deleteBoard() {

    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
}

createSquares(16);


const reset = document.querySelector("button");
reset.addEventListener('click', () => {
    
    let requestPrompt = prompt("How many squares would you like?");
    let request = parseInt(requestPrompt);

    if(requestPrompt == null) {
        return;
    }

    if((request < 1 || request > 100)) {
        alert("Wrong input! Please enter a number between 1 and 100");
        return;
    } else if(isNaN(request)) {
        alert("Wrong input! Only numeric characters allowed");
        return;
    }

    deleteBoard();
    createSquares(request);

});

const rainbowSwitch = document.querySelector("input");
rainbowSwitch.addEventListener('click', () => {
    rainbowMode = !rainbowMode;
    return rainbowMode;

})
