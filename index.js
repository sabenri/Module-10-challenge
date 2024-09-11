const inquirer = require('inquirer');
const fs = require('fs');

const { Circle, Square } = require('./lib/Shapes');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter 3 characters for your title:',
    },
    {
        type: 'input',
        name: 'titleColor',
        message: 'Enter a color for your title:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape:',
    }
];

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('SVG Logo Completed')
    );
};

class SvgProperties {
    constructor() {
        this.text = '';
        this.shape = '';
    }
    render() {
        return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${this.shape}
            ${this.text}
        </svg>
        `;
    }

    setText(text, color) {
        this.text = `
        <text x="150" y="115" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`;
    }

    setShape(shape) {
        this.shape = shape.render();
    }
}

async function run() {
    const response = await inquirer.prompt(questions);
    let { title, titleColor, shape, shapeColor } = response;

    if (title.length > 3) {
        console.log('Please enter no more than 3 characters for the title.');
        return;
    }

    console.log(`${title} is the title for your logo`);
    console.log(`${titleColor} is the color of the text`);
    console.log(`${shape} is the shape for your logo`);
    console.log(`${shapeColor} is the color for your shape`);

    let shapeObj;
    switch (shape) {
        case 'Circle':
            shapeObj = new Circle();
            break;
        case 'Square':
            shapeObj = new Square();
            break;
    }

    shapeObj.setShapeColor(shapeColor);
    const svgFile = new SvgProperties();
    svgFile.setText(title, titleColor);
    svgFile.setShape(shapeObj);
    const svg = svgFile.render();

    writeFile('logo.svg', svg);
}

run();