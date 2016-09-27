// FreeCodeCamp Intermediate Algorithm 1 - Sum All Numbers in a Range
// Solution by Quinn James

function sumAll(arr) {
  // The input array is expected to be two numbers: the range's inclusive min and max.
  // (Not necessarily in ascending order.)
  // Hence, this for loop ADDS everything BETWEEN the two numbers to the original array.
  // When that's done, the array contains the minimum and maximium, and everything in between.
  for (var x = Math.min.apply(Math,arr) + 1; x < Math.max.apply(Math, arr); x++)
    {
      arr.push(x);
      console.log(x);
    }
  // It doesn't matter that it's unsorted since all we need to do is sum it.
  // Reduce works well for an accumulating value in an array.
  return arr.reduce(
    function(total, num) {
      return total + num;
    });
}
