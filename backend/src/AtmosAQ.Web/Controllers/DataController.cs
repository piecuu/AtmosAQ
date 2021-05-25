using System.Threading.Tasks;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AtmosAQ.Web.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[api/controller]")]
    public class DataController : ControllerBase
    {
        private readonly IMediator _mediator;

        public DataController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("latest/")]
        public async Task<IActionResult> GetLatest(string city)
        {
            return Ok();
        }
        
        [HttpGet("measurements/")]
        public async Task<IActionResult> GetMeasurements(string city)
        {
            return Ok();
        }
        
        [HttpGet("averages/")]
        public async Task<IActionResult> GetAverages(string city)
        {
            return Ok();
        }
    }
}