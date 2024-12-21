using CombatTracker.src.Utilities;
using System.Collections.ObjectModel;

namespace CombatTracker.ViewModels;

public class ParticipantListViewModel : BaseViewModel
{
    public ObservableCollection<ParticipantListItemViewModel> Participants { get; set; }
    public GlobalStore GlobalStore { get; private set; }

    private double _participantListCollectionHeight;
    public double ParticipantListCollectionHeight
    {
        get => _participantListCollectionHeight;
        set => SetProperty(ref _participantListCollectionHeight, value);
    }

    public ParticipantListViewModel(GlobalStore globalStore)
    {
        GlobalStore = globalStore;
        GlobalStore.WindowHeightChanged += ResizeElements;
        GlobalStore.InitiativeRolled += ReorderParticipants;

        InitializeParticipants();
    }

    private void InitializeParticipants()
    {
        Participants = new ObservableCollection<ParticipantListItemViewModel>();
        foreach (var participant in GlobalStore.Participants)
        {
            Participants.Add(new ParticipantListItemViewModel(participant));
        }
    }

    private void ReorderParticipants()
    {
        for (int i = 0; i < Participants.Count; i++)
        {
            Participants[i].Participant = GlobalStore.Participants[i];
        }
    }

    private void ResizeElements()
    {
        ParticipantListCollectionHeight = GlobalStore.WindowHeight - 124 - 30 - 5; //Height of above items, height of gap, height of margin
    }
}