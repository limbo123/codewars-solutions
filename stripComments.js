function solution(input, markers) {
  const inputArr = input.split("");
  inputArr.push("\n");
  let result = inputArr.join("");
  inputArr.forEach((symbol, _, arr) => {
    if (markers.includes(symbol)) {
      const slicedArr = arr.slice(arr.indexOf(symbol));
      const finalSlicedArr = slicedArr
        .slice(0, slicedArr.indexOf("\n"))
        .join("");
      result = result.replace(finalSlicedArr, "");
    }
  });

  return result.replace(" \n", "\n").trim();
}
