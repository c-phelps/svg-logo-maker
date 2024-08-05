// Shapes parent class with params and functions used by children classes
class Shapes {
  constructor(text, textColor, shapeColor) {
    (this.text = text), (this.textColor = textColor), (this.shapeColor = shapeColor);
  }
  render() {
    return `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                ${this.getShape()}
                <text x="150" y="130" text-anchor="middle" fill="${this.textColor}" font-size="24">${this.text}</text>
            </svg>
        `;
  }
  getShape() {
    throw new Error("getShape() is defined in the subclasses");
  }
}

// Square class inheriting from shapes
class Square extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  getShape() {
    return `<rect x="50" y="50" width="200" height="200" fill="${this.shapeColor}" />`;
  }
}

// Triangle class inheriting from shapes
class Triangle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  getShape() {
    return `<polygon points="150,30 270,170 30,170" fill="${this.shapeColor}" />`;
  }
}

// Circle class inheriting from shapes
class Circle extends Shapes {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor);
  }
  getShape() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
  }
}

// exported classes
module.exports = {
  Circle,
  Triangle,
  Square,
};
