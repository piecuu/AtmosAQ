using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AtmosAQ.Application;
using AtmosAQ.Infrastructure.Identity.Models;
using AtmosAQ.Web.Configurations;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.OpenApi.Models;
using Serilog;

namespace AtmosAQ.Web
{
    public class Startup
    {
        public IConfiguration Configuration { get; }

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<JwtToken>(Configuration.GetSection("JwtToken"));
            
            services.SetupApplication();
            
            services.SetupDatabase(Configuration);
            
            services.SetupIdentity();
            
            services.SetupAuthorization();

            services.SetupServcies(Configuration);
            
            //services.SetupMediatr();
            
            services.SetupAuthentication(Configuration);
            
            services.AddControllers();
            
            services.SetupSwagger();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            app.UseSwaggerAndUi();

            app.UseSerilogRequestLogging();

            app.UseHttpsRedirection();

            app.UseRouting();
            
            app.UseCors(x => x
                        .AllowAnyOrigin()
                        .AllowAnyMethod()
                        .AllowAnyHeader());
            
            app.UseAuthentication();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
