/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const consonantsList = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir samhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (typeof str !== 'string') return null;
  if (str.length === 0) return '';
  const words = str.split(' ');
  let longestWord = words[0];
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}


function shortest(str) {
  if (typeof str !== 'string') return null;
  if (str.length === 0) return '';
  const words = str.split(' ');
  let shortestWord = words[0];
  for (let word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}

function reverse(str) {
  if (typeof str !== 'string') return null;
  if (str.length === 0) return '';
  return str.split('').reverse().join('');
}

function palindroame(str) {
  if (typeof str !== 'string') return false;
  const cleanedStr = str.toLowerCase().replace(/\s+/g, '');
  return cleanedStr === cleanedStr.split('').reverse().join('');
}


function vowels(str) {
  if (typeof str !== 'string') return 0;
  const vowelList = 'aeiouyáéýúíóöæ';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowelList.includes(char)) {
      count++;
    }
  }
  return count;
}


function consonant(str) {
  if (typeof str !== 'string') return 0;
  const consonantList = 'bdðfghjklmnprstvxþ';
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (consonantList.includes(char)) {
      count++;
    }
  }
  return count;
}

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  alert('Welcome to the string processing program! Enter a string to get information about it.');

  const input = prompt('Enter a string:');
  if (input === null || input.trim() === '') return;

  const longestWord = longest(input);
  const shortestWord = shortest(input);
  const reversed = reverse(input);
  const vowelCount = vowels(input);
  const consonantCount = consonant(input);
  const ispalindroame = palindroame(input);

  alert(`Longest word: ${longestWord}\n` +
    `Shortest word: ${shortestWord}\n` +
    `Reversed string: ${reversed}\n` +
    `Number of vowels: ${vowelCount}\n` +
    `Number of consonant: ${consonantCount}\n` +
    `Is palindroame: ${ispalindroame ? 'Yes' : 'No'}`);

  const doAgain = confirm('Do you want to try again?');
  if (doAgain) {
    start();
  }
}


console.assert(longest('hello world!') === 'world!', 'longest() does not work correctly');
console.assert(shortest('hello world!') === 'hello', 'shortest() does not work correctly');
console.assert(reverse('hello') === 'olleh', 'reverse() does not work correctly');
console.assert(vowels('hello') === 2, 'vowels() does not work correctly');
console.assert(consonant('hello') === 3, 'consonant() does not work correctly');
console.assert(palindroame('abba') === true, 'palindroame() does not work correctly');
console.assert(palindroame('abc') === false, 'palindroame() does not work correctly');

