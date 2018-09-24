/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const isOperation = s => {
    return s === "+" || s === "-" || s === "*" || s === "/";
  }

  const eval = (value1, value2, operation) => {
    value1 = Number.parseInt(value1);
    value2 = Number.parseInt(value2);
    if (operation === "+") return value1 + value2;
    if (operation === "-") return value1 - value2;
    if (operation === "*") return value1 * value2;
    if (operation === "/") return value1 / value2;
  }

  while(tokens.length > 0) {
    if (tokens.length === 1) return Number.parseInt(tokens[0]);
    const index = tokens.findIndex(isOperation) - 2;
    const value1 = tokens[index];
    const value2 = tokens[index + 1];
    const operation = tokens[index + 2];
    const value = eval(value1, value2, operation);
    tokens.splice(index, 3, value);
  }
};