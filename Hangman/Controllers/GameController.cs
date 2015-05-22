using System.Web.Mvc;

namespace Hangman.Controllers
{
    public class GameController : Controller
    {
        public ActionResult PlayGame()
        {
            return View();
        }
    }
}