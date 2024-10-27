using System.Collections.ObjectModel;
using System.Collections.Specialized;

namespace CombatTracker.src.Utilities;

//public class SuspendableObservableCollection<T> : ObservableCollection<T>
//{
//    private bool _suppressNotifications = false;

//    protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
//    {
//        if (!_suppressNotifications)
//        {
//            base.OnCollectionChanged(e);
//        }
//    }

//    public void SuspendNotifications()
//    {
//        _suppressNotifications = true;
//    }

//    public void ResumeNotifications()
//    {
//        _suppressNotifications = false;
//        // Raise a reset event to update the UI
//        OnCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Reset));
//    }
//}
public class SuspendableObservableCollection<T> : ObservableCollection<T>
{
    private bool _suppressNotifications;
    private List<NotifyCollectionChangedEventArgs> _deferredEvents = new();

    public void SuspendNotifications()
    {
        _suppressNotifications = true;
    }

    public void ResumeNotifications()
    {
        _suppressNotifications = false;
        if (_deferredEvents.Any())
        {
            // Raise a Reset event to refresh the UI after batch updates
            OnCollectionChanged(new NotifyCollectionChangedEventArgs(NotifyCollectionChangedAction.Reset));
            _deferredEvents.Clear();
        }
    }

    protected override void OnCollectionChanged(NotifyCollectionChangedEventArgs e)
    {
        if (_suppressNotifications)
        {
            // Queue the event to raise it later when notifications are resumed
            _deferredEvents.Add(e);
        }
        else
        {
            base.OnCollectionChanged(e);
        }
    }
}

