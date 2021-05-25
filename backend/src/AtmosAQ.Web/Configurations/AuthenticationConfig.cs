using System;
using System.Security.Claims;
using System.Text;
using AtmosAQ.Infrastructure.Identity.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace AtmosAQ.Web.Configurations
{
    public static class AuthenticationConfig
    {
        public static void SetupAuthentication(this IServiceCollection services, IConfiguration configuration)
        {
            var token = configuration.GetSection("JwtToken").Get<JwtToken>();

            services
                .AddAuthentication(options =>
                {
                    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                })
                .AddJwtBearer(options =>
                {
                    options.RequireHttpsMetadata = true;
                    options.SaveToken = true;
                    options.ClaimsIssuer = token.Issuer;
                    options.IncludeErrorDetails = true;
                    options.Validate(JwtBearerDefaults.AuthenticationScheme);
                    options.TokenValidationParameters =
                        new TokenValidationParameters
                        {
                            ClockSkew = TimeSpan.Zero,
                            ValidateIssuer = true,
                            ValidateAudience = true,
                            ValidateLifetime = true,
                            ValidateIssuerSigningKey = true,
                            ValidIssuer = token.Issuer,
                            ValidAudience = token.Audience,
                            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(token.Secret)),
                            NameClaimType = ClaimTypes.NameIdentifier,
                            RequireSignedTokens = true,
                            RequireExpirationTime = true
                        };
                })
                .AddIdentityServerJwt();
        }
    }
}