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

    public string Name { get => Participant.Name; }
    public InitiativeType Type { get => Participant.Type; }

    public string HealthText => $"Health: {Participant.CurrentHealth}/{Participant.MaxHealth}";

    private string _healthTextColor = "Black";
    public string HealthTextColor
    {
        get => _healthTextColor;
        set => SetProperty(ref _healthTextColor, value);
    }

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

    public ParticipantViewModel(Participant participant)
    {
        Participant = participant;
    }

    public ICommand AddHealthCommand => new Command<string>((string amount) =>
    {
        if (int.TryParse(amount, out int intAmount) && CurrentHealth < Participant.MaxHealth)
        {
            CurrentHealth += intAmount;
            DamageHealingAmount = "";
            UpdateHealthColor();
        }
    });
    public ICommand RemoveHealthCommand => new Command<string>((string amount) =>
    {
        if (int.TryParse(amount, out int intAmount) && CurrentHealth > 0)
        {
            CurrentHealth -= intAmount;
            DamageHealingAmount = "";
            UpdateHealthColor();
        }
    }
    );

    private void UpdateHealthColor()
    {
        var percentageHealth = (double)Participant.CurrentHealth / Participant.MaxHealth;
        HealthTextColor = percentageHealth switch
        {
            > 0.5 => "Black",
            <= 0.5 and > 0.25 => "Orange",
            <= 0.25 and > 0 => "Red",
            <= 0 => "Magenta",
            _ => "Grey"
        };
    }


}