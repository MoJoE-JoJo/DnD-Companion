using System.Windows.Input;

namespace CombatTracker.ViewModels;

public class RoundViewModel : BaseViewModel
{
    private int _round;

    public int Round
    {
        get => _round;
        set
        {
            SetProperty(ref _round, value);
            OnPropertyChanged(nameof(RoundText));
        }
    }

    public string RoundText => $"Round: {Round}";


    public RoundViewModel()
    {
        Round = 0;
    }

    public ICommand NextRoundCommand => new Command(() => Round++);


}