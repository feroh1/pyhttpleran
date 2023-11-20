var child_process = require('child_process');

// exec: spawns a shell.
child_process.exec('python3 ./main.py', function(error, stdout, stderr){
  console.log(stdout);
});
