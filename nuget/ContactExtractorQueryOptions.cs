using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.ContactExtractor
{
    /// <summary>
    /// Query options for the Contact Extractor API
    /// </summary>
    public class ContactExtractorQueryOptions
    {
        /// <summary>
        /// The URL of the web page to extract contact data from
        /// </summary>
        [JsonProperty("url")]
        public string Url { get; set; }
    }
}
