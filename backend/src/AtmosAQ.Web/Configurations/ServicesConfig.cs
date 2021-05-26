using System;
using AtmosAQ.Application.Interfaces;
using AtmosAQ.Infrastructure.Identity.Services;
using AtmosAQ.Infrastructure.Services;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Web.Configurations
{
    public static class ServciesConfig
    {
        public static void SetupServcies(this IServiceCollection services, IConfiguration configuration)
        {
            var apiUrl = configuration.GetSection("OpenAqApiUrl").Value;
            services.AddHttpClient("openaq", options => { options.BaseAddress = new Uri(apiUrl); });

            services.AddTransient<ITokenService, TokenService>();
            services.AddTransient<IDataService, DataService>();
        }
    }
}