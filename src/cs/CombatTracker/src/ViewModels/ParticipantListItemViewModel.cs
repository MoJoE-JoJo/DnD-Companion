using CombatTracker.Models;
using System.Windows.Input;

namespace CombatTracker.ViewModels;

public class ParticipantListItemViewModel : BaseViewModel
{
    private Participant _participant;
    public Participant Participant
    {
        get => _participant;
        set
        {
            _participant = value;
            OnPropertyChanged(string.Empty);
        }
    }

    public int CurrentHealth
    {
        get => Participant.CurrentHealth;
        set
        {
            SetProperty(Participant.CurrentHealth, value, val => Participant.CurrentHealth = val);
            OnPropertyChanged(nameof(HealthText)); // Notify change for CurrentHealth
            OnPropertyChanged(nameof(HealthTextColor)); // Notify change for CurrentHealth
        }
    }

    public int? InitiativeRoll
    {
        get => Participant.InitiativeRoll; // TODO Might need to change this to use a text field in the viewModel
        set => SetProperty(-1, value, val => Participant.InitiativeRoll = val);
    }

    public string Name { get => Participant.Name; }
    public InitiativeType Type { get => Participant.Type; }

    public string HealthText => $"Health: {Participant.CurrentHealth}/{Participant.MaxHealth}";

    public string HealthTextColor { get => GetHealthColor(); }

    private string _damageHealingAmount;
    public string DamageHealingAmount
    {
        get => _damageHealingAmount;
        set => SetProperty(ref _damageHealingAmount, value);
    }

    public bool Surprised
    {
        get => Participant.Surprised;
        set => SetProperty(Participant.Surprised, value, val => Participant.Surprised = val);
    }

    public ParticipantListItemViewModel(Participant participant)
    {
        Participant = participant;
    }

    public ICommand AddHealthCommand => new Command<string>((string amount) =>
    {
        if (int.TryParse(amount, out int intAmount) && CurrentHealth < Participant.MaxHealth)
        {
            CurrentHealth += intAmount;
            CurrentHealth = Math.Min(Participant.MaxHealth, CurrentHealth);
            DamageHealingAmount = "";
        }
    });
    public ICommand RemoveHealthCommand => new Command<string>((string amount) =>
    {
        if (int.TryParse(amount, out int intAmount) && CurrentHealth > 0)
        {
            CurrentHealth -= intAmount;
            DamageHealingAmount = "";
        }
    }
    );

    private string GetHealthColor()
    {
        var percentageHealth = (double)Participant.CurrentHealth / Participant.MaxHealth;
        return percentageHealth switch
        {
            > 0.5 => "Black",
            <= 0.5 and > 0.25 => "Orange",
            <= 0.25 and > 0 => "Red",
            <= 0 => "Magenta",
            _ => "Grey"
        };
    }

}