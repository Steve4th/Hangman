using Hangman.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Hangman.Tests.DataAccess
{
    [TestClass]
    public class WordFactoryTests
    {
        [TestMethod]
        [ExpectedException(typeof(InvalidOperationException))]
        public void GetWord_EmptyList_ExpectException()
        {
            IList<string> wordsToReturn = new List<string>();

            var reader = new Mock<IWordListReader>();
            reader.Setup(m => m.GetAllWords()).Returns(wordsToReturn);

            var factory = new WordFactory(reader.Object);

            var word = factory.GetWord();
        }

        [TestMethod]
        public void GetWord_OneItemList_ExpectSameWordReturnedOnEachCall()
        {
            const string expectedWord = "WordToReturnPlease";
            IList<string> wordsToReturn = new List<string> { expectedWord };

            var reader = new Mock<IWordListReader>();
            reader.Setup(m => m.GetAllWords()).Returns(wordsToReturn);

            var factory = new WordFactory(reader.Object);

            var word = factory.GetWord();

            Assert.AreEqual(expectedWord, word);
        }

        [TestMethod]
        public void GetWord_MultiItemList_ExpectDifferentWordsReturnedOnSeperateCalls()
        {
            IList<string> wordsToReturn = new List<string> { "One", "Two", "Three", "Four", "Five", "Six", "Severn", "Eight", "Nine", "Ten" };

            var reader = new Mock<IWordListReader>();
            reader.Setup(m => m.GetAllWords()).Returns(wordsToReturn);

            var factory = new WordFactory(reader.Object);

            var listOfWordsReturned = new List<string>();
            for (int i = 0; i < 5; i++)
            {
                var word = factory.GetWord();
                listOfWordsReturned.Add(word);
            }

            var wordCounts = listOfWordsReturned.GroupBy(w => w);

            wordCounts.ToList().ForEach(g => Console.WriteLine("{1} instances of word:{0} returned\n", g.Key, g.Count()));

            Assert.IsTrue(wordCounts.Count() > 1);
        }
    }
}
