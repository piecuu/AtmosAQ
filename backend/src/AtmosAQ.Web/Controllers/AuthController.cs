using System.Threading.Tasks;
using AtmosAQ.Infrastructure.Identity.Models;
using AtmosAQ.Infrastructure.Identity.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AtmosAQ.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly ITokenService _tokenService;

        public AuthController(ITokenService tokenService)
        {
            _tokenService = tokenService;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<ActionResult<AuthenticationResponse>> AuthenticateAsync(AuthenticationRequest request)
        {
            var result = await _tokenService.Authenticate(request);

            if (result is null)
            {
                return BadRequest();
            }
            
            return Ok(result);
        }
    }
}