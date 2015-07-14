using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.DataAccess
{
    public interface IWordListReader
    {
        IList<string> GetAllWords();
    }
}
