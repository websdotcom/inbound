module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('answers.yahoo.com') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'yahooanswers'
    });
  } else {
    return callback(null, false);
  }

};