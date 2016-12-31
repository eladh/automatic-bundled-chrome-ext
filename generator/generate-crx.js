/* global require, __dirname, Buffer */
'use strict';

var fs = require("fs");
var ChromeExtension = require("crx");
var join = require("path").join;
var privateKey = fs.readFileSync(join(__dirname, "key.pem"));

var argv = require('minimist')(process.argv.slice(2));

var manifestLocation = join(__dirname, argv.extName + "/manifest.json");
var manifestFile = require(manifestLocation);

manifestFile.update_url = argv.codebase + "/update.xml";
manifestFile.version = argv.version;

fs.writeFile(manifestLocation,JSON.stringify(manifestFile, null, 2));

function newCrx(){
  return new ChromeExtension({
    privateKey: privateKey,
    codebase: argv.codebase + argv.extName + ".crx",
    rootDirectory: join(__dirname,  argv.extName)
  });
}
  var crx = newCrx();
  console.log("Creating CRX File  - "  + __dirname);

  crx.pack().then(function(packageData){
    var updateXML = crx.generateUpdateXML();
    fs.writeFile(join(__dirname, "target/update.xml"), updateXML);
    fs.writeFile(join(__dirname, "target/" + argv.extName + ".crx"), packageData);
  })
  .catch("got it!");
