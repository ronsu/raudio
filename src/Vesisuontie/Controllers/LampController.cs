using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;
using Microsoft.AspNet.SignalR.Infrastructure;
using Microsoft.CodeAnalysis;
using Vesisuontie.Hubs;


namespace Vesisuontie.Controllers
{
    [Route("api/[controller]")]
    public class LampController : Controller
    {

        private IConnectionManager _connectionManager;
        private IHubContext<LampHub, ILampClient> _lampHub;

        [FromServices]
        public IConnectionManager ConnectionManager
        {
            get
            {
                return _connectionManager;
            }
            set
            {
                _connectionManager = value;
                _lampHub = _connectionManager.GetHubContext<LampHub, ILampClient>();
            }
        }



        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        [HttpGet("TurnLamp")]
        public void TurnLamp([FromQuery]bool turnOn)
        {
            _lampHub.Clients.All.Turn(turnOn);
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
