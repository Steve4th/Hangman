using Hangman.DataAccess;
using Microsoft.Practices.Unity;
using System.Web.Http;
using Unity.WebApi;

namespace Hangman
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = GetConfiguredContainer();
            
            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);
        }

        internal static IUnityContainer GetConfiguredContainer()
        {
            var container = new UnityContainer();
            
            // register all your components with the container here
            // it is NOT necessary to register your controllers
            
            // e.g. container.RegisterType<ITestService, TestService>();
            container.RegisterType<IWordListReader, WordListFileReader>();

            return container;
        }
    }
}