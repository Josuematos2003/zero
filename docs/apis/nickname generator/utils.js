const { wordCases } = require("./constants");

/**
 * Pick a random element from an array.
 * @template T
 * @param {Array.<T>} array - An array of anything.
 * @return {T} A random element from array.
 */
function getRandomElement(array) {
  if (!array || array.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * Math.floor(array.length));
  return array[randomIndex];
}

/** Generate a random digit */
function getRandomDigit() {
  return Math.floor(Math.random() * Math.floor(10));
}

/**
 * Format a word with a specified a case
 * @param {string} word - An array of anything.
 * @param {string} wordCase - An array of anything.
 * @param {number} index - An array of anything.
 * @return {string} A random element from array.
 */
function format(word, wordCase, index) {
  if (wordCase === wordCases.camelCase) {
     return capitalize(word);
  } else if (wordCase === wordCases.hungarian) {
    return (index === 0) ? word.toLowerCase() : capitalize(word);
  } else if (wordCase === wordCases.upper) {
    return word.toUpperCase();
  } else if (wordCase === wordCases.lower) {
    return word.toLowerCase();
  } else {
    return word;
  }
}

function capitalize(word) {
  if (typeof word !== 'string') {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

module.exports = {
    getRandomElement,
    getRandomDigit,
    format
}
