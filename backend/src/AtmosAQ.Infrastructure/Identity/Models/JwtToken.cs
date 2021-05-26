using Newtonsoft.Json;

namespace AtmosAQ.Infrastructure.Identity.Models
{
    [JsonObject("JwtToken")]
    public class JwtToken
    {
        [JsonProperty("Secret")]
        public string Secret { get; set; }

        [JsonProperty("Issuer")]
        public string Issuer { get; set; }

        [JsonProperty("Audience")]
        public string Audience { get; set; }

        [JsonProperty("Expiry")]
        public int Expiry { get; set; }
    }
}