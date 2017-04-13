var fs = require("fs");

exports.history = function(){
  fs.readFile("log.txt", "utf8", function(err, data) { 
    if (err) {
      result = err;
    }
    else {
      result = data;
    }
    return result;
  });
}