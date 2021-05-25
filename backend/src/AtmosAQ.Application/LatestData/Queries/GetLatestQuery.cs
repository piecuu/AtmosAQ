using System.Threading;
using System.Threading.Tasks;
using AtmosAQ.Application.Interfaces;
using MediatR;

namespace AtmosAQ.Application.LatestData.Queries
{
    public class GetLatestQuery : IRequest<GetLatestDto>
    {
        public string City { get; set; }

        public class GetLatestQueryHandler : IRequestHandler<GetLatestQuery, GetLatestDto>
        {
            private readonly IDataService _dataService;

            public GetLatestQueryHandler(IDataService dataService)
            {
                _dataService = dataService;
            }

            public Task<GetLatestDto> Handle(GetLatestQuery request, CancellationToken cancellationToken)
            {
                var result = _dataService.GetLatestData(request.City);

                return result;
            }
        }
    }
}