var firstUniqChar = function (s) {
  let count = {};
  for (let char of s) {
    if (count[char]) {
      count[char] += 1;
    } else {
      count[char] = 1;
    }
  }

  for (let char in count) {
    if (count[char] == 1) {
      return s.indexOf(char);
    }
  }
  return -1;
};
console.log(firstUniqChar("hhlloo"));
