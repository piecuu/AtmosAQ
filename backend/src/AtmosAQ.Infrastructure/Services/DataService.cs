using System.Globalization;
using System.Net.Http;
using System.Net.Http.Json;
using System.Threading.Tasks;
using AtmosAQ.Application.Interfaces;
using AtmosAQ.Application.LatestData.Queries;
using AtmosAQ.Application.MeasurementsData.Queries;
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
            var request = new HttpRequestMessage(HttpMethod.Get, $"/v2/latest?city={city}&limit=10&order_by=city");

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

        public async Task<GetMeasurementsDto> GetMeasurementsData(GetMeasurementsQuery query)
        {
            var dateFrom = query.DateFrom.ToUniversalTime().ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
            var dateTo = query.DateTo.ToUniversalTime().ToString("yyyy'-'MM'-'dd'T'HH':'mm':'ss");
            var apiPath = $"/v2/measurements?date_from={dateFrom}&date_to={dateTo}&city={query.City}&limit=10&order_by=city";
            
            var request = new HttpRequestMessage(HttpMethod.Get, apiPath);

            var response = await _httpClient.SendAsync(request);

            _logger.LogInformation($"HttpClient request at: {request.RequestUri}");

            if (!response.IsSuccessStatusCode)
            {
                _logger.LogError($"Unhandled DataService exception with request: {request}");
                throw new HttpStatusCodeException("Error while getting measurements data.");
            }

            var result = await response.Content.ReadFromJsonAsync<GetMeasurementsDto>();

            return result;
        }
    }
}