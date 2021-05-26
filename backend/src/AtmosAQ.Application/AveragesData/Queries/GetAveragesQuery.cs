using System;
using System.Threading;
using System.Threading.Tasks;
using AtmosAQ.Application.Interfaces;
using AtmosAQ.Domain.Enums;
using MediatR;

namespace AtmosAQ.Application.AveragesData.Queries
{
    public class GetAveragesQuery : IRequest<GetAveragesDto>
    {
        public DateTime DateFrom { get; set; }
        
        public DateTime DateTo { get; set; }
        
        public string Country { get; set; }
        
        public GroupTimeEnum GroupTime { get; set; }

        public class GetAveragesQueryHandler : IRequestHandler<GetAveragesQuery, GetAveragesDto>
        {
            private readonly IDataService _dataService;

            public GetAveragesQueryHandler(IDataService dataService)
            {
                _dataService = dataService;
            }
            
            public async Task<GetAveragesDto> Handle(GetAveragesQuery request, CancellationToken cancellationToken)
            {
                var result = await _dataService.GetAveragesData(request);

                return result;
            }
        }
    }
}