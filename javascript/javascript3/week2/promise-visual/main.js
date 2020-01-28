//translateOneByOne()
translateAllAtOnce()

function translateOneByOne() {
    const marks = getMarks();
    
    //found it on internet via https://css-tricks.com/why-using-reduce-to-sequentially-resolve-promises-works/
    marks.reduce((previousValue, current)=>{
        return previousValue.then(()=>translate(current))
    },Promise.resolve()).then(()=>console.log("done"))
    
    // translate(marks[0])
    //     .then(() => translate(marks[1]))
    //     .then(() => translate(marks[2]))
    //     .then(() => console.log("done!"))
}

function translateAllAtOnce() {
    const marks = getMarks();
    Promise.all(marks.map(v=>translate(v)))
    .then(()=>console.log("done!"))
}

function getMarks(){
    return Array.from(document.getElementsByClassName("marks")[0].children);
}

function translate(dom) {
    //find the color
    let color = window.getComputedStyle(dom).backgroundColor.replace("rgb(", "").replace(")", "").split(", ").map(v => parseInt(v));
    let targetColor = ''
    let largestElement = color.indexOf(Math.max(...color))
    if (largestElement === 0) {
        targetColor = 'Red'
    } else if (largestElement === 1) {
        targetColor = 'Green'
    } else {
        targetColor = 'Blue'
    }
    //find target
    let targets = document.getElementsByClassName("targets");
    let target = Array.from(targets[0].children).filter(d => d.innerText.includes(targetColor))[0];
    //find target position
    let position = { x: target.offsetLeft - dom.offsetLeft, y: target.offsetTop - dom.offsetTop }
    //move to target
    return new Promise((resolve, reject) => {
        moveElement(dom, position)
            .then(() => {
                console.log('Element has been moved');
                resolve();
            });
    })
}