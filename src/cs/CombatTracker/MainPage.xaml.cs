
using System.Collections.ObjectModel;
using System.Windows.Input;
using CombatTracker.Domain;
using CombatTracker.Helpers;

namespace CombatTracker;
public partial class MainPage : ContentPage
{
    ObservableCollection<InititiativeItem> Participants { get; set; }

    private static BindableProperty GetBindableProperty<T>(T defaultValue)
    {
        void BindFunc(BindableObject bindable, object oldValue, object newValue) => ((MainPage)bindable).OnPropertyChanged(nameof(RoundText));

        BindableProperty ValueProperty = BindableProperty.Create("Value", typeof(T), typeof(MainPage), defaultValue, propertyChanged: BindFunc);
        return ValueProperty;
    }

    //Læs op på denne side med hvordan man nok bør gøre det: https://learn.microsoft.com/en-us/dotnet/maui/xaml/fundamentals/mvvm?view=net-maui-8.0


    // private static void OnRoundChanged(BindableObject bindable, object oldValue, object newValue)
    // {
    //     var page = (MainPage)bindable;
    //     page.OnPropertyChanged(nameof(RoundText));
    // }

    // public static readonly BindableProperty RoundProperty =
    //     BindableProperty.Create(nameof(Round), typeof(int), typeof(MainPage), 1, propertyChanged: OnRoundChanged);

    public int Round
    {
        get => (int)GetValue(RoundProperty);
        set => SetValue(RoundProperty, value);
    }

    public BindProperty<int> Round = new BindProperty<int>();

    int CurrentParticipantIndex { get; set; }


    public string RoundText => $"Round: {Round.Get()}";

    public MainPage()
    {
        InitializeComponent();
        BindingContext = this;

        Participants = new ObservableCollection<InititiativeItem>
            {
                new InititiativeItem("Goblin", 2, InitiativeType.Enenmy, 30),
                new InititiativeItem("Hero", 5, InitiativeType.Player, 50),
                new InititiativeItem("Dragon", 8, InitiativeType.Enenmy, 200)
            };
        Round.Initialize(this, GetBindableProperty(0));
        CurrentParticipantIndex = 0;

    }

    private void OnCounterClicked(object sender, EventArgs e)
    {
        // count++;

        // if (count == 1)
        //     CounterBtn.Text = $"Clicked {count} time";
        // else
        //     CounterBtn.Text = $"Clicked {count} times";

        // //SemanticScreenReader.Announce(CounterBtn.Text);
    }

    private void OnNextRoundClick(object sender, EventArgs e)
    {

    }

    private void OnAddParticipant(object sender, EventArgs e)
    {

    }

    public ICommand NextRoundCommand => new Command(() => Round.Set(Round.Get() + 1));

}

