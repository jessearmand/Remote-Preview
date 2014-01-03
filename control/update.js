var fs = require('fs');

function isUrl(url) {
  console.log('isURL: ' + url);

  var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
  return regexp.test(url);
}

var update = function(text, handler) {
  if (!isUrl(text)) {
    handler(null, 'Invalid url given!');
    return;
  }

  fs.writeFile('url.txt', text, function (error) {
    if (error) handler(error, 'url.txt not writable by webserver.');
    else handler(null, 'Success! Go check your devices.');
  });
};

module.exports = update;
