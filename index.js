const inquirer = require("inquirer"); // inquirer
const colors = require("./lib/colors"); // the colors functions to determine if a color is valid
const MaxLengthInputPrompt = require("inquirer-maxlength-input-prompt"); // allow us to restrict user input
const { Circle, Triangle, Square } = require("./lib/shapes"); // our 3 shape classes
const fs = require("fs"); // file system
// functionality required to set the max length of an input
inquirer.registerPrompt("maxlength-input", MaxLengthInputPrompt);

// array of question objects
const arrQuestions = [
  {
    type: "list",
    message: "Please select a shape!",
    name: "inShape",
    choices: ["Square", "Triangle", "Circle"],
  },
  {
    type: "input",
    message: "Please enter a color name or hex code for the shape!",
    name: "inShapeColor",
  },
  {
    type: "maxlength-input",
    message: "Please input 3 characters for the logo!",
    name: "inText",
    maxLength: 3, //will only allow the user to type 3 characters
  },
  {
    type: "input",
    message: "Please enter a color name or hex code for the text!",
    name: "inTextColor",
  },
];

// asyncronous function to retrieve inquirer prompts
async function runInquirer() {
  // create an empty shape object
  let currShape = {};
  // for each question, prompt the user
  for (let i = 0; i < arrQuestions.length; i++) {
    // store data returned by user in res
    const res = await inquirer.prompt(arrQuestions[i]);
    // empty varaible to store the data for the current color typed by user
    let currColor;
    if (i === 0) {
      // for question 1, save the shape
      currShape.Shape = res.inShape;
    } else if (i === 1) {
      // for question 2 save the shapecolor and set the current color
      currShape.ShapeColor = res.inShapeColor;
      currColor = res.inShapeColor;
    } else if (i === 2) {
      // for question 3, save the text
      currShape.Text = res.inText;
    } else if (i === 3) {
      // for question 4 save the textcolor and set the current color
      currShape.TextColor = res.inTextColor;
      currColor = res.inTextColor;
    }
    // if color is defined
    if (currColor !== undefined) {
      // check to see if the color passes the check for legitimate colors
      const colorResult = colors(currColor, i);
      // the color result is not valid then reprompt the previous question
      if (colorResult !== true) {
        i--;
      }
    }
  }
  // pass the object's properies to the returnSVG function based off user input
  returnSVG(currShape.Shape, currShape.ShapeColor, currShape.Text, currShape.TextColor);
}

function returnSVG(shape, shapeColor, text, textColor) {
  // if the value is square, create a square object based on the square class
  // then pass the text from render and fileName to the writeSVG function
  if (shape === "Square") {
    const square = new Square(text, textColor, shapeColor);
    const svgText = square.render();
    writeSVG(`./examples/logo.svg`, svgText);
  } else if (shape === "Triangle") {
    // do the same for triangle
    const triangle = new Triangle(text, textColor, shapeColor);
    const svgText = triangle.render();
    writeSVG(`./examples/logo.svg`, svgText);
  } else {
    // and circle
    const circle = new Circle(text, textColor, shapeColor);
    const svgText = circle.render();
    writeSVG(`./examples/logo.svg`, svgText);
  }
}

// write to file, throw error if an error occurs, log success when complete
function writeSVG(file, svgText) {
  fs.writeFile(file, svgText, (err) => {
    err ? console.log("Error writing file to file system") : console.log(`Generated logo.svg`);
  });
}

runInquirer();
