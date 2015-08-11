using System.Linq;

namespace Hangman.DataAccess
{
    public class WordFactory
    {
        IWordListReader _wordListReader;

        public WordFactory(IWordListReader wordReader)
        {
            _wordListReader = wordReader;
        }

        public string GetWord()
        {
            var words = _wordListReader.GetAllWords();
            var wordToReturn = words.First();

            return wordToReturn;
        }
    }
}