/**
 * Password Strength Checker
 * Function Name; checkPassword(password)
 * Rules:
 *   1. Length must be at least 8
 *   2. Must contain at least 1 number
 *   3. Must contain at least 1 uppercase letter
 *   4. Must not contain spaces
 *
 * Test Case - 1
 *  Input: "helloWord"
 *  Output: {valid: false, reason: ['missing number]}
 */

function checkPassword(password) {
  let reasons = [];
  let length = password.length;
  let hasUppercase = false;
  let hasNumber = false;
  let hasSpace = password.includes(" ");

  for (let i = 0; i < length; i++) {
    let character = password[i];

    if (character >= "0" && character <= "9") {
      hasNumber = true;
    }
    if (character >= "A" && character <= "Z") {
      hasUppercase = true;
    }
  }


  if (!hasNumber) {
    reasons.push("Missing Number");
  }

  if (!hasUppercase) {
    reasons.push("Missing Uppercase");
  }

  if (hasSpace) {
    reasons.push("Space found");
  }
  let isValid = reasons.length === 0;

  return {
    valid: isValid,
    reasons,
  };
}

let output = checkPassword("helloWorld");
// console.log(output);
let output2 = checkPassword("Hello123");
console.log(output2);
