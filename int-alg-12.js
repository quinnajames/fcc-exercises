// FreeCodeCamp Intermediate Algorithm 12 - Spinal Tap Case
// Solution by Quinn James

// TASK:
//// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

function firstToLower(match) {
  return match.toLowerCase();
}

function hyphenate(match) {
  return "-" + match.toLowerCase();
}

function spinalCase(str) {

  // force the first letter to be lowercase
  str = str.replace(/[^A-Z]/g, firstToLower);
  // this turns camelcase into spinalcase
  str = str.replace(/[A-Z]/g, hyphenate);
  // strips out all spaces and underscores
  str = str.replace(/ |_/g, "-");
  // replaces all multiple hyphens with single hyphens
  str = str.replace(/-{2,}/g, "-");
  // strips all hyphens at the beginning of the string
  str = str.replace(/^-/g, "");
  return str;
}
