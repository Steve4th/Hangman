using Hangman.Areas.Api.Controllers;
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
            var apiController = new PhraseController();
            string response = apiController.Get();
            Console.WriteLine(response);
            Assert.IsFalse(string.IsNullOrEmpty(response));
        }

        [TestMethod]
        public void GetPhrase_IdSpecified_ExpectPhraseTermReturned()
        {
            var apiController = new PhraseController();
            string response = apiController.Get(1);
            Console.WriteLine(response);
            Assert.IsFalse(string.IsNullOrEmpty(response));            
        }
    }
}
