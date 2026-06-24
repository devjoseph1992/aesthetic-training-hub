import { useMemo } from "react";
import type { Practitioner } from "@/data/practitioners";

type UseMarketplaceStatsProps = {
  practitioners: Practitioner[];
};

export function useMarketplaceStats({ practitioners }: UseMarketplaceStatsProps) {
  return useMemo(() => {
    const premiumTrainers = practitioners.filter(
      (practitioner) => practitioner.tier === "Premium"
    ).length;

    const specialismCount = new Set(
      practitioners.flatMap((practitioner) => practitioner.specialisms)
    ).size;

    const locationCount = new Set(
      practitioners.map((practitioner) => practitioner.location)
    ).size;

    return {
      totalTrainers: practitioners.length,
      premiumTrainers,
      standardTrainers: practitioners.length - premiumTrainers,
      specialismCount,
      locationCount,
    };
  }, [practitioners]);
}