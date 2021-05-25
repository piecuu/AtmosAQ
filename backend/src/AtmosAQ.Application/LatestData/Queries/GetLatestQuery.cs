using System.Threading;
using System.Threading.Tasks;
using MediatR;

namespace AtmosAQ.Application.LatestData.Queries
{
    public class GetLatestQuery : IRequest<GetLatestDto>
    {
        public class GetLatestQueryHandler : IRequestHandler<GetLatestQuery, GetLatestDto>
        {
            public Task<GetLatestDto> Handle(GetLatestQuery request, CancellationToken cancellationToken)
            {
                throw new System.NotImplementedException();
            }
        }
    }
}