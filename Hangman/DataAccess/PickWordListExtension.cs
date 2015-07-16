using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Hangman.DataAccess
{
    public static class PickWordListExtension
    {
        public static string PickWord(this IList<string> wordList, int selectionIndex)
        {
            if (wordList == null) throw new ArgumentNullException("wordList");
            
            if (wordList.Count == 0 || selectionIndex > wordList.Count) throw new ArgumentOutOfRangeException("wordList");

            return wordList[selectionIndex];
        }
    }
}