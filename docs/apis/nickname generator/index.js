const constants = require('./constants.js');
const utils = require('./utils');

const defaultConfig = {
  // Categories to include. Empty array or null will includes everything
  includes: [],
  // Number of digits at the end of the nickname
  suffixLength: 2,
  // Number of words to combine
  numberOfWords: 2,
  // The language to use for the words. Only supports English ('en') and French ('fr')
  locale: constants.locales.en,
  // Separator between words
  separator: '',
  // Case to use
  wordCase: constants.wordCases.camelCase
}

/**
 * Create a random nickname.
 * @param {Object} config Parameters for the nickname generation.
 * @param {Array.<string>} config.includes The categories of words to include. Null or empty will include everything.
 * @param {number} config.suffixLength The number of digits appended at the end.
 * @param {number} config.numberOfWords The number of words to combine.
 * @param {string} config.locale The locale to use.
 * @param {string} config.separator The separator between words.
 * @param {string} config.wordCase The case to use for words.
 * @return {string} A randomly generated nickname.
 */
exports.randomNickname = (config = defaultConfig) => {

  if (!Object.values(constants.locales).includes(config.locale)) {
    throw new Error("Locale not supported. Supported locales are: " + Object.values(constants.locales).map(String));
  }

  var data = require(constants.dataPath + config.locale + '.js').all;
  const allCategories = Object.keys(data);

  if (config.numberOfWords > allCategories) {
    throw new Error("Wrong config parameter 'numberOfWords' provided. Must be < " + allCategories.length + 1);
  }

  const includeAll = !config.includes || config.includes.length === 0;
  const selectedCategories = includeAll ? allCategories : config.includes;
  const nbOfWords = (typeof config.numberOfWords === 'number') ? config.numberOfWords : defaultConfig.numberOfWords;
  const nbOfDigits = (typeof config.suffixLength === 'number') ? config.suffixLength : defaultConfig.suffixLength;
  const separator = config.separator ? config.separator : defaultConfig.separator;
  const wordCase = config.wordCase ? config.wordCase : defaultConfig.wordCase;

  let availableCategories = allCategories.filter(cat => selectedCategories.includes(cat));

  let combinedWords = '';
  let suffix = '';

  // Generate words combination
  for (i = 0; i < nbOfWords; i++) {
    if (availableCategories.length === 0) {
      break;
    }
    const randomCategory = utils.getRandomElement(availableCategories);
    const randomWord = utils.getRandomElement(data[randomCategory]);
    const formattedWord = utils.format(randomWord, wordCase, i);
    // Remove current word's category for next iterations
    availableCategories = availableCategories.filter(cat => cat !== randomCategory);

    combinedWords += (i === 0 ? '' : separator) + formattedWord;
  }

  // Generate random number
  for (i = 0; i < nbOfDigits; i++) {
    const randomDigit = utils.getRandomDigit();
    suffix += randomDigit;
  }

  const nickname = combinedWords + suffix;

  return nickname;
}
