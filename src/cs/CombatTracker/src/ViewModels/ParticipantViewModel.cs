using CombatTracker.Domain;
using System.Diagnostics;
using System.Windows.Input;

namespace CombatTracker.ViewModels;

public class ParticipantViewModel : BaseViewModel
{

    public Participant Participant { get; private set; }

    public int CurrentHealth
    {
        get => Participant.CurrentHealth;
        set
        {
            SetProperty(Participant.CurrentHealth, value, val => Participant.CurrentHealth = val);

            //SetProperty(Participant.CurrentHealth, value);
            //OnPropertyChanged(); // Notify change for CurrentHealth
            OnPropertyChanged(nameof(HealthText)); // Notify change for CurrentHealth

        }
    }

    public string HealthText => $"Health: {Participant.CurrentHealth}/{Participant.MaxHealth}";

    public ParticipantViewModel(Participant participant)
    {
        Participant = participant;
    }

    public ICommand AddHealthCommand => new Command(() => { CurrentHealth++; Debug.WriteLine(CurrentHealth); });


}