/* FreeCodeCamp Intermediate Algorithm #2 - Symmetric Difference */
/* Solution by Quinn James */

/* TASK: */
/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {

  // Filter first array against second.
  var arr1_filtered = arr2.filter(function(element, index, array) {
    return (arr1.indexOf(element) === -1);
  });
  // Filter second array against first.
  var arr2_filtered = arr1.filter(function(element, index, array) {
    return (arr2.indexOf(element) === -1);
  });
  // Combine the two filtered arrays.
  return arr1_filtered.concat(arr2_filtered);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
