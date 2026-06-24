"use client";

import { Button } from "@/components/ui/Button";
import { Select } from "@/components/ui/Select";

type MarketplaceHeroProps = {
  selectedSpecialism: string;
  selectedLocation: string;
  specialisms: string[];
  locations: string[];
  onSpecialismChange: (value: string) => void;
  onLocationChange: (value: string) => void;
};

export function MarketplaceHero({
  selectedSpecialism,
  selectedLocation,
  specialisms,
  locations,
  onSpecialismChange,
  onLocationChange,
}: MarketplaceHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted">
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(212,161,63,0.20),transparent_35rem)] lg:block" />

      <div className="mx-auto grid min-h-[470px] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10">
          <div className="mb-5 inline-flex rounded-full bg-premium-soft px-4 py-2 text-xs font-bold uppercase tracking-wide text-premium">
            UK&apos;s trusted aesthetics trainer directory
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.06em] text-primary md:text-7xl">
            Find vetted UK aesthetics trainers
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Compare trusted trainers by specialism, location, and listing tier.
            Premium trainers are featured for stronger visibility.
          </p>

          <div className="mt-8 rounded-2xl border border-border bg-card p-5 shadow-xl">
            <div className="grid gap-4 md:grid-cols-[1fr_1fr_auto] md:items-end">
              <Select
                label="Specialism"
                value={selectedSpecialism}
                placeholder="Select specialism"
                options={[
                  { label: "All specialisms", value: "All" },
                  ...specialisms.map((specialism) => ({
                    label: specialism,
                    value: specialism,
                  })),
                ]}
                onValueChange={onSpecialismChange}
              />

              <Select
                label="Location"
                value={selectedLocation}
                placeholder="Select location"
                options={[
                  { label: "All locations", value: "All" },
                  ...locations.map((location) => ({
                    label: location,
                    value: location,
                  })),
                ]}
                onValueChange={onLocationChange}
              />

              <Button className="h-11 gap-2">
                <span>⌕</span>
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="relative hidden min-h-[390px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-2xl lg:block">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-premium-soft" />

          <div className="absolute left-10 top-10 rounded-2xl bg-background/80 px-5 py-4 shadow-lg backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Educate
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Inspire
            </p>
            <p className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
              Elevate
            </p>
          </div>

          <div className="absolute bottom-0 right-8 h-[340px] w-[260px] rounded-t-full bg-primary shadow-2xl" />
          <div className="absolute bottom-16 right-24 size-24 rounded-full bg-premium-soft shadow-xl" />
          <div className="absolute bottom-28 right-32 size-10 rounded-full bg-background" />

          <div className="absolute bottom-8 left-8 rounded-2xl border border-border bg-card p-5 shadow-xl">
            <p className="text-sm font-bold text-foreground">
              Premium trainer visibility
            </p>
            <p className="mt-1 max-w-[240px] text-sm text-muted-foreground">
              Featured placement helps students discover higher-tier trainers
              faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}