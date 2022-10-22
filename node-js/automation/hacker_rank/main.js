const puppeteer = require('puppeteer');

let browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport:null,
    args:["--start-maximized"],
    // executablePath:"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    


});
    browserOpenPromise
    .then(function(){
        console.log("browser is open ")
    })
