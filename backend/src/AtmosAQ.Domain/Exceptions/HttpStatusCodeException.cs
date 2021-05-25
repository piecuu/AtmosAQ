using System;

namespace AtmosAQ.Domain.Exceptions
{
    public class HttpStatusCodeException : Exception
    {
        public HttpStatusCodeException() { }
        
        public HttpStatusCodeException(string message) : base(message) { }

        public HttpStatusCodeException(string message, Exception innerException) : base(message, innerException) { }
    }
}