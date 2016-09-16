// FreeCodeCamp Intermediate Algorithm 14 - Sum All Primes
// Solution by Quinn James

// TASK:
//// Sum all the prime numbers up to and including the provided number.

function sumPrimes(num) {
  
  var primeSum = 0; // running total
  
  for (var i = 2; i <= num; i++) // start from 2, the smallest prime
    {
      var isPrime = true; // assume number is prime unless a divisor is found
      for (var j = 2; j <= Math.sqrt(i); j++)
      // don't need to test for divisors higher than the square root of
      // the given number, as any higher will always multiply by a lower number
        {
          if (i % j === 0)
            {
              isPrime = false;
            }
          if (isPrime === false)
            {
              break;
            }
        }
      if (isPrime)
        {
          primeSum += i;
        }
    }
  
  return primeSum;
}