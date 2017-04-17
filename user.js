// Vendor
var weather = require("weather-js");
//Author
exports.submission = function(city){
  
  weather.find({ search: city }, function(err, weatherInfo) {
    if (err) {
      result = [""\n"", "\n Sorry we don't have enough data on that location! Try somewhere else.", ""\n""];
    }
    else {
      result = weatherInfo;
    }
    return result;
  });
}
