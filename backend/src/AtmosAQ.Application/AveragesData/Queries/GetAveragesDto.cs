using AtmosAQ.Application.Shared;

namespace AtmosAQ.Application.AveragesData.Queries
{
    public class GetAveragesDto
    {
        public MetaDto Meta { get; set; }

        public AverageDto[] Results { get; set; }
    }
}