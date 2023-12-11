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

// Unit testing, aka testing for a triangle with a red background to render
describe("Triangle test", () => {
    test("test for a triangle with a red background", () => {
      const shape = new Triangle();
      shape.setColor("red");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
      );
    });
  });