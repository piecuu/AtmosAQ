using System.Threading.Tasks;
using AtmosAQ.Application.AveragesData.Queries;
using AtmosAQ.Application.LatestData.Queries;
using AtmosAQ.Application.MeasurementsData.Queries;

namespace AtmosAQ.Application.Interfaces
{
    public interface IDataService
    {
        Task<GetLatestDto> GetLatestData(string city);
        Task<GetMeasurementsDto> GetMeasurementsData(GetMeasurementsQuery query);
        Task<GetAveragesDto> GetAveragesData(GetAveragesQuery query);
    }
}