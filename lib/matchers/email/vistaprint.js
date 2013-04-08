
var querystring = require('querystring');

module.exports = function (href, referrer, callback) {

  var vpFlag = querystring.parse(href.query).em_link;
  
  if(vpFlag){
    return callback(null, { type: "email", sender: "vistaprint"});
  } else {
    return callback(null, false);
  }

};