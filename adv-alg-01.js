// FreeCodeCamp Advanced Algorithm 1 - Validate US Telephone Numbers
// Solution by Quinn James

function telephoneCheck(str) {
  var regexp = new RegExp(/(^(1\s)?[0-9]{10}$)|(^((1\s)?([0-9]{3}(\s|-))|^((1\s)|1)?\([0-9]{3}\)(\s|-)?)[0-9]{3}(\s|-)[0-9]{4}$)/gm);
  // First part of regexp: accept lines consisting solely of 10 numbers
  // Second part of regexp: accept either numbers with () or without () around the area code [but not just ( or )]
  // Within both subparts of second part, accept optional spaces or dashes between the components of the phone #
  // The area code is required and spaces don't have to surround the ()
  // Again, in the second part, can't have anything outside of the 10 numbers in the line
  return regexp.test(str);
}
