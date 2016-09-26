/* FreeCodeCamp Advanced Algorithm #2 - Symmetric Difference */
/* Solution by Quinn James */

/* TASK: */
/* Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays. */

/* Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}). */

function doSymmetricDifference(leftArray, rightArray) {
  var leftArray_filtered = leftArray.filter(function(element, index, array) {
    return (rightArray.indexOf(element) === -1);
  });
  var rightArray_filtered = rightArray.filter(function(element, index, array) {
    return (leftArray.indexOf(element) === -1);
  });

  // This simply filters each array against the other and returns the combined result.
  return leftArray_filtered.concat(rightArray_filtered);
}

function sym(args) {
  // Make the function arguments into a full-featured array.
  args = Array.prototype.slice.call(arguments);

  // Pass through each pair of contiguous elements in the array.
  // For each pair, make the higher-indexed element...
  // ...the symmetric difference of itself and the lower-indexed element.
  for (var right = 1, left = 0; right < args.length; right++, left++) {
    args[right] = doSymmetricDifference(args[right], args[left]);
  }

  // The rightmost value of this process is the symmetric difference for the whole array.
  var symDiff = args[args.length - 1];

  // Sort the result in ascending order.
  symDiff = symDiff.sort(function(a, b) {
    return a - b;
  });

  // Remove any duplicates from the result, and return.
  return symDiff.filter(function(element, index, array) {
    return (array.indexOf(element) === index);
  });

}
