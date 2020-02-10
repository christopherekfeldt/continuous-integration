exports.countNonSlashCharacters = function(url) {
    return url.replace('|', '').length;
  }
  