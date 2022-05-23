function longestRepetition(s) {
  
  if (s.length > 0) {
    const letterArray = [];
    letterArray.push(...s);
    let strike = 0;
    const results = [];
    const symbols = [];
    for (i = 0; i <= letterArray.length; i++) {
      if (letterArray[i] === letterArray[i - 1]) {
        strike += 1;
      } else {
        symbols.push(letterArray[i - 1]);
        results.push(strike + 1);
        strike = 0;
      }
    }

    results.shift();
    symbols.shift();

    const numberOfMostRepeatingSymbols = Math.max.apply(null, results);
    const mostRepeatingSymbol =
      symbols[results.indexOf(numberOfMostRepeatingSymbols)];

    return [mostRepeatingSymbol, numberOfMostRepeatingSymbols];
  }

  return ["", 0];
}


