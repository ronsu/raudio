using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace Vesisuontie.Hubs
{

    [HubName("Lamp")]
    public class LampHub : Hub<ILampClient>
    {

        public async Task Turn(bool onoff)
        {
            await Clients.Caller.Turn(onoff);
        }

    }

    public interface ILampClient
    {
        Task Turn(bool onoff);
    }
}
