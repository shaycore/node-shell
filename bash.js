const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

//Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    dataSplit = data.toString().trim().split(' ');
    const cmd = dataSplit[0];
    const arg = dataSplit[1];
    // const cmd = data.toString().trim();
    // process.stdout.write('You typed: ' + cmd);
    // process.stdout.write('\nprompt > ');
    if (cmd === 'pwd') {
        pwd();
    } else if (cmd === 'ls') {
        ls();
    } else if (cmd === 'cat') {
        cat(arg);
    }
});
