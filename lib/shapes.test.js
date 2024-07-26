const {Logo, Circle, Triangle, Rectangle} = require("./shapes.js");

describe("shapes tests", () => {
    it("tests whether the triangle shape is called properly", () => {
        let shape = new Triangle();
        let logo = new Logo(shape, "", "orange");
        expect(logo.shape).toBeInstanceOf(Triangle);
    })

    it("tests whether the circle shape is called properly", () => {
        let shape = new Circle();
        let logo = new Logo(shape, "", "purple");
        expect(logo.shape).toBeInstanceOf(Circle);
    })

    it("tests whether the rectangle shape is called properly", () => {
        let shape = new Rectangle();
        let logo = new Logo(shape, "", "green");
        expect(logo.shape).toBeInstanceOf(Rectangle);
    })

    it("tests whether the proper svg is rendered for the triangle shape", () => {
        let shape = new Triangle();
        shape.addColor("orange");
        expect(shape.render()).toEqual(`<polygon points="42,25 42,275 259,150" fill="orange" />`);
    })

    it("tests whether the proper svg is rendered for the circle shape", () => {
        let shape = new Circle();
        shape.addColor("purple");
        expect(shape.render()).toEqual(`<circle cx="150" cy="150" r="125" fill="purple" />`);
    })

    it("tests whether the proper svg is rendered for the rectangle shape", () => {
        let shape = new Rectangle();
        shape.addColor("green");
        expect(shape.render()).toEqual(`<rect width="200" height="250" x="50" y="25" rx="12" ry="12" fill="green" />`);
    })

    it("tests whether the chosen characters are properly rendered on the triangle svg", () => {
        let shape = new Triangle();
        let characters = 'wink';
        let logo = new Logo(shape, characters, "orange");
        expect(logo.characters).toEqual(characters);
    })

    it("tests whether the chosen characters are properly rendered on the circle svg", () => {
        let shape = new Circle();
        let characters = 'wink';
        let logo = new Logo(shape, characters, "purple");
        expect(logo.characters).toEqual(characters);
    })

    it("tests whether the chosen characters are properly rendered on rectangle svg", () => {
        let shape = new Rectangle();
        let characters = 'wink';
        let logo = new Logo(shape, characters, "green");
        expect(logo.characters).toEqual(characters);
    })
})