//call the required modules as global variables
const fs = require('fs')
const inquirer = require('inquirer')
const validator = require('validator')
const {Circle, Rectangle, Triangle, Logo} = require('./lib/shapes.js')
const colors = require('colors')

function getUserSpecs() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'characters',
            message: colors.green("\n\n-----Please enter **up to 3** characters around which you would like to build your logo.-----"),
            validator: (input) => {
                const maxChars = 3;
                if (input.length > maxChars) {
                    return colors.indigo(colors.bgGold("\n\n-----You entered too many characters: 3 is **the most** you make choose to use. Please try again.-----"));
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: colors.green('\n\n-----Please enter the color you want these characters to be. You may do so by simply entering a common color name. Or, if you have a particular hue in mind and you know the 6-digit hexadecimal identifier (0-9, A-F), you may enter that 6-digit hexidecimal, BEGINNING WITH # (e.g., #111FFF) to identify your chosen color.-----'),
        },
        {
            type: 'list',
            name: 'shape',
            message: colors.green('\n\n-----Please choose the shape of your logo.-----'),
            choices: [Circle, Triangle, Rectangle],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: colors.green('\n\n-----Please enter the color of your logo. Again, you may do so by common color name or by 6-digit hexadecimal beginning with #.-----'),
        },
        {
            type: 'input',
            name: 'fileName',
            message: colors.green("\n\n-----What name would you like for your logo's .svg file?-----"),
            validator: (input) => {
                const files = fs.readdirSync('./examples/');
                for (i = 0; i < files.length; i++) {
                    if (files[i] === `${input}.svg`) {
                        return colors.green('\n\n -----Oops. That name is already taken. Please choose another name for your .svg file.-----');
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
        shape.addColor(answers.shapeColor, answers.textColor);

        const logo = new Logo(shape, answers.characters, answers.textColor);

        fs.writeFileSync('./examples/' + answers.fileName + '.svg', logo.render());
        
        console.log(`\n\n------Generated ${answers.fileName}.svg and saved in /examples.------`)
    })
}

//call to initialize the application
getUserSpecs();