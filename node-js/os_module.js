const os = require("os");
/*this module provides function that you can use retrive information about
the operating system and iteract with it */

let mySystemArchitecture = os.arch();
//to print the architecture of computer
console.log(mySystemArchitecture);

//return inormation on cpu

let MyCpuInfo = os.cpus();
console.log(MyCpuInfo);

//return host name of the operating system as a string

let hostName = os.hostname();
console.log(hostName);

//return network address of the operating system

let networkAddress =os.networkInterfaces();
console.log(networkAddress);


