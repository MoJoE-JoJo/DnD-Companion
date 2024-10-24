
using CombatTracker.Domain;
using CombatTracker.ViewModels;
using System.Collections.ObjectModel;

namespace CombatTracker;
public partial class MainPage : ContentPage
{
    public ObservableCollection<ParticipantViewModel> Participants { get; set; }


    //Læs op på denne side med hvordan man nok bør gøre det: https://learn.microsoft.com/en-us/dotnet/maui/xaml/fundamentals/mvvm?view=net-maui-8.0

    public int CurrentParticipantIndex { get; set; }

    public RoundViewModel RoundViewModel { get; set; }


    public MainPage()
    {
        InitializeComponent();

        RoundViewModel = new RoundViewModel();

        Participants = new ObservableCollection<ParticipantViewModel>
            {
                new ParticipantViewModel(new Participant("Goblin", 2, InitiativeType.Enenmy, 30)),
                new ParticipantViewModel(new Participant("Hero", 5, InitiativeType.Player, 50)),
                new ParticipantViewModel(new Participant("Dragon", 8, InitiativeType.Enenmy, 200))
            };
        CurrentParticipantIndex = 0;

        BindingContext = this;
    }


}

