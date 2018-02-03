/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  let v1 = 0;
  let v2 = 0;

  // use "*" instead of "**"
  while(p.indexOf("**") !== -1) {
    p = p.replace("**", "*");
  }

  let v1Restart = -1;
  let v2Restart = -1;
  while(v1 < s.length) {
    if (v2 < p.length && p[v2] === "*") {
      v1Restart = v1 + 1;
      v2Restart = v2;
      ++v2;
    } else if (v2 < p.length && (p[v2] === "?" || s[v1] === p[v2])) {
      ++v1;
      ++v2;
    } else if (v1Restart !== -1) {
      v1 = v1Restart;
      v2 = v2Restart;
    } else {
      break;
    }
  }

  // if code comes here, v1 must === s.length
  if (v1 < s.length) return false;
  while(v2 < p.length && p[v2] === "*") {
    ++v2;
  }
  return v2 === p.length;
};

isMatch("aaaa", "***a")