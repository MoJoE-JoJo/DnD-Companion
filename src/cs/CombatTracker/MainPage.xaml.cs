
using System.Collections.ObjectModel;
using CombatTracker.Domain;
using CombatTracker.ViewModels;

namespace CombatTracker;
public partial class MainPage : ContentPage
{
    ObservableCollection<InititiativeItem> Participants { get; set; }

    //Læs op på denne side med hvordan man nok bør gøre det: https://learn.microsoft.com/en-us/dotnet/maui/xaml/fundamentals/mvvm?view=net-maui-8.0

    int CurrentParticipantIndex { get; set; }

    public RoundViewModel RoundViewModel { get; set; }


    public MainPage()
    {
        InitializeComponent();
        RoundViewModel = new RoundViewModel();

        Participants = new ObservableCollection<InititiativeItem>
            {
                new InititiativeItem("Goblin", 2, InitiativeType.Enenmy, 30),
                new InititiativeItem("Hero", 5, InitiativeType.Player, 50),
                new InititiativeItem("Dragon", 8, InitiativeType.Enenmy, 200)
            };
        CurrentParticipantIndex = 0;

        BindingContext = this;
    }


}

