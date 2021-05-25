using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using AtmosAQ.Application.Interfaces;
using AtmosAQ.Application.LatestData.Queries;
using AtmosAQ.Domain.Exceptions;
using Microsoft.Extensions.Logging;

namespace AtmosAQ.Infrastructure.Services
{
    public class DataService : IDataService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<DataService> _logger;

        public DataService(IHttpClientFactory httpClientFactory, ILogger<DataService> logger)
        {
            _httpClient = httpClientFactory.CreateClient("openaq");
            _logger = logger;
        }

        public async Task<GetLatestDto> GetLatestData(string city)
        {
            var request = new HttpRequestMessage(HttpMethod.Get, $"/v2/latest?city={city}");

            var response = await _httpClient.SendAsync(request);

            _logger.LogInformation($"HttpClient request at: {request.RequestUri}");

            if (!response.IsSuccessStatusCode)
            {
                _logger.LogError($"Unhandled DataService exception with request: {request}");
                throw new HttpStatusCodeException("Error while getting latest data.");
            }

            var result = await response.Content.ReadFromJsonAsync<GetLatestDto>();

            return result;
        }
    }
}