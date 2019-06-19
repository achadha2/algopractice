var firstUniqChar = function(s) {
  if (s.length < 1) {
    return -1;
  }
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    if (s.indexOf(c) === i && s.indexOf(c, i + 1) === -1) {
      return i;
    }
  }
  return -1;
};
