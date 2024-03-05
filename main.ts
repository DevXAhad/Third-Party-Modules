import inquirer from "inquirer";
let country = await inquirer.prompt([{
    name : "Nationality",
    type : "string",
    message : "Enter your nationality:"
}])
console.log("I aim to be one of the aspiring GenAI developers from " + (country = country.Nationality) + ", hopefully");