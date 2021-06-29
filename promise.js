const fs = require("fs");

const getFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, (err, data) => {
            if (err) {
                reject(err) // vcalling reject will cause the promise to fail with
                return      // and we don't want to go any further
            }
            resolve(data)
        })
    })
}

getFile('/etc/passwd')
.then(data => console.log(data))
.catch(err => console.error(err));  
