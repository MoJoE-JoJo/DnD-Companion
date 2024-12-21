using CombatTracker.src.Utilities;
using CombatTracker.ViewModels;

namespace CombatTracker;
public partial class MainPage : ContentPage
{
    public RoundTrackerViewModel RoundTrackerViewModel { get; set; }
    public ParticipantListViewModel ParticipantListViewModel { get; set; }
    public GlobalStore GlobalStore { get; private set; }

    public MainPage(RoundTrackerViewModel roundTracker, ParticipantListViewModel participantListViewModel, GlobalStore globalStore)
    {
        InitializeComponent();

        GlobalStore = globalStore;
        RoundTrackerViewModel = roundTracker;
        ParticipantListViewModel = participantListViewModel;

        SizeChanged += OnPageSizeChanged;

        BindingContext = this;
    }

    private void OnPageSizeChanged(object sender, EventArgs e)
    {
        GlobalStore.WindowHeight = Window.Height;
    }

}

