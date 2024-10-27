using CombatTracker.Models;
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
            OnPropertyChanged(nameof(HealthText)); // Notify change for CurrentHealth
        }
    }

    public int? InitiativeRoll
    {
        get => Participant.InitiativeRoll; // TODO Might need to change this to use a text field in the viewModel
        set => SetProperty(Participant.CurrentHealth, value, val => Participant.InitiativeRoll = val);

    }

    public string Name
    {
        get => Participant.Name;
    }

    public string HealthText => $"Health: {Participant.CurrentHealth}/{Participant.MaxHealth}";

    public ParticipantViewModel(Participant participant)
    {
        Participant = participant;
    }

    public ICommand AddHealthCommand => new Command(() => CurrentHealth++);
    public ICommand RemoveHealthCommand => new Command(() => CurrentHealth--);



}