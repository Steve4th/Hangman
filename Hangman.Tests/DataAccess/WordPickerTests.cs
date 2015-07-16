using Hangman.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;

namespace Hangman.Tests.DataAccess
{
    [TestClass]
    public class WordPickerTests
    {
        [TestMethod]
        public void PickWord_SupplyIndexOf0_ExpectFirstWordReturned()
        {
            var wordList = GetWordListForTesting();
            var index = 0;
            var word = wordList.PickWord(index);

            Assert.AreEqual("zero", word);
        }

        [TestMethod]
        public void PickWord_SupplyIndexOf2_ExpectThirdWordReturned()
        {
            var wordList = GetWordListForTesting();
            var index = 2;
            var word = wordList.PickWord(index);

            Assert.AreEqual("two", word);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentNullException))]
        public void PickWord_SupplyIndexOf1_ExpectArgumentNullException()
        {
            IList<string> wordList = null;
            var index = 0;
            var word = wordList.PickWord(index);
        }

        [TestMethod]
        [ExpectedException(typeof(ArgumentOutOfRangeException))]
        public void PickWord_SupplyIndexGreaterThanListLength_ExpectArgumentOutOfRangeException()
        {
            var wordList = GetWordListForTesting();
            var index = wordList.Count + 1;
            var word = wordList.PickWord(index);

            Assert.AreEqual("three", word);
        }

        [TestMethod]
        public void PickWord_UseRandomNumber_ExpectWordReturned()
        {
            var wordList = GetWordListForTesting();
            var index = RandomNumberPicker.RandomNumberInRange(0, wordList.Count);
            var word = wordList.PickWord(index);

            Assert.IsFalse(string.IsNullOrEmpty(word));
            Console.WriteLine("For index {0} got word: {1}", index, word);
        }

        private static List<string> GetWordListForTesting()
        {
            var wordList = new List<string>() 
            {
                "zero",
                "one",
                "two",
                "three",
                "four"
            };
            return wordList;
        }


    }
}
