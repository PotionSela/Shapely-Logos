// Importing Circle, Triangle, and Square classes from ./shapes.js
const { Circle, Triangle, Square } = require("./shapes");

// Unit testing, aka testing for circle with a blue background to render
describe("Circle test", () => {
    test("test for a circle with a blue background", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="150" r="80" fill="blue" />'
        );
    });
});