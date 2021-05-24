using AtmosAQ.Infrastructure.Identity.Services;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Web.Configurations
{
    public static class ServciesConfig
    {
        public static void SetupServcies(this IServiceCollection services)
        {
            services.AddTransient<ITokenService, TokenService>();
        }
    }
}