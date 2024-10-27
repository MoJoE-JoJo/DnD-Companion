using CombatTracker.src.Utilities;
using CombatTracker.ViewModels;

namespace CombatTracker;
public partial class MainPage : ContentPage
{
    public RoundTrackerViewModel RoundTrackerViewModel { get; set; }
    public GlobalStore GlobalStore { get; private set; }

    public MainPage(RoundTrackerViewModel roundTracker, GlobalStore globalStore)
    {
        InitializeComponent();

        GlobalStore = globalStore;
        RoundTrackerViewModel = roundTracker;

        SizeChanged += OnPageSizeChanged;

        BindingContext = this;
    }

    private void OnPageSizeChanged(object sender, EventArgs e)
    {
        double windowHeight = Window.Height;
        ParticipantList.HeightRequest = windowHeight * 0.7;
        ParticipantListHeader.HeightRequest = windowHeight * 0.1;
    }

}

