module.exports = function check(str, bracketsConfig) {
  bracketsConfig = bracketsConfig.map(function (d) { return d[0] + d[1]; });

  while (str.length) {
    let stopCheck = true;

    for (let brackets of bracketsConfig) {
      if (str.includes(brackets)) {
        str = str.replace(brackets, '');
        stopCheck = false;
      }
    }

    if (stopCheck) {
      break;
    }
  }

  if (str.length) {
    return false;
  }

  return true;
};
