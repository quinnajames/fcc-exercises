//// FreeCodeCamp Advanced Algorithm #4 - Inventory Update
//// Solution by Quinn James

//// TASK:
//// ======================================================
//// Compare and update the inventory stored in a 2D array 
//// against a second 2D array of a fresh delivery.
//// Update the current existing inventory item quantities
//// (in arr1). If an item cannot be found, add the new
//// item and quantity into the inventory array.
//// The returned inventory array should be in alphabetical
//// order by item.
//// ======================================================
//// SOLUTION:

// This function turns arrays into objects with key/values
// flipped
function reverseObjectizeInventory(array) {
  return array.reduce(function(object, value) {
    object[value[1]] = value[0];
    return object;
  }, {});
}

function updateInventory(arr1, arr2) {

  // Flip both inputs by key/value...
  var currentInventory = reverseObjectizeInventory(arr1);
  var newInventory = reverseObjectizeInventory(arr2);

  // ...combine/add up inventory data with the same key...
  for (var key in newInventory) {
    if (currentInventory.hasOwnProperty(key)) {
      currentInventory[key] += newInventory[key];
      delete newInventory[key];
    }
  }

  // ...now that all keys are unique, merge the two objects...
  currentInventory = Object.assign(newInventory, currentInventory);

  // ...and finally return them back to an array so we can
  // sort and return.
  var returnArray = [];
  for (var x in currentInventory) {
    returnArray.push([currentInventory[x], x]);
  }

  // Sorts output alphabetically.
  returnArray.sort(function(a, b) {
    return a[1] > b[1];
  });

  return returnArray;
}