using Hangman.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Tests.DataAccess
{
    [TestClass]
    public class WordFactoryTests
    {
        [TestMethod]
        [ExpectedException(typeof(InvalidOperationException))]
        public void GetWord_EmptyList_ExpectException()
        {
            IWordListReader reader = new WordListFileReader();
            var factory = new WordFactory(reader);
            var word = factory.GetWord();
        }

        [TestMethod]
        public void GetWord_OneItemList_ExpectSameWordReturnedOnEachCall()
        {
            const string expectedWord = "WordToReturnPlease";

            IWordListReader reader = new WordListFileReader();
            var factory = new WordFactory(reader);

            var word = factory.GetWord();

            Assert.AreEqual(expectedWord, word);
        }

        [TestMethod]
        public void GetWord_MultiItemList_ExpectDifferentWordsReturnedOnSeperateCalls()
        {
            IWordListReader reader = new WordListFileReader();
            var factory = new WordFactory(reader);

            var listOfWordsReturned = new List<string>();
            for (int i = 0; i < 5; i++)
            {
                var word = factory.GetWord();
                listOfWordsReturned.Add(word);
            }

            var wordCounts = listOfWordsReturned.GroupBy(w => w);

            Assert.IsTrue(wordCounts.Count() > 1);
        }
    }
}
