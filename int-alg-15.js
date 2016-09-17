// FreeCodeCamp Intermediate Algorithm 15 - Smallest Common Multiple
// Solution by Quinn James

// TASK:
//// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
//The range will be an array of two numbers that will not necessarily be in numerical order.

function smallestCommons(arr) {

  if (arr[0] > arr[1]) // if range is out of order, put it in order
    {
      var swap = arr[1];
      arr[1] = arr[0];
      arr[0] = swap;
    }

  var SCM = NaN;
  var maxSCM = arr[0];
  for (var l = arr[0]; l <= arr[1]; l++) // Least common multiple cannot be
    {                                    // greater than the multiple of all
      maxSCM *= l;                       // numbers in the range.
    }
  var x = arr[1] - 1;

  while (x <= maxSCM && isNaN(SCM))  // Checking against infinite loops
    {
      x++;
      var divisibleByAll = true;
      for (var y = arr[0]; y <= arr[1]; y++)
      {
        if (x % y !== 0)
          {
            divisibleByAll = false;
          }
      }
      if (divisibleByAll)
        {
          SCM = x;
        }
    }
  return SCM;
}
