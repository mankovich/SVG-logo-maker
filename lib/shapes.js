class Shape {
    constructor(html, shapeColor, textColor) {
        this.html = html;
        this.shapeColor = shapeColor;
        this.textColor = textColor;
    }
    addColor(color) {
        this.shapeColor = color;
    }
    render() {
        return this.html.replace('%s', this.shapeColor)
    }
}

class Circle extends Shape {
    constructor() {
        const html = `<circle cx="150" cy="150" r="125" fill="%s" />`;
        const shapeColor = 'white';
        super(html, shapeColor);
    }
}

class Triangle extends Shape {
    constructor() {
        const html = `<polygon points="42,25 42,275 259,150" fill="%s" />`;
        const shapeColor = 'white';
        super(html, shapeColor);
    }
}

class Rectangle extends Shape {
    constructor() {
        const html = `<rect width="200" height="250" x="50" y="25" rx="12" ry="12" fill="%s" />`;
        const shapeColor = 'white';
        super(html, shapeColor);
    }
}

class Logo {
    constructor(shape, characters, textColor) {
        this.shape = shape;
        this.characters = characters;
        this.textColor = textColor;
    }
    renderText() {
        return `<text x="115" y="175" font-size="52" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`
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
    Logo
}
