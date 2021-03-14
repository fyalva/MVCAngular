using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace viajes.Controllers
{
    public class personaController : ApiController
    {
        // GET: api/persona
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET: api/persona/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/persona
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/persona/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/persona/5
        public void Delete(int id)
        {
        }
    }
}
