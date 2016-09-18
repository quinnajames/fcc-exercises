//// FreeCodeCamp Advanced Algorithm #2 - Smallest Common Multiple
//// Solution by Quinn James

//// TASK:
//// ===============================
//// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

//cid is a 2D array listing available currency.

//Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

//Otherwise, return change in coin and bills, sorted in highest to lowest order.

//// SOLUTION:

function checkCashRegister(price, cash, cid) {
  var denominations = [
    ["PENNY", .01],
    ["NICKEL", .05],
    ["DIME", .10],
    ["QUARTER", .25],
    ["ONE", 1.00],
    ["FIVE", 5.00],
    ["TEN", 10.00],
    ["TWENTY", 20.00],
    ["ONE HUNDRED", 100.00]
  ];
  var changeValue = cash - price;
  var change = [];
  var changeLeftToGive = changeValue;

  // The map function is an easy way to get ONLY the money values in the cash-in-drawer array.
  // The reduce with this callback, meanwhile, is a concise way to add up an array of numbers.
  // For an explanation of the 0.001 and similar, see the while loop below.
  var totalCashInDrawer = 0.001 + cid.map(el => el[1]).reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
  console.log(totalCashInDrawer);
  if (totalCashInDrawer < changeValue) {
    return "Insufficient Funds"; // One of two ways to return insufficient funds: if you just don't have enough money.
  } else if (totalCashInDrawer - changeValue < 0.00999 && totalCashInDrawer - changeValue > -.00001) {
    return "Closed";
  }

  for (var denomIndex = denominations.length - 1; denomIndex >= 0; denomIndex--)
  // denomIndex ALWAYS corresponds to an index in cid of the SAME denomination
  {
    var totalChangeThisDenom = 0.00;
    var denomAmount = denominations[denomIndex][1];
    while (cid[denomIndex][1] > 0 && denomAmount <= changeLeftToGive + 0.001)
    // If, for example, you only have to give $4.00 in change, no sense looking at fives. Just skip them.
    // Just skip the denomination if there's no cash in the drawer at the beginning at all, too.
    // It's a while loop because you might have had $19.00 left to give, and need to give three
    // fives, but then you can't give fives anymore. So it needs to run fives until then, and then stop.

    // The .001 is a quick-and-dirty hack to swerve Javascript's rounding issues where you might think you
    // have a penny left to pay, but you ACTUALLY have like .9999999997 pennies.
    // In production, you'd probably want to use an external library for this sort of thing.
    {
      cid[denomIndex][1] -= denomAmount; // Take one bill/coin of cash out in the drawer...
      // (Hold onto it to dispense the change later, all at once, outside the while loop)
      totalChangeThisDenom += denomAmount; // Add to the running total.
      console.log("Adding " + denominations[denomIndex][0]);
      console.log("Change left to give before add: " + changeLeftToGive);
      changeLeftToGive -= denomAmount; // We've got one bill/coin less of change to give.
    }

    if (totalChangeThisDenom > 0.00) {
      change.push([denominations[denomIndex][0], totalChangeThisDenom]);
      // Adds current denomination to end of array.
      // (To get the change in ascending order, you'd 'unshift' instead of 'push.')
      // This is here because, unlike with cid's input, you ONLY return
      // the denominations which you're ACTUALLY USING as change.
      // Can't just do it inside the while, else it'd push each time you use a bill/coin.
    }

  }

  if (changeLeftToGive > 0.001) {
    return "Insufficient Funds"; // The other way to return IF. You HAVE bills, they just aren't sufficient to make change.
  }
  return change;
}
