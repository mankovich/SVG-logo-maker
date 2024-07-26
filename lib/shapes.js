class Shape {
    constructor(html, shapeColor) {
        this.html = html;
        this.shapeColor = shapeColor;
    }
    colorfy(color) { /* I may need to change this lol...Daniel has it as addColor */
        this.shapeColor = color;
    }
    render() {
        return this.html.replace('%s', this.shapeColor)
    }
}

class Circle extends Shape {

}

class Triangle extends Shape {

}

class Rectangle extends Shape {

}

module.exports = {
    Circle, 
    Triangle, 
    Rectangle, 
    Shape
}
