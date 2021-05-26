using AtmosAQ.Application.Shared;

namespace AtmosAQ.Application.MeasurementsData.Queries
{
    public class GetMeasurementsDto
    {
        public MetaDto Meta { get; set; }

        public MeasurementDto[] Results { get; set; }
    }
}