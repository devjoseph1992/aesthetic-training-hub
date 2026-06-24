"use client";

import { SiteHeader } from "@/components/layouts/SiteHeader";
import { MarketplaceHero } from "@/components/marketplace/MarketplaceHero";
import { StatsBar } from "@/components/marketplace/StatsBar";
import { DirectorySection } from "@/components/marketplace/DirectorySection";
import { practitioners } from "@/data/practitioners";
import { usePractitionerDirectory } from "@/hooks/usePractitionerDirectory";
import { useMarketplaceStats } from "@/hooks/useMarketplaceStats";

export default function Home() {
  const {
    selectedSpecialism,
    selectedLocation,
    selectedTier,
    specialisms,
    locations,
    filteredPractitioners,
    setSelectedSpecialism,
    setSelectedLocation,
    setSelectedTier,
    resetFilters,
  } = usePractitionerDirectory({
    practitioners,
  });

  const stats = useMarketplaceStats({
    practitioners,
  });

  return (
    <>
      <SiteHeader />

      <main>
        <MarketplaceHero />

        <StatsBar
          totalTrainers={stats.totalTrainers}
          premiumTrainers={stats.premiumTrainers}
          specialismCount={stats.specialismCount}
        />

        <DirectorySection
          practitioners={filteredPractitioners}
          specialisms={specialisms}
          locations={locations}
          selectedSpecialism={selectedSpecialism}
          selectedLocation={selectedLocation}
          selectedTier={selectedTier}
          onSpecialismChange={setSelectedSpecialism}
          onLocationChange={setSelectedLocation}
          onTierChange={setSelectedTier}
          onResetFilters={resetFilters}
        />
      </main>
    </>
  );
}