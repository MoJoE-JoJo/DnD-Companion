using System.ComponentModel;
using System.Diagnostics;
using System.Runtime.CompilerServices;

namespace CombatTracker.ViewModels;

public class BaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    protected void SetProperty<T>(ref T field, T value)
    {
        if (!field.Equals(value))
        {
            field = value;
            OnPropertyChanged(); // reports this property
        }
    }
    public void OnPropertyChanged([CallerMemberName] string name = "") =>
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}