using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;

namespace AtmosAQ.Infrastructure.Identity.Models
{
    public class AuthenticationRequest
    {
        [Required]
        [JsonProperty("username")]
        public string Username { get; set; }

        [Required]
        [JsonProperty("password")]
        public string Password { get; set; }
    }
}