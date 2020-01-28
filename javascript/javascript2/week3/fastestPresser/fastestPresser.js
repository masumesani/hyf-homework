document.getElementById("start").addEventListener("click", start);
document.getElementById("start").addEventListener('keypress', logKey);

let scoreLeft = 0;
let scoreRight = 0;

renderConfetti('left')
renderConfetti('right')
function renderConfetti(side){
    let element = document.getElementById(`${side}-side`);
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let confettiSettings = { target: `my-canvas-${side}`, width:width, height:height};
    let confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    let canvasElement = document.getElementById(`my-canvas-${side}`);
    canvasElement.style.display = 'none';
}

function showConfetti(side){
    let canvasElement = document.getElementById(`my-canvas-${side}`);
    canvasElement.style.display = 'block';
}

function clearConfetti(side){
    let canvasElement = document.getElementById(`my-canvas-${side}`);
    canvasElement.style.display = 'none';
}

function logKey(event) {

    if (event.key === "l") {
        console.log("right");
        scoreRight += 1;
        document.getElementById("scoreBoardRight").innerHTML = scoreRight;
    }
    if (event.key === "s") {
        console.log("left");
        scoreLeft += 1;
        document.getElementById("scoreBoardLeft").innerHTML = scoreLeft;
    }
}


function start() {
    let inputvalue = document.getElementById("time").value;
    let time = parseInt(inputvalue);
    if (!time) {
        alert("Please input a valid number greater than zero")
        return
    }
    reset();
    scoreLeft = 0;
    scoreRight = 0;
    setTimeout(calculateScore, time * 1000)
}

function reset(){
    scoreLeft = 0;
    scoreRight = 0;
    document.getElementById("scoreBoardRight").innerHTML = "";
    document.getElementById("scoreBoardRight").innerHTML = "";
    clearConfetti('left');
    clearConfetti('right');
}

function calculateScore() {
    if (scoreLeft > scoreRight) {
        showConfetti('left');
    } else if (scoreLeft === scoreRight) {
        alert("Same score!")
    } else {
        showConfetti('right');
    }
    
}

