

const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Square, Circle } = require("./lib/shapes")

const questions = [
    {
        type: "input",
        message:"Which characters would you like your logo to display? (Max of 3)",
        name:"text",
    },

    {
        type: "input",
        message:"What would you like your text color to be? (Enter color or hexadecimal number)",
        name: "textColor"
    },

    {
        type: "input",
        message: "What would you like your shapes color to be? (Enter color or hexadecimal number)",
        name:"shapeColor"
    },

    {
        type: "list",
        message: "Which shape would you like your rendered logo to be?",
        choices: ["Triangle", "Square", "Circle"],
        name:"shape"
    }
]

function createFile(fileName, input){
    let svgString = "";

    svgString =  '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';

    svgString += "<g>";

    svgString += `${input.shape}`;

    let shapeChoice;
    if(input.shape === "Triangle") {
        shapeChoice = new Triangle();
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${input.shapeColor}"/>`;

    } else if (input.shape === "Square"){
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${input.shapeColor}"/>`
    } else {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${input.shapeColor}"/>`;
    };

    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${input.textColor}">${input.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("File logo.svg has been generated");
    })
}

function userPrompt() {
    inquirer.prompt(questions)
        
   
    .then((input)=> {
        if (input.text.length > 3) {
            console.log("Value can not contain more than 3 characters. Please try again.");
            userPrompt();
        } else {
            createFile("logo.svg", input)
        }
    })
}

userPrompt();
