using System;
using System.Linq;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Hangman.DataAccess;
using System.Collections.Generic;

namespace Hangman.Tests.DataAccess
{
    [TestClass]
    public class RandomNumberPickerTests
    {
        [TestMethod]
        public void RandomNumberInRange_NumberRangeZeroToTen_ExpectSubsequentCallsToReturnDifferentNumbersForTheSameRange()
        {
            var numbersReturned = new List<int>();
            for (int i = 0; i < 10; i++)
            {
                numbersReturned.Add(RandomNumberPicker.RandomNumberInRange(min: 0, max: 10));
            }

            var numberCounts = numbersReturned.GroupBy(w => w);

            numberCounts.ToList().ForEach(g => Console.WriteLine("{1} instances of number:{0} returned\n", g.Key, g.Count()));

            Assert.IsTrue(numberCounts.Count() > 1, "expected that after 10 instances at least 2 different numbers would be returned");
        }
    }
}
