using AtmosAQ.Infrastructure.Identity.Models;
using AtmosAQ.Infrastructure.Persistence;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Web.Configurations
{
    public static class IdentityConfig
    {
        public static void SetupIdentity(this IServiceCollection services)
        {
            services.AddDefaultIdentity<ApplicationUser>()
                .AddEntityFrameworkStores<ApplicationDbContext>();
        }
    }
}