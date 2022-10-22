const request = require("request");
request("https://www.worldometers.info/",cb);
function cb(err,res,body)
{
    console.error("error",err);
    console.log(res);
    console.log(body)
}