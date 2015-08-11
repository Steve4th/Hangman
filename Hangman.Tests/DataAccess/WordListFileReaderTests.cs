using Microsoft.VisualStudio.TestTools.UnitTesting;
using Hangman.DataAccess;

namespace Hangman.Tests
{
    [TestClass]
    public class WordListFileReaderTests
    {
        [TestMethod]
        public void FileReader_GetAllWords_ExpectListOfWordsReturned()
        {
            IWordListReader reader = new WordListFileReader();
            
            var wordsReturned = reader.GetAllWords();

            Assert.IsNotNull(wordsReturned);
            Assert.IsTrue(wordsReturned.Count > 1);
        }
    }
}
