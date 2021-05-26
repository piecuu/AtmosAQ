namespace AtmosAQ.Infrastructure.Identity.Models
{
    public class AuthenticationResponse
    {
        public AuthenticationResponse(
            ApplicationUser user,
            string token)
        {
            Id = user.Id;
            Username = user.UserName;
            Token = token;
        }

        public string Id { get; set; }
        
        public string Username { get; set; }

        public string Token { get; set; }
    }
}