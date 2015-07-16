using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.DataAccess
{
    public static class RandomNumberPicker
    {
        public static int RandomNumberInRange(int min, int max)
        {
            var rand = new Random();
            int randomNumber = rand.Next(min, max);
            return randomNumber;
        }
    }
}