Nickname generator - French version only

Combine words to create a unique nickname.

Inspired by Xbox Live Gamertag's generator.

## Install
You can install it through [NPM](https://www.npmjs.com/package/nickname-generator):

```sh
npm install nickname-generator
```

## Usage

```
const generator =  require('nickname-generator');

const nickname = generator.randomNickname();

const nickname = generator.randomNickname({ locale: 'fr', separator: '-', suffixLength: 0 });
```

### Params

__randomNickname method can take an optional object parameter with these attributes:__

<pre>
  <b>numberOfWords</b>: (int) number of words to combine
  <b>suffixLength</b>: (int) number of random digits to append
  <b>includes</b>: (array of categories) categories to includes. Generator will randomly pick up words from these categories. A nickname can't be composed with multiple words from the same category.
  <b>locale</b>: (string) language to use for the words. Supported languages are: 'en', 'fr'
  <b>separator</b>: (string) separator between words. Any character(s)
  <b>wordCase</b>: (string) case to use between 'lower', 'upper', 'camelCase', 'hungarian'
</pre>


| Category    | Description |
| ----------- | ----------- |
| fruits      | List of fruits       |
| animals     | List of animals        |
| flowers     | List of flowers        |
| instruments | List of music instruments        |
| objects     | List of daily life objects        |
| clothes     | List of clothes and accessories        |
| body        | List of b  ody parts      |
| weather     | List of weather-related words        |
| games       | List of game-related words        |
| sports      | List of sport-related words        |
| jobs        | List of jobs        |
| adjectives  | List of neutral adjectives        |
| video_games | List of videogame-related words        |

 __If no argument is provided to randomNickname, it will use the default parameters :__

<pre>
<b>const defaultParams</b> = {
  // Categories to include. Empty array or null will includes everything
  <b>includes</b>: [],
  // Number of digits at the end of the nickname
  <b>suffixLength</b>: 2,
  // Number of words to combine
  <b>numberOfWords</b>: 2
  // The language to use for the words. Only supports English ('en') and French ('fr')
  <b>locale</b>: constants.locales.en,
  // Separator between words
  <b>separator</b>: '',
  // Case to use
  <b>wordCase</b>: constants.wordCases.camelCase
}
</pre>

## License
Released under the MIT license.
