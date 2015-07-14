using Hangman.DataAccess;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Hangman.Areas.Api.Controllers
{
    public class PhraseController : ApiController
    {
        private readonly IWordListReader _wordListReader;

        public PhraseController(IWordListReader wordListReader)
        {
            _wordListReader = wordListReader;
        }

        public string Get()
        {
            var words = _wordListReader.GetAllWords();
            var wordToReturn = words.First();
            return wordToReturn;
        }
    }
}