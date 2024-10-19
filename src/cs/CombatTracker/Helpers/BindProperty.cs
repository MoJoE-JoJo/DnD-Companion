
namespace CombatTracker.Helpers;

public record BindProperty<T>
{
    private BindableObject BindObject { get; set; }
    private BindableProperty ValueProperty { get; set; }

    public void Initialize(BindableObject bindObject, BindableProperty valueProperty)
    {
        BindObject = bindObject;
        ValueProperty = valueProperty;
    }

    //private void BindFunc(BindableObject bindable, object oldValue, object newValue) => BindAction.Invoke();

    //private static void BindFunc(BindableObject bindable, object oldValue, object newValue) => bindable.OnPropertyChanged(nameof(RoundText));
    //private readonly BindableProperty ValueProperty = BindableProperty.Create(nameof(Value), typeof(T), typeof(U), 1, propertyChanged: BindFunc);

    // public T Value
    // {
    //     get => (T)BindObject.GetValue(ValueProperty);
    //     set => BindObject.SetValue(ValueProperty, value);
    // }

    public T Get() => (T)BindObject.GetValue(ValueProperty);
    public void Set(T value) => BindObject.SetValue(ValueProperty, value);
}