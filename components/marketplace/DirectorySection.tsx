"use client";

import type { Practitioner, PractitionerTier } from "@/data/practitioners";
import { Select } from "@/components/ui/Select";
import { PractitionerCard } from "@/components/marketplace/PractitionerCard";
import { Button } from "@/components/ui/Button";

type DirectorySectionProps = {
  practitioners: Practitioner[];
  specialisms: string[];
  locations: string[];
  selectedSpecialism: string;
  selectedLocation: string;
  selectedTier: "All" | PractitionerTier;
  onSpecialismChange: (value: string) => void;
  onLocationChange: (value: string) => void;
  onTierChange: (value: "All" | PractitionerTier) => void;
  onResetFilters: () => void;
};

export function DirectorySection({
  practitioners,
  specialisms,
  locations,
  selectedSpecialism,
  selectedLocation,
  selectedTier,
  onSpecialismChange,
  onLocationChange,
  onTierChange,
  onResetFilters,
}: DirectorySectionProps) {
  const hasActiveFilters =
    selectedSpecialism !== "All" ||
    selectedLocation !== "All" ||
    selectedTier !== "All";

  return (
    <section 
        id="directory"
        className="mx-auto mt-12 max-w-7xl px-6 pb-16">
      <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
        <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
          <aside>
            <p className="text-sm font-black uppercase tracking-wide text-premium">
              Directory
            </p>

            <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">
              All Trainers
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Filter by specialism, location, or listing tier to find the right
              trainer.
            </p>

            <div className="mt-6 rounded-2xl border border-border bg-background p-4">
              <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">
                Prices
              </p>

              <div className="mt-4 space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">
                    Standard
                  </span>
                  <span className="text-sm font-black text-primary">
                    £150/mo
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-premium">
                    Premium
                  </span>
                  <span className="text-sm font-black text-primary">
                    £249/mo
                  </span>
                </div>
              </div>
            </div>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                className="mt-4 h-9 px-0 text-sm text-muted-foreground"
                onClick={onResetFilters}
              >
                Clear filters
              </Button>
            )}
          </aside>

          <div>
            <div className="mb-6 rounded-2xl border border-border bg-background p-4">
              <div className="flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
                <div className="grid gap-4 md:grid-cols-3">
                  <Select
                    label="Filter by specialism"
                    value={selectedSpecialism}
                    options={[
                      { label: "All Specialisms", value: "All" },
                      ...specialisms.map((specialism) => ({
                        label: specialism,
                        value: specialism,
                      })),
                    ]}
                    onValueChange={onSpecialismChange}
                  />

                  <Select
                    label="Filter by location"
                    value={selectedLocation}
                    options={[
                      { label: "All Locations", value: "All" },
                      ...locations.map((location) => ({
                        label: location,
                        value: location,
                      })),
                    ]}
                    onValueChange={onLocationChange}
                  />

                  <Select
                    label="Filter by tier"
                    value={selectedTier}
                    options={[
                      { label: "All Tiers", value: "All" },
                      { label: "Standard - £150/month", value: "Standard" },
                      { label: "Premium - £249/month", value: "Premium" },
                    ]}
                    onValueChange={(value) =>
                      onTierChange(value as "All" | PractitionerTier)
                    }
                  />
                </div>

                <div className="rounded-xl bg-muted px-4 py-3 text-sm font-medium text-foreground">
                  Showing{" "}
                  <span className="font-black">{practitioners.length}</span>{" "}
                  {practitioners.length === 1 ? "trainer" : "trainers"}
                </div>
              </div>
            </div>

            {practitioners.length > 0 ? (
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {practitioners.map((practitioner) => (
                  <PractitionerCard
                    key={practitioner.id}
                    practitioner={practitioner}
                  />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border bg-muted p-10 text-center">
                <h3 className="text-xl font-black text-foreground">
                  No trainers found
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Try changing the selected filters.
                </p>

                <Button className="mt-5" onClick={onResetFilters}>
                  Reset filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}