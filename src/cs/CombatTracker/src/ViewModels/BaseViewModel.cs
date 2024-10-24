using System.ComponentModel;
using System.Runtime.CompilerServices;

namespace CombatTracker.ViewModels;

public class BaseViewModel : INotifyPropertyChanged
{
    public event PropertyChangedEventHandler PropertyChanged;

    protected void SetProperty<T>(ref T field, T value, [CallerMemberName] string propertyName = "")
    {
        if (!Equals(field, value))
        {
            field = value;
            OnPropertyChanged(propertyName); // reports this property
        }
    }

    protected void SetProperty<T>(T currentValue, T newValue, Action<T> setValue, [CallerMemberName] string propertyName = "")
    {
        if (!Equals(currentValue, newValue))
        {
            setValue(newValue);  // Update the property value
            OnPropertyChanged(propertyName);  // Notify that the property has changed
        }
    }

    public void OnPropertyChanged([CallerMemberName] string name = "") =>
        PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(name));
}