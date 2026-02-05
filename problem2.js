/**
 * Student Marks Analyzer
 *
 * function name: analyzeMarks(markObj)
 *
 * statement:
 * Return total marks, highest scoring subject, and lowest scoring subject
 *
 * Test Case 1
 *  Input: {math: 78, english: 65, physics: 88, bangla: 55}
 *
 *  Output: {total: 286, average: 71.5, highest: "physics", lowest: "bangla"}
 *
 * Test Case 2
 *  Input: {ict: 90, biology: 90, chemistry: 70}
 *
 *  Output: {total: 250, average: 83.33, highest: "ict", lowest: "chemistry"}
 */

function analyzeMarks(markObj) {
  let total = 0;
  let highestMark = -Infinity;
  let lowestMark = Infinity;

  let highestSubject = null;
  let lowestSubject = null;
  for (let subject in markObj) {
    let mark = markObj[subject];

    total += mark;

    if (mark > highestMark) {
      highestMark = mark;
      highestSubject = subject;
    }

    if (mark < lowestMark) {
      lowestMark = mark;
      lowestSubject = subject;
    }
  }
  let average = total / Object.keys(markObj).length;

  return {
    total,
    average,
    highestSubject,
    lowestSubject,
  };
}

let output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
console.log(output);
