//call the required modules as global variables
const fs = require('fs')
const inquirer = require('inquirer')
const validator = require('validator')
const { Circle, Rectangle, Triangle, Form } = require('./lib/shapes.js')
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
                return true; /* I don't know why this is........ */
            },
        },
        {
            type: 'input',
            name: 'characterColor',
            message: colors.emeraldGreen('\n\nPlease enter what color you want these characters to be. You may do so by simply entering a common color name. Or, if you have a particular hue in mind and you know the 6-digit hexadecimal identifier (0-9, A-F), you may enter that 6-digit hexidecimal to identify your chosen color.'),
            /* Do I need to validate?? */
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
            /* Again, do I need to validate? */
        },
    ])
    .then()
}

//call to initialize the application
getUserSpecs();