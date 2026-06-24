type StatsBarProps = {
  totalTrainers: number;
  premiumTrainers: number;
  specialismCount: number;
};

export function StatsBar({
  totalTrainers,
  premiumTrainers,
  specialismCount,
}: StatsBarProps) {
  const stats = [
    {
      icon: "👥",
      value: totalTrainers,
      label: "Listed trainers",
    },
    {
      icon: "✦",
      value: premiumTrainers,
      label: "Premium trainers",
      premium: true,
    },
    {
      icon: "🎓",
      value: specialismCount,
      label: "Specialisms",
    },
    {
      icon: "⌖",
      value: "UK-wide",
      label: "Coverage",
    },
  ];

  return (
    <section className="relative z-10 mx-auto -mt-9 w-full max-w-6xl rounded-2xl border border-border bg-card px-6 py-6 text-card-foreground shadow-xl">
      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex items-center justify-center gap-4 ${
              index !== 0 ? "md:border-l md:border-border" : ""
            }`}
          >
            <span
              className={`text-3xl ${
                stat.premium ? "text-premium" : "text-primary"
              }`}
            >
              {stat.icon}
            </span>

            <div>
              <p className="text-2xl font-black text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}