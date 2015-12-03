using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using Microsoft.AspNet.SignalR.Client;
using Microsoft.AspNet.SignalR.Client.Transports;

namespace WindowsFormsClient
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private async void Form1_Load(object sender, EventArgs e)
        {
            await SetupHub();
        }


        private async Task SetupHub()
        {
            var hubconnection = new HubConnection("http://raudio.azurewebsites.net/");
            var lamphub = hubconnection.CreateHubProxy("Lamp");
            lamphub.On<bool>("Turn", handleCallback);
            await hubconnection.Start(new LongPollingTransport());
        }

        private void handleCallback(bool obj)
        {
            
        }
    }
}
