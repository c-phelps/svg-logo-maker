const { Circle, Triangle, Square } = require("./shapes");

// tests for the three shape classes and expected output
describe("Shape rendering tests", () => {
  test("Square render function output", () => {
    const square = new Square("Squ", "blue", "white");
    const output = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <rect x="50" y="50" width="200" height="200" fill="white" />
                <text x="150" y="130" text-anchor="middle" fill="blue" font-size="24">Squ</text>
            </svg>`;
    // user /\s+/g to remove all blank spaces so the outcome can be propperly compared
    expect(square.render().replace(/\s+/g, "")).toBe(output.replace(/\s+/g, ""));
  });
  test("Triangle render function output", () => {
    const triangle = new Triangle("Tri", "red", "blue");
    const output = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polygon points="150,30 270,170 30,170" fill="blue" />
                <text x="150" y="130" text-anchor="middle" fill="red" font-size="24">Tri</text>
            </svg>`;
    expect(triangle.render().replace(/\s+/g, "")).toBe(output.replace(/\s+/g, ""));
  });
  test("Circle render function output", () => {
    const circle = new Circle("Cir", "green", "orange");
    const output = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <circle cx="150" cy="100" r="100" fill="orange" />
                <text x="150" y="130" text-anchor="middle" fill="green" font-size="24">Cir</text>
            </svg>`;
    expect(circle.render().replace(/\s+/g, "")).toBe(output.replace(/\s+/g, ""));
  });
});
