using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AtmosAQ.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[api/controller]")]
    public class DataController : ControllerBase
    {
        public DataController()
        {
        }

        [HttpGet("{city}")]
        public async Task<IActionResult> GetByCity(string city)
        {
            return Ok();
        }
    }
}