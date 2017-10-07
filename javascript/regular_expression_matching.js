/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  function isSubpatternsMatch(s, subpatterns) {
    if (subpatterns.length === 0 && s.length === 0) return true;
    if (subpatterns.length === 0) return false;

    var subpattern = subpatterns[0];
    if (subpattern.length === 1) {
      if (s.length === 0) return false;
      if (subpattern === ".") {
        return isSubpatternsMatch(s.substring(1), subpatterns.slice(1));
      } else {
        if (s[0] === subpattern) {
          return isSubpatternsMatch(s.substring(1), subpatterns.slice(1));
        } else {
          return false;
        }
      }
    } else {
      if (subpattern == ".*") {
        if (subpatterns.length === 1) return true;
        for(var j = 0; j < s.length; ++j) {
          if (isSubpatternsMatch(s.substring(j), subpatterns.slice(1))) return true;
        }
        return false;
      } else {
        var character = subpattern[0];
        if (isSubpatternsMatch(s, subpatterns.slice(1))) return true;
        if (s[0] === character) {
          return isSubpatternsMatch(s.substring(1), subpatterns);
        } else {
          return false;
        }
      }
    }
  }

  var subpatterns = [];
  var i = 0;
  while (i < p.length) {
    var currentCharacter = p[i];
    if (i == p.length - 1) {
      subpatterns.push(currentCharacter);
      break;
    }

    var nextCharacter = p[i + 1];
    if (nextCharacter == "*") {
      subpatterns.push(currentCharacter + nextCharacter);
      i = i + 2;
    } else {
      subpatterns.push(currentCharacter);
      ++i;
    }
  }

  return isSubpatternsMatch(s, subpatterns);
};

isMatch("aabcbcbcaccbcaabc", ".*a*aa*.*b*.c*.*a*");