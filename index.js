const inquirer = require ('inquirer');
const fs =require = require('fs');
const { Circle, Square} = require('');

const questions = [
    {
        type:'input',
        name:'Title',
        message:'Enter 3 characters for your title:',

    },
    {
        type:'input',
        name:'TitleColor',
        message:'Enter a color for your title',

    },
    {
        type:'list',
        name:'Shape',
        message:'choose a shape:',
        choices:['Circle','Square'],

    },
    {
        type:'input',
        name:'ShapeColor',
        message:'Enter a color for the shape',

    },
   
];

function writeFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log ('SVG Logo Completed')
    );
}
class svgProperties{
    constructor(){
        this.Text ='';
        this.Shape ='';

    }
render() {
    return `
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
        ${this.Shape}
        ${this.Text}
    </svg>
    `;
}

setText(text, color) {
    this.Text =`
    <text x="125" y="125" font-size="25" text-anchor="middle" fill="${color}">${text}</text>`;
}
setShape(Shape) {
    this.Shape = Shape.render();
}
}

async function run() { 
    const response = await inquirer.prompt (questions);
    let {title, TitleColor, Shape, ShapeColor} = response;

    if (TitleColor.lenght >3) {
        console.log ('Please enter no more that 3 characters');
        return;
    }
    
    console.log('${Title} is the title for your logo');
    console.log('${TitleColor} is the color of the text');
    console.log('${Shape} is the shape for your logo');
    console,log('${ShapeColor} is the color for your logo');

    let shapeObj; 
    switch (shape) {
        case 'shape':
            shapeObj = new Circle();
            break;
            case 'Square':
                shapeObj = new Square
                break;
    }

    shapeObj.ShapeColor(ShapeColor);
    const svgFile = new svgProperties();
    svgFile.setText(Title, TitleColor);
    svgFile.setShape(shapeObj);
    const svg = svgFile.render();

    writeToFile('logo.svg', svg)   
}

run();