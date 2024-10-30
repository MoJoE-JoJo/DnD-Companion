namespace CombatTracker.src.Behaviours;

public class IntegerOnlyBehavior : Behavior<Entry>
{
    protected override void OnAttachedTo(Entry entry)
    {
        entry.TextChanged += OnTextChanged;
        entry.Keyboard = Keyboard.Numeric;
        base.OnAttachedTo(entry);
    }

    protected override void OnDetachingFrom(Entry entry)
    {
        entry.TextChanged -= OnTextChanged;
        base.OnDetachingFrom(entry);
    }

    private void OnTextChanged(object sender, TextChangedEventArgs e)
    {
        var entry = (Entry)sender;

        // Allow the field to be empty
        if (string.IsNullOrEmpty(e.NewTextValue))
            return;

        // Check if the new text is a valid integer
        if (!int.TryParse(e.NewTextValue, out _))
        {
            // Revert to the previous valid value without triggering a loop
            entry.TextChanged -= OnTextChanged;
            entry.Text = e.OldTextValue;
            entry.TextChanged += OnTextChanged;
        }
    }
}
