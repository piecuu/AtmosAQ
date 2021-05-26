using System.Threading.Tasks;
using AtmosAQ.Infrastructure.Identity.Models;

namespace AtmosAQ.Infrastructure.Identity.Services
{
    public interface ITokenService
    {
        Task<AuthenticationResponse> Authenticate(AuthenticationRequest request);
    }
}