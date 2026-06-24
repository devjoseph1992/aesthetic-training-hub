import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Standard",
    price: 150,
    description: "A clean directory listing for vetted aesthetics trainers.",
    features: [
      "Shown in the public directory",
      "Filterable by specialism",
      "Name, location, tier and specialisms displayed",
    ],
    badge: "Directory listing",
  },
  {
    name: "Premium",
    price: 249,
    description:
      "Higher visibility for trainers who want to stand out to students.",
    features: [
      "Featured carousel placement",
      "Premium highlighted card design",
      "Priority placement above Standard listings",
    ],
    badge: "Featured placement",
    premium: true,
  },
];

export function PricingTiers() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-12">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-black uppercase tracking-wide text-premium">
              Trainer listing plans
            </p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-primary">
              Choose how your profile appears
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Students can browse all vetted trainers, while Premium trainers get
            stronger placement and visual priority in the marketplace.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative overflow-hidden rounded-2xl border p-6 ${
                tier.premium
                  ? "border-premium/50 bg-gradient-to-br from-premium-soft/80 to-card shadow-lg"
                  : "border-border bg-background"
              }`}
            >
              {tier.premium && (
                <div className="absolute right-5 top-5 rounded-full bg-premium px-3 py-1 text-xs font-black uppercase tracking-wide text-white">
                  Best visibility
                </div>
              )}

              <Badge variant={tier.premium ? "premium" : "standard"}>
                {tier.badge}
              </Badge>

              <h3 className="mt-5 text-2xl font-black text-foreground">
                {tier.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {tier.description}
              </p>

              <div className="mt-6 flex items-end gap-1">
                <span className="text-5xl font-black tracking-tight text-primary">
                  £{tier.price}
                </span>
                <span className="pb-2 text-sm font-semibold text-muted-foreground">
                  /month
                </span>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-foreground">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="font-black text-premium">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.premium ? "primary" : "outline"}
                className="mt-6 w-full"
              >
                {tier.premium ? "Upgrade to Premium" : "Start Standard"}
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}