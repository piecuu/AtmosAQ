using System.Collections.Generic;
using AtmosAQ.Application.Shared;

namespace AtmosAQ.Application.LatestData.Queries
{
    public class GetLatestDto
    {
        public MetaDto Meta { get; set; }

        public List<LatestDto> Results { get; set; }
    }
}