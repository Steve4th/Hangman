using System;

namespace Hangman.DataAccess
{
    public static class RandomNumberPicker
    {
        // If you are going to create more than one random number, you should keep the Random instance and reuse it. 
        // If you create new instances too close in time, they will produce the same series of random numbers as the 
        // random generator is seeded from the system clock.
        private static readonly Random randomGenerator = new Random();

        public static int RandomNumberInRange(int min, int max)
        {
            int randomNumber = randomGenerator.Next(min, max);
            return randomNumber;
        }
    }
}