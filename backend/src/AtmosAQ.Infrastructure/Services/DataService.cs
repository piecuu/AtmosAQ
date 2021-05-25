using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using AtmosAQ.Application.Interfaces;
using AtmosAQ.Application.LatestData.Queries;

namespace AtmosAQ.Infrastructure.Services
{
    public class DataService : IDataService
    {
        private readonly HttpClient _httpClient;

        public DataService(IHttpClientFactory httpClientFactory)
        {
            _httpClient = httpClientFactory.CreateClient("openaq");
        }

        public async Task<GetLatestDto> GetLatestData(string city)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"/v2/latest?city={city}");

            var response = await _httpClient.SendAsync(request);

            if (!response.IsSuccessStatusCode) return null;

            var result = await response.Content.ReadFromJsonAsync<GetLatestDto>();

            return result;
        }
    }
}