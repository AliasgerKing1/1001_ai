const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the mode to use to compare: ", (solving_way) => {
    solving_way = parseInt(solving_way);
if(solving_way === 2) {
    rl.question("2) Enter the number of values to compare: ", (num_values) => {
      num_values = parseInt(num_values);
      const values = [];
    
      function promptValue(i) {
        if (i < num_values) {
          rl.question(`Enter value ${i + 1}: `, (value) => {
            values.push(parseFloat(value));
            promptValue(i + 1);
          });
        } else {
          rl.close();
          writeLogic(values);
        }
      }
    
      promptValue(0);
    
      function writeLogic(values) {
        const max_value = Math.max(...values);
        let greatest_value = 0;
    
        let logicCode = `value_list = [${values.join(', ')}]\n`;
        logicCode += `greatest_value = 0\n`;
        logicCode += `max_value = Math.max(...value_list)\n`;
    
        for (let i = 0; i < num_values; i++) {
          logicCode += `if (max_value === value_list[${i}]) {\n`;
          logicCode += `    greatest_value = value_list[${i}]\n`;
          logicCode += `    console.log('The greatest value is value ${i + 1} that is ' + greatest_value)\n`;
          logicCode += `}\n`;
        }
    
        logicCode += `if (greatest_value === 0) {\n`;
        logicCode += `    console.log('The greatest value is not in the list')\n`;
        logicCode += `}\n`;
    
        fs.writeFile("logic.js", logicCode, (err) => {
          if (err) throw err;
          console.log("Logic has been written to 'logic.js'.");
        });
      }
    });
}
else if(solving_way === 1) {
    rl.question("1) Enter the number of values to compare: ", (num_values) => {
      num_values = parseInt(num_values);
      const values = [];
    
      function promptValue(i) {
        if (i < num_values) {
          rl.question(`Enter value ${i + 1}: `, (value) => {
            values.push(parseFloat(value));
            promptValue(i + 1);
          });
        } else {
          rl.close();
          writeLogic(values);
        }
      }
    
      promptValue(0);
    
      function writeLogic(values) {
        let logicCode = `value_list = [${values.join(', ')}]\n`;
        logicCode += `greatest_value = value_list[0]\n`;
    
        for (let i = 0; i < num_values; i++) {
          for (let j = i + 1; j < num_values; j++) {
            const a = values[i];
            const b = values[j];
            logicCode += `a = value_list[${i}]\n`;
            logicCode += `b = value_list[${j}]\n`;
            logicCode += `if (a > greatest_value) {\n`;
            logicCode += `    greatest_value = a\n`;
            logicCode += `}\n`;
            logicCode += `if (b > greatest_value) {\n`;
            logicCode += `    greatest_value = b\n`;
            logicCode += `}\n`;
          }
        }
    
        logicCode += `console.log('The greatest value is ' + greatest_value);\n`;
    
        fs.writeFile("logic.js", logicCode, (err) => {
          if (err) throw err;
          console.log("Comparison logic has been written to 'logic.js'.");
        });
      }
    });
}

})