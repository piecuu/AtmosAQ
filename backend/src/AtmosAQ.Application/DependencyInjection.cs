using System.Reflection;
using MediatR;
using Microsoft.Extensions.DependencyInjection;

namespace AtmosAQ.Application
{
    public static class DependencyInjection
    {
        public static void SetupApplication(this IServiceCollection services)
        {
            services.AddMediatR(Assembly.GetExecutingAssembly());
        }
    }
}