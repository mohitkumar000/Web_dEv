const fs = require('fs');

let data = fs.readFileSync("f1.txt",cb);
console.log("before");
function cb(err,data) {
    if(err)
    {
        console.log(err);
    }
    console.log(data);
}
console.log("after");