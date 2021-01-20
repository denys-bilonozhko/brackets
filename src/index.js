module.exports = function check(str, bracketsConfig) {
  let bracketPair = '';

  while (str.length) {
    let stopCheck = true;

    for (let i of bracketsConfig) {
      bracketPair = i[0] + i[1];

      if (str.includes(bracketPair)) {
        str = str.replace(bracketPair, '');
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
