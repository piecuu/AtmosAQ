using AtmosAQ.Infrastructure.Identity.Models;
using AtmosAQ.Infrastructure.Persistence;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Web.Configurations
{
    public static class AuthorizationConfig
    {
        public static void SetupAuthorization(this IServiceCollection services)
        {
            services.AddIdentityServer()
                .AddApiAuthorization<ApplicationUser, ApplicationDbContext>();
        }
    }
}