const { exec } = require('child_process');

const command = 'python ./main.py';

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing command: ${error}`);
    return;
  }
  console.log(`Command output: ${stdout}`);
});
