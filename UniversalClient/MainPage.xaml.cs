using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.InteropServices.WindowsRuntime;
using Windows.Foundation;
using Windows.Foundation.Collections;
using Windows.UI.Xaml;
using Windows.UI.Xaml.Controls;
using Windows.UI.Xaml.Controls.Primitives;
using Windows.UI.Xaml.Data;
using Windows.UI.Xaml.Input;
using Windows.UI.Xaml.Media;
using Windows.UI.Xaml.Navigation;
using Microsoft.AspNet.SignalR.Client;
using System.Threading.Tasks;
using Microsoft.AspNet.SignalR.Client.Transports;
using Windows.UI.Core;

// The Blank Page item template is documented at http://go.microsoft.com/fwlink/?LinkId=402352&clcid=0x409

namespace UniversalClient
{
    /// <summary>
    /// An empty page that can be used on its own or navigated to within a Frame.
    /// </summary>
    public sealed partial class MainPage : Page
    {
        public MainPage()
        {
            this.InitializeComponent();

            this.Loaded += MainPage_Loaded;
        }

        private async void MainPage_Loaded(object sender, RoutedEventArgs e)
        {
            await SetupHub();
        }

        private async Task SetupHub()
        {
            //http://raudio.azurewebsites.net/api/Lamp/TurnLamp?turnOn=true

            var hubconnection = new HubConnection("http://raudio.azurewebsites.net/");
            var lamphub = hubconnection.CreateHubProxy("Lamp");
            lamphub.On<bool>("Turn", handleCallback);
            await hubconnection.Start(new LongPollingTransport());
        }

        private void handleCallback(bool state)
        {
            SetStatus(state);
        }

        private void SetStatus(bool state)
        {


            Dispatcher.RunAsync(CoreDispatcherPriority.Normal,
    () =>
    {
        b1.Content = state.ToString();
    });

            //if (button1.InvokeRequired)
            //{
            //    button1.Invoke(new Action<bool>(SetStatus), state);
            //}

            //button1.Text = state.ToString();
        }

    }
}
