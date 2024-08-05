const colors = require("./colors");

// tests for the three shape classes and expected output
describe("Color comparison tests", () => {
  test("Color string value comparison to SVG colors, true", () => {
    const colorValue = "aliceblue";
    const output = true;
    expect(colors(colorValue)).toBe(output);
  });
  test("Color string value comparison to SVG colors, undefined", () => {
    const colorValue = "OogaBooga!"; 
    const output = undefined; // OogaBooga! is not an accepted color :) expect undefined
    expect(colors(colorValue)).toBe(output);
  });
  test("Color hexidecimal value comparison to SVG colors, 3 digits", () => {
    const colorValue = "#FFF";
    const output = true;
    expect(colors(colorValue)).toBe(output);
  });
  test("Color hexidecimal value comparison to SVG colors, 6 digits", () => {
    const colorValue = "#FFF001";
    const output = true;
    expect(colors(colorValue)).toBe(output);
  });
  test("Color rgb value comparison to SVG colors", () => {
    const colorValue = "rgb(255, 100, 100)";
    const output = true;
    expect(colors(colorValue)).toBe(output);
  });
  test("Color rgb value comparison to SVG colors - expect undefined", () => {
    const colorValue = "rgb(265, 100, 100)";
    const output = undefined; // expect this to return undefined since 265 is not accepted via rgb
    expect(colors(colorValue)).toBe(output);
  });
  test("Color rgba value comparison to SVG colors", () => {
    const colorValue = "rgba(255, 100, 100, 0.5)";
    const output = true;
    expect(colors(colorValue)).toBe(output);
  });
  test("Color rgba value comparison to SVG colors - expect undefined", () => {
    const colorValue = "rgba(255, 100, 100, 1.5)"; // expect this to return undefined since 1.5 is not accepted for the 4th agrument via rgba
    const output = undefined;
    expect(colors(colorValue)).toBe(output);
  });
});
