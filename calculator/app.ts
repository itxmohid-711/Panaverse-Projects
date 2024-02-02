import inquirer from 'inquirer';

function main(){
    inquirer
  .prompt([
    {
        type:"input",
        name:"num1",
        message:"enter first number"
    },
    {
        type:"input",
        name:"num2",
        message:"enter second number"
    },
    {
        type:"list",
        name:"operation",
        message:"Choose an operation",
        choices: ["+", "-", "*", "/"]
    }
  ])
  .then((answers) => {
    const num1 = Number(answers.num1);
    const num2 = Number(answers.num2);
    const operation = answers.operation;

    if (operation=="+"){
        sum(num1,num2)
    } else if(operation=="-"){
        subtract(num1,num2)
    } else if(operation=="*"){
        multiply(num1,num2)
    } else if(operation=="/"){
        division(num1,num2)
    } else{
        console.log("Operation not Found");
    }
})
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log("Something else went wrong");
    }
  });
}

function sum(num1:number ,num2:number){
        const result= num1+num2;
        console.log("sum",result);
        
}
function subtract(num1:number ,num2:number){
        const result= num1-num2;
        console.log("subtract",result);
        
}
function division(num1:number ,num2:number){
        const result= num1/num2;
        console.log("division",result);
        
}
function multiply(num1:number ,num2:number){
        const result= num1*num2;
        console.log("multiply",result);
        
}
main();


export{}