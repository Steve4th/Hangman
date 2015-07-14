using Hangman.Areas.Api.Controllers;
using Hangman.DataAccess;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Hangman.Tests.Api
{
    [TestClass]
    public class PhraseGetTests
    {
        [TestMethod]
        public void GetPhrase_NoParameters_ExpectPhraseTermReturned()
        {
            var wordListReader = new WordListFileReader();
            var apiController = new PhraseController(wordListReader);
            string response = apiController.Get();
            Console.WriteLine(response);
            Assert.IsFalse(string.IsNullOrEmpty(response));
        }
    }
}
