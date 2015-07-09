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
        public string Get(int id)
        {
            return "Phrase By ID";
        }

        public string Get()
        {
            return "Random";
        }
    }
}