//project file orgniser main page

let helpFunc = require('./commands/help');

// console.log(helpFunc.help());

let inputArr=process.argv.slice(2);
let command=inputArr[0];
let path=inputArr[1];
switch(command) {
    case "tree":
        //call tree function
        console.log("this is a tree function"+path);
        break;

    case "oranize":
        //call organize functions
        break;
    case "help":
        //call help function
        helpFunc.help();
        break;
    default:
        console.error("command not recognised");
        break;
}