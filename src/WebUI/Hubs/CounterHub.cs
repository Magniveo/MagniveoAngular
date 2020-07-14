using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CleanArchitecture.WebUI.Hubs
{
    public class CounterHub:Hub
    {
        public Task Increment(int i) 
        {
            return Clients.AllExcept(new List<string> { Context.ConnectionId}).SendAsync("/counter",  i);
        }
    }
}
