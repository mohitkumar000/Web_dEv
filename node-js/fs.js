//fs module-> it helps to make file folder append data into them read data delete data
const fs = require('fs');

//to create a file a input data
//append file sync appends data into the file if file is notn created it creates the file then append the data in it

fs.appendFileSync("f1.txt",'hello i am f1 file');


let data = fs.readFileSync("f1.txt");
let data1 = fs.readFileSync("f1.txt","");

console.log(data1);