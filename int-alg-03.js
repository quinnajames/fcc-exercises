// FreeCodeCamp Intermediate Algorithm 3 - Roman Numeral Converter
// Solution by Quinn James

function digitparse(digit, s, m, l) {
  //create an array to store the roman numeral
  var romandigit = [];
  //if the digit exists:
  digit = parseInt(digit);
  //0: add nothing to the end
  if (digit < 1) { return ""; }
  //otherwise:
  //three possible values per digit: s, m, l.
    //5: add one m
    //4: add sm
    //9: add sl
    //1-3: add that number of s
    //6-8: add one m, plus that number of s
  else if (digit == 5) { romandigit.push(m); }
  else if (digit == 4) { romandigit.push(s, m); }
  else if (digit == 9) { romandigit.push(s, l); }
  else
  {
    if (digit > 5){ romandigit.push(m);}
    for (var a = 0; a < digit % 5; a++)
      { romandigit.push(s); }
  }
  return romandigit.join("");
}
function convertToRoman(num) {
  var roman = [];
  num = num.toString();
  //conversion (s, m, l):
  ////last digit: [I, V, X]
  ////second to last digit: [X, L, C]
  ////third to last digit: [C, D, M]
  roman.push(digitparse(num.substr(-1), 'I', 'V', 'X'));
  if (num.length > 1)
  {
    roman.unshift(digitparse(num.substr(-2, 1), 'X', 'L', 'C'));
    if (num.length > 2)
    {
      roman.unshift(digitparse(num.substr(-3, 1), 'C', 'D', 'M'));
      //thousands digit is an exception: just add that number of ms
      if (num.length > 3)
      {
        var thousands = parseInt(num.slice(0, -3));
        for (var x = 0; x < thousands; x++) { roman.unshift('M'); }     
      }
    }
   }
  //convert the array into a string and return it.
  return roman.join("");
}

