class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor,canvas) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;

        this.ctx = canvas.getContext("2d");
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.fillColor;
        this.ctx.arc(this.x,this.y,this.r,this.startAngle,this.endAngle);
        this.ctx.stroke();
    }

    fill(color){
        this.ctx.fillStyle = color || this.fillColor;
        this.ctx.fill();
    }

    expand(){
        this.r = this.r*2;
    }
}


// const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, '#000000');

// c1.draw();

// const c2 = new Circle(60, 70, 20, 0, 2 * Math.PI, '#000000');

// c2.draw();
// c2.fill('#ff0000');

// const c3 = new Circle(70, 50, 20, 0, 2 * Math.PI, '#000000');

// c3.draw();
// c3.fill();
// c3.expand();
// c3.draw();

let canvas = getCanvas();
setInterval(() => {
    const c = new Circle(Math.random()*800, 
                         Math.random()*600, 
                         Math.random()*30, 
                         0, 2 * Math.PI,
                         getRandomColor(),
                         canvas)
    c.draw();
}, 500);

function getRandomColor(){
    function getRandomHex(){
        return (parseInt(Math.random()*255)).toString(16)
    }

    return '#'+getRandomHex()+getRandomHex()+getRandomHex();
}

function getCanvas(){
    let canvas = document.getElementById("myCanvas");
        canvas.width  = window.innerWidth;
        canvas.height = window.innerHeight;
        return canvas;
}