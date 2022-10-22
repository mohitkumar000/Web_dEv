const request = require("request");
const cheerio = require("cheerio");
//cheerio
//cheerio parses html and it traverses html so that data can be manipulated according to user neeed
request("https://www.worldometers.info/",cb);
function cb(err,res,body)
{
    console.error("error",err);
    console.log(res);
    console.log(body)
} 