// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const alpha = ['a', 'b', 'c', 'd', 'e',
                 'f', 'g', 'h', 'i', 'j',
                 'k', 'l', 'm', 'n', 'o',
                 'p', 'q', 'r', 's', 't',
                 'u', 'v', 'w', 'x', 'y',
                 'z'];

  //if encode === true, this encoder function will take in the array of letters as well as the substittiion alphabet
  //split into the subChars array and return the encoded word joined into a string
  function encoder(array, subChars) {
    const result = [];
    for (let i=0; i<array.length; i++) {
      if (array[i] === " ") {
        result.push(array[i]);
      } else {
        let index = alpha.findIndex(letter => letter === array[i]);
        let letter = subChars[index];
        result.push(letter);
      };
    };
    return result.join('');
  };

  //if encode === false, this decoder function will take in the array of letters as well as the substitution alphabet
  //split into the subChars array and return the decoded word joined into a string
  function decoder(array, subChars) {
    const result = [];
    for (let i=0; i<array.length; i++) {
      if (array[i] === " ") {
        result.push(array[i]);
      } else {
        let index = subChars.findIndex(letter => letter === array[i]);
        let letter = alpha[index];
        result.push(letter);
      };
    };
    return result.join('');
  };

  //the actual substitution function that will be tested is below. based on the value of encode the letters will be fed
  //into the appropriate functions above and return the result of that function
  function substitution(input, alphabet, encode = true) {
    //these first 3 lines of code are for error handling
    if (!alphabet || alphabet.length !== 26) return false;
    let subChars = alphabet.split('');
    for (let i=0; i<subChars.length; i++) {
      const first = subChars.indexOf(subChars[i]);
      const last = subChars.lastIndexOf(subChars[i]);
      if (first !== last) return false;
    };
    let lower = input.toLowerCase();
    let array = lower.split('');
    if (encode === true) {
      return encoder(array, subChars);
    } else {
      return decoder(array, subChars);
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
