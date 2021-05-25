using System.Threading.Tasks;
using AtmosAQ.Application.LatestData.Queries;

namespace AtmosAQ.Application.Interfaces
{
    public interface IDataService
    {
        Task<GetLatestDto> GetLatestData(string city);
    }
}