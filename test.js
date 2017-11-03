const fs = require('fs');
// const React = require('react');
// import { mount } from 'enzyme';

// actual url var (uncomment for production) gets url from CLI "npm start [url]"
// let url = process.argv[2];
// testing url var
let url = ('./../css-color-palatte/src/main.js');

var appFileContents = fs.readFileSync(url).toString();

// code prepended to copied file that include why-did-you-update
let prependCode = '// begin prepend \nimport "why-did-you-update"; \nconst {whyDidYouUpdate} = require("why-did-you-update"); \n//endprepend';

// creates new file, and includes prepended code before original file's code
fs.writeFile("reactoptAppFile.js", prependCode + appFileContents, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 