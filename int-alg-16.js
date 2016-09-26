// FreeCodeCamp Intermediate Algorithm 16 - Finders Keepers
// Solution by Quinn James

function findElement(arr, func) {
  var filtered = arr.filter(func);

  return filtered[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
