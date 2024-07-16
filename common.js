const strs = ["flower", "flow", "flight"];

const findLongestCommonPrefix = (arr) => {
  if (arr.length > 200) {
    return "";
  }
  for (const i of arr) {
    if (i.length > 200) {
      return "";
    }
    if (i !== i.toLowerCase()) {
      return "";
    }
  }
  let i = 0;
  while (arr[0][i] && arr.every((word) => word[i] === arr[0][i])) i++;

  return arr[0].substr(0, i);
};

console.log(findLongestCommonPrefix(strs));
