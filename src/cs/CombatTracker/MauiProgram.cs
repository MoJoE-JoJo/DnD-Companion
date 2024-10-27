using CombatTracker.src.Utilities;
using CombatTracker.ViewModels;
using Microsoft.Extensions.Logging;

namespace CombatTracker
{
    public static class MauiProgram
    {
        public static MauiApp CreateMauiApp()
        {
            var builder = MauiApp.CreateBuilder();
            builder
                .UseMauiApp<App>()
                .ConfigureFonts(fonts =>
                {
                    fonts.AddFont("OpenSans-Regular.ttf", "OpenSansRegular");
                    fonts.AddFont("OpenSans-Semibold.ttf", "OpenSansSemibold");
                });

            builder.AddDependencyInjection();

#if DEBUG
            builder.Logging.AddDebug();
#endif


            return builder.Build();
        }

        public static void AddDependencyInjection(this MauiAppBuilder builder)
        {
            builder.Services.AddScoped<MainPage>();
            builder.Services.AddTransient<RoundTrackerViewModel>();
            builder.Services.AddSingleton<GlobalStore>();
        }
    }
}
