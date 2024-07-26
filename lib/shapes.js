class Shape {
    constructor(html, shapeColor, textColor) {
        this.html = html;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
    addColor(color, strokeColor) { /* I may need to change this lol...Daniel has it as addColor */
        this.shapeColor = color;
        this.textColor = strokeColor;
    }
    render() {
        return this.html.replace('%s', this.shapeColor)
    }
    render() {
        return this.html.replace('&s', this.textColor)
    }
}

class Circle extends Shape {
    constructor(){
        const html = `<circle cx="150" cy="150" r="125" stroke="&s" stroke-width="3" stroke-opacity="0.75" fill="%s" />`;
        const shapeColor = 'white';
        const strokeColor = 'black';
        super(html, shapeColor, strokeColor);
    }
}

class Triangle extends Shape {
    constructor(){
        const html = `<polygon points="42,25 42,275 259,150" stroke="&s" stroke-width="3" stroke-opacity="0.75" fill="%s" />`;
        const shapeColor = 'white';
        const strokeColor = 'black';
        super(html, shapeColor, strokeColor);
    }
}

class Rectangle extends Shape {
    constructor(){
        const html = `<rect width="200" height="250" x="50" y="25" rx="12" ry="12" stroke="&" stroke-width="3" stroke-opacity="0.75" fill="%s"`;
        const shapeColor = 'white';
        const strokeColor = 'black';
        super(html, shapeColor, strokeColor);
    }
}

class Logo {
    constructor(shape, text, textColor) {
        this.shape = shape;
        this.text = text;
        this.textColor = textColor;
    }
    renderText() {
        return `<text x="150" y="135" font-size="72" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
    render() {
        return `<svg width='300' height='300' xmlns='http://www.w3.org/2000/svg'>
        ${this.shape.render()}
        ${this.renderText()}
        </svg>`
    }
}

module.exports = {
    Circle, 
    Triangle, 
    Rectangle, 
    Shape
}
