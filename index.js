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