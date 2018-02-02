/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  // "123" * "4" => [4, 9, 2]
  // "44" * "3" => [1, 3, 2]
  const mul = (a, b) => {
    if (b === "0") return [0];

    let result = [];
    let left = 0;
    for(let i = a.length - 1; i >= 0; --i) {
      let temp = a[i] * b + left;
      temp > 9 ? left = Number.parseInt(temp / 10) : left = 0;
      if (temp > 9) temp = temp - left * 10;
      result.unshift(temp);
    }
    if (left > 0) result.unshift(left);

    return result;
  }

  const plus = (a, b) => {
    const maxLength = Math.max(a.length, b.length);
    a = a.reverse();
    b = b.reverse();
    let result = [];
    let left = 0;
    for (let i = 0; i < maxLength; ++i) {
      let temp = 0;
      if (i < a.length && i < b.length) {
        temp = a[i] + b[i];
      } else if (i >= a.length) {
        temp = b[i];
      } else {
        temp = a[i];
      }
      temp = temp + left;
      temp > 9 ? left = 1 : left = 0;
      if (temp > 9) temp = temp - 10;
      result.unshift(temp);
    }
    if (left > 0) result.unshift(left);

    return result;
  }

  if (num1 == "0" || num2 == "0") return "0";
  let result = [];
  for(i = 0; i < num2.length; ++i) {
    let multiValue = mul(num1, num2[i]);
    result.push(0);
    result = plus(result, multiValue);
  }

  return result.join("");
};