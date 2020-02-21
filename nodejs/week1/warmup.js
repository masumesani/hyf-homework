class Circle{
    constructor(radius){
        this.radius = radius;
    }

    getDiameter= () => this.radius * 2;
    getCircumference = () => 2 * Math.PI * this.radius;
    getArea = () =>  Math.PI *(this.radius * this.radius);
}

const circle = new Circle(10);
circle.radius
let test = circle.getDiameter();
console.log(test)
test = circle.getCircumference();
console.log(test)


