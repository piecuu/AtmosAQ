using System.Threading.Tasks;
using AtmosAQ.Application.LatestData.Queries;
using AtmosAQ.Application.MeasurementsData.Queries;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace AtmosAQ.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Authorize]
    public class DataController : ControllerBase
    {
        private readonly IMediator _mediator;

        public DataController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("latest/")]
        public async Task<IActionResult> GetLatest([FromQuery] GetLatestQuery query)
        {
            var result = await _mediator.Send(query);

            return Ok(result);
        }

        [HttpGet("measurements/")]
        public async Task<IActionResult> GetMeasurements([FromQuery] GetMeasurementsQuery query)
        {
            var result = await _mediator.Send(query);
            
            return Ok(result);
        }

        [HttpGet("averages/")]
        public async Task<IActionResult> GetAverages(string city)
        {
            return Ok();
        }
    }
}