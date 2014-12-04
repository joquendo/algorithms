/* 
 * PrimeSieve (Program 1.4.3-p.100)
 * A simple algorithm for finding all prime numbers up to any given limit. Based on the ancient algorithm, Sieve of Eratosthenes, named after Eratosthenes of Cyrene, a Greek mathematician.
 * @desc - find every prime from 0 to N. Then print the number of primes that is <= N.
 * @param String N - the number N to end search for all prime numbers.
 * @return String - the number of primes that is <= N.
 */
public class PrimeSieve
{
 public static void main(String[] args)
 {
   int N = Integer.parseInt(args[0]);

   boolean[] isPrime = new boolean[N+1];

   // Convert all of isPrime[] to true starting from index 2.
   for (int i = 2; i <= N; i++)
    isPrime[i] = true;
   
   for (int i = 2; i <= N/i; i++) 
    {
     if (isPrime[i])
     {
       // Mark multiples of i as not prime.
       for (int j = i; j <= N/i; j++)
         isPrime[i * j] = false;
     }
   }
   
   // Count the primes.
   int primes = 0;
   for (int i = 2; i <= N; i++)
   {
     if (isPrime[i]) 
       primes++;
   }
     System.out.println(primes);
 }
}