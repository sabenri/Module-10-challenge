class Shape {
    constructor() {
        this.color = '';
    }

    setShapeColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    render() {
        return `<circle r="80" cx="150" cy="100" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect width="500" height="500" x="10" y="10" rx="20" ry="20" fill="${this.color}" />`;
    }
}

module.exports = { Circle, Square };