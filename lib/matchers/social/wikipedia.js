module.exports = function (href, referrer, callback) {

  if (referrer.host && referrer.host.indexOf('wikipedia.org') !== -1) {
    return callback(null, {
      type: 'social',
      network: 'wikipedia'
    });
  } else {
    return callback(null, false);
  }

};