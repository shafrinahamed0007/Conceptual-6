/**
 * Word Frequency Counter
 * Function name: wordFrequency(sentence)
 * statement: Count how many times each word appears in a sentence and return the result as an object.
 *
 * Rules:
 *    1. Ignore case difference
 *    2. Ignore extra spaces
 *
 * Test case 1:
 *  Input: "I love JS and I love coding and JS is fun"
 *  Output: {i:2, love: 2, js: 2, and: 2, coding: 1, is:1, fun:1}
 *
 * Test case 2:
 *  Input: " Hello hello HELLO"
 *  Output: {hello: 3}
 */

function wordFrequency(sentence) {
  let sentenceArr = sentence.trim().split(" ");
  let wordCount = {};

  for (let word of sentenceArr) {
    let wordLowerCase = word.toLowerCase();
    if (wordCount.hasOwnProperty(wordLowerCase)) {
      wordCount[wordLowerCase]++;
    } else {
      wordCount[wordLowerCase] = 1;
    }
  }
  return wordCount;
}

const sentence = "I Love JS and I love coding and JS is fun ";
const wordFrequencyCount = wordFrequency(sentence);
console.log(wordFrequencyCount);

const sentence2 = " Hello hello HELLO";
const wordFrequencyCount2 = wordFrequency(sentence2);
console.log(wordFrequencyCount2);
