// FreeCodeCamp Intermediate Algorithm 21 - Arguments Optional
// Solution by Quinn James

// TASK:
//// Create a function that sums two arguments together.
//// If only one argument is provided, then return a function that expects one argument and returns the sum.
//// If either argument isn't a valid number, return undefined.

function addTogether() {
  var len = arguments.length;
  for (var x = 0; x < len; x++) {
    // Use typeof to check for numberness
    if (typeof(arguments[x]) !== 'number')
      return undefined;
  }

  if (len === 2) {
    return arguments[0] + arguments[1];
  } else if (len === 1) {
    var first_number = arguments[0];
    // Create a closure if provided only one argument
    return function(second_number) {
      if (typeof(second_number) != 'number')
        return undefined;
      return first_number + second_number;
    };
  } else {
    return undefined;
  }
}
