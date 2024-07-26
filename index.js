//call the required modules as global variables
const fs = require('fs')
const inquirer = require('inquirer')
const validator = require('validator')
const { Circle, Rectangle, Triangle, Shape } = require('./lib/shapes.js')
const colors = require('colors')

function getUserSpecs() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: colors.emeraldGreen("\n\nPlease enter **up to 3** characters around which you would like to build your logo."),
            name: 'characters',
            validator: (input) => {
                const maxChars = 3;
                if (input.length > maxChars) {
                    return colors.indigo(colors.bgGold("\n\nYou entered too many characters: 3 is **the most** you make choose to use. Please try again."));
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'characterColor',
            message: colors.emeraldGreen('\n\nPlease enter the color you want these characters to be. You may do so by simply entering a common color name. Or, if you have a particular hue in mind and you know the 6-digit hexadecimal identifier (0-9, A-F), you may enter that 6-digit hexidecimal to identify your chosen color.'),
        },
        {
            type: 'list',
            name: 'shape',
            message: colors.emeraldGreen('\n\nPlease choose the shape of your logo.'),
            choices: [Circle, Triangle, Rectangle],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: colors.emeraldGreen('\n\nPlease enter the color of your logo. Again, you may do so by common color name or by 6-digit hexadecimal.'),
        },
        {
            type: 'input',
            name: 'fileName',
            message: colors.emeraldGreen("\n\nWhat name would you like for your logo's .svg file?"),
            validator: (input) => {
                const files = fs.readdirSync('./examples/');
                for (i = 0; i < files.length; i++) {
                    if (files[i] === `${input}.svg`) {
                        return colors.emeraldGreen('\n\n Oops. That name is already taken. Please choose another name for your .svg file.');
                    } 
                    return true;
                }
            }
        }
    ])
    .then((answers) => {
        let shape = null;
        console.log(answers.shape);
        switch (answers.shape) {
            case 'Rectangle':
                shape = new Rectangle();
                break;
            case 'Triangle':
                shape = new Triangle();
                break;
            case 'Circle':
                shape = new Circle();
                break;
        }
        shape.addColor(answers.shapeColor);
        const logo = new Shape(shape, answers.characters, answers.characterColor);
        fs.writeFileSync('./examples/' + answers.fileName + '.svg', svg.render());
        console.log(`Generated ${answers.fileName}.svg and saved in /examples.`)
    })
}

//call to initialize the application
getUserSpecs();