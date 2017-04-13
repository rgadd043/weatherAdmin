var user = require("./user.js");
var admin = require("./admin.js");
var fs = require("fs");
var result = [];
var command = "";

if (process.argv[2] === "user") {
  user.submission(process.argv[4]);
  command = "\ncommand: " + process.argv[2] + " name: " + process.argv[3] + "city: " + process.argv[4];
}

else if (process.argv[2] === "admin" && process.argv[3] === undefined) {
  admin.history();
}

else {
  console.log("admin | user <name city>");
}

console.log(result);

fs.appendFile("log.txt", command, function(err) {
  if (err) {
    console.log(err);
  }
});
