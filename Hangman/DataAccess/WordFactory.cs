using System;
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

            if (words.Count == 0)
            {
                throw new InvalidOperationException("There are no words to pick from. Unable to get a word");
            }

            var randomNumber = RandomNumberPicker.RandomNumberInRange(min: 0, max: words.Count - 1);

            var wordToReturn = words[randomNumber];

            return wordToReturn;
        }
    }
}