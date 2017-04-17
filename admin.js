//Vendor
var fs = require("fs");
var result;
//
exports.history = function(){
  fs.readFile("log.txt", "utf8", function(err, data) { 
    if (err) {
      console.log("Error: " + err + ".")
    }
    else {
      console.log(data);
    }
  });
}