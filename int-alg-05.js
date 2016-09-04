// FreeCodeCamp Intermediate Algorithm 5 - Search and Replace
// Solution by Quinn James

function myReplace(str, before, after) {
  if (before.slice(0,1) === before.slice(0,1).toUpperCase())
    {
      after = after.slice(0,1).toUpperCase() + after.slice(1);
    }
  return str.replace(before, after);
}

document.write(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped") + "<br />");
document.write(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

