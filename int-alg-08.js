// FreeCodeCamp Intermediate Algorithm 8 - Missing Letters
// Solution by Quinn James

// TASK:
//// Find the missing letter in the passed letter range and return it.
//// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  var asciiArray = [];
	for (var x = 0; x < str.length; x++)
		{
			// Put the entire string's characters into an array with their respective charCodeAt.
			// charCodeAt gets you the character's sequential position in ASCII, so you can determine ranges.
		  asciiArray.push(str.charCodeAt(x));
		}
	// Start at the second position because we have to look backwards one.
  for (var y = 1; y < str.length; y++)
		{
			// For every position starting from the second, check to see if there's a gap between the current character and the previous one.
			// If there is, return the (first) character that belongs in the (first) gap immediately.
		  if (asciiArray[y] - asciiArray[y-1] > 1)
		  {
				// fromCharCode undoes charCodeAt, basically. It can take many values, but we only need one.
		    return String.fromCharCode(asciiArray[y-1] + 1);
		  }
		  
		}
  // If the second for loop above finishes without finding any gaps, then we have to return undefined.
  return undefined;
}
