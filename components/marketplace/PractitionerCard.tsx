import type { Practitioner } from "@/data/practitioners";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

type PractitionerCardProps = {
  practitioner: Practitioner;
  featured?: boolean;
};

function getInitials(name: string) {
  return name
    .replace("Dr ", "")
    .replace(" RN", "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function PractitionerCard({
  practitioner,
  featured = false,
}: PractitionerCardProps) {
  const isPremium = practitioner.tier === "Premium";

  return (
    <article
      className={`relative overflow-hidden rounded-2xl border bg-card p-5 text-card-foreground shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
        isPremium
          ? "border-premium/50 bg-gradient-to-br from-premium-soft/70 to-card"
          : "border-border"
      } ${featured ? "min-h-[260px]" : ""}`}
    >
      {isPremium && (
        <div className="absolute right-4 top-4 grid size-9 place-items-center rounded-full bg-premium-soft text-lg text-premium">
          ◆
        </div>
      )}

      {featured && isPremium && (
        <div className="absolute left-0 top-0 rounded-br-xl bg-premium px-4 py-1.5 text-[11px] font-black uppercase tracking-wide text-white">
          Premium featured
        </div>
      )}

      <div className={`${featured && isPremium ? "pt-5" : ""} flex gap-4`}>
        <div className="grid size-16 shrink-0 place-items-center rounded-full bg-muted text-lg font-black text-primary ring-4 ring-background">
          {getInitials(practitioner.name)}
        </div>

        <div className="min-w-0 flex-1">
          {!featured && (
            <Badge variant={isPremium ? "premium" : "standard"}>
              {practitioner.tier}
            </Badge>
          )}

          <h3 className="mt-2 text-lg font-black tracking-tight text-foreground">
            {practitioner.name}
          </h3>

          <p className="mt-1 text-sm font-medium text-muted-foreground">
            📍 {practitioner.location}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {practitioner.specialisms.map((specialism) => (
              <span
                key={specialism}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {specialism}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-border bg-background p-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">
              {practitioner.tier} listing
            </p>
          </div>

          <Button
            variant={isPremium ? "primary" : "outline"}
            className="h-9 shrink-0 px-4 text-xs"
          >
            View profile →
          </Button>
        </div>
      </div>
    </article>
  );
}