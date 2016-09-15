// FreeCodeCamp Intermediate Algorithm 13 - Sum All Odd Fibonacci Numbers
// Solution by Quinn James

// TASK:
//// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

function sumFibs(num) {
  var f_smaller = 1;
  var f_larger = 1;
  var running_total = 1;
  var swap;

  while (f_larger <= num) // won't break out of the loop in the middle of execution, so this is fine
    {
      console.log(f_larger);
      if (f_larger % 2 === 1) // Check for oddness
        {
          running_total += f_larger;
        }
      // Just standard basic fibonacci sequence generation
      // add the last two numbers together to get the next
      // each number is always the sum of the previous two
      // (A separate sum from the sum of odd sequence
      // members, which is accumulated above.)
      swap = f_larger;
      f_larger = f_smaller + f_larger;
      f_smaller = swap;

      console.log('running_total:' + running_total);
    }

  return running_total;
}
