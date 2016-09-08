// FreeCodeCamp Intermediate Algorithm 2 - Drop It
// Solution by Quinn James

function dropElements(arr, func) {
  var filtered = arr.filter(func);
  if (filtered.length === 0)
    {
      return [];
    }

  else {

    var firstMatch = arr.indexOf(filtered[0]);

      return arr.slice(firstMatch);

  }
  
}

dropElements([1, 2, 3], function(n) {return n < 3; });
