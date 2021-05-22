using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AtmosAQ.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        public AuthController()
        {
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task AuthenticateAsync()
        {
            return Ok();
        }
    }
}