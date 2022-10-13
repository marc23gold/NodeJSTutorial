const ReadLine = require('readline');

const rl = ReadLine.createInterface({input : process.stdin, output : process.stdout});
let num1 = Math.floor((Math.random() * 10) +1);
let num2 = Math.floor((Math.random() * 10) +1);
let answer = num1 + num2;

 x = rl.question(`What is ${num1} + ${num2}? \n`, 
(userInput)=>{
    if(userInput.trim() == answer){
        console.log(`Correct ${userInput} is the right answer` );
        rl.close();
    }else {
        console.log('wrong')
        rl.close();
    }
});

rl.on('close',()=>{
    rl.setPrompt('\nAlright lets try again!\n');
    rl.prompt();
    rl.on('line', (userInput)=> { 
        x;
    })  
});