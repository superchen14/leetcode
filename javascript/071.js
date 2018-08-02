/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
  const subPaths = path.split("/");
  const stack = [];
  subPaths.forEach(subPath => {
    if (subPath === "" || subPath === ".") return;
    if (subPath === "..") {
      if (stack.length > 0) { stack.pop(); }
      return;
    }
    stack.push(subPath);
  });

  return "/" + stack.join("/");
};