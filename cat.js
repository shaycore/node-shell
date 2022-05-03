const fs = require('fs');

const cat = (arg) => {
    console.log(fs.readFile(arg, (err, result) => {
        if(err) {
            process.stdout.write(err);
        } else {
            process.stdout.write(result);
        }
    }));
    process.stdout.write('prompt > ');

};

module.exports = cat;