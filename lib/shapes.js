class Shape {
    constructor() {
        this.color = "";
    }
    // Shape class to take in setColor function
    setColor(colorVar) {
        this.color = colorVar;
    }
}

// Cicle class inherits properties defined in shape class
class Circle extends Shape {
    render() {
        // Returns polygon with color input
        return `<circle cx="150" cy="150" r="80" fill="${this.color}" />`;
    }
}

// Triangle class inherits prop defined in Shape class
class Triangle extends Shape {
    render() {
        // Returns polygon with color input
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// Square class inherits prop defined in Shape class
class Square extends Shape {
    render() {
        // Returns polygon with color input
        return `<rect x="40" y="40" width="160" height="160" fill="${this.color}" />`
    }
}

// Exports Shape classes 
export { Circle, Triangle, Square };