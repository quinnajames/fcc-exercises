function translatePigLatin(str) {
  var vowels = ["A", "E", "I", "O", "U"];
  var firstChar = str.substr(0, 1);
  if (vowels.indexOf(firstChar.toUpperCase()) !== -1) // input starts with a vowel
  {
    str += "way";
    return str;
  } else {

    var firstVowelPos = null;
    var strArray = str.split("");
    for (var x = 0; x < strArray.length; x++) {
      if (vowels.indexOf(strArray[x].toUpperCase()) !== -1) {
        if (firstVowelPos === null) {
          firstVowelPos = x;
          x = strArray.length; // we've found the first vowel so it's finished
        }
      }
    }

    if (firstVowelPos === null) // within an else clause
    {
      return str; // input is just consonants, return as-is
    } else {
      var initialConsCluster = str.slice(0, firstVowelPos);
      var swappedString = str.slice(firstVowelPos) + initialConsCluster + "ay";
      return swappedString;
    }

  }

}

// Test output
document.write(translatePigLatin("consonant"));
document.write("<br />")
document.write(translatePigLatin("owl"));
document.write("<br />")
document.write(translatePigLatin("pfennig"));
document.write("<br />")
document.write(translatePigLatin("pdx"));
document.write("<br />")
document.write(translatePigLatin("shell skirt"));
