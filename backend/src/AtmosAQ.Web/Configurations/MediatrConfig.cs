using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Web.Configurations
{
    public static class MediatrConfig
    {
        public static void SetupMediatr(this IServiceCollection services)
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());
        }
    }
}