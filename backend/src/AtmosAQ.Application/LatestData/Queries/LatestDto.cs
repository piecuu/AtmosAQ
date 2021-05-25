using System.Collections.Generic;
using AtmosAQ.Application.Shared;

namespace AtmosAQ.Application.LatestData.Queries
{
    public class LatestDto
    {
        public string Location { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public CoordinateDto Coordinates { get; set; }
        
        public List<MeasurementDto> Measurements { get; set; }
    }
}