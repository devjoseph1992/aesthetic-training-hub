"use client";

import { useMemo, useState } from "react";
import type { Practitioner, PractitionerTier } from "@/data/practitioners";

type DirectoryTierFilter = "All" | PractitionerTier;

type UsePractitionerDirectoryProps = {
  practitioners: Practitioner[];
};

function sortPractitioners(practitionerList: Practitioner[]) {
  return [...practitionerList].sort((a, b) => {
    if (a.tier === "Premium" && b.tier !== "Premium") return -1;
    if (a.tier !== "Premium" && b.tier === "Premium") return 1;

    return a.name.localeCompare(b.name);
  });
}

export function usePractitionerDirectory({
  practitioners,
}: UsePractitionerDirectoryProps) {
  const [selectedSpecialism, setSelectedSpecialism] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [selectedTier, setSelectedTier] =
    useState<DirectoryTierFilter>("All");

  const specialisms = useMemo(() => {
    return Array.from(
      new Set(practitioners.flatMap((practitioner) => practitioner.specialisms))
    ).sort();
  }, [practitioners]);

  const locations = useMemo(() => {
    return Array.from(
      new Set(practitioners.map((practitioner) => practitioner.location))
    ).sort();
  }, [practitioners]);

  const filteredPractitioners = useMemo(() => {
    const filtered = practitioners.filter((practitioner) => {
      const matchesSpecialism =
        selectedSpecialism === "All" ||
        practitioner.specialisms.includes(selectedSpecialism);

      const matchesLocation =
        selectedLocation === "All" || practitioner.location === selectedLocation;

      const matchesTier =
        selectedTier === "All" || practitioner.tier === selectedTier;

      return matchesSpecialism && matchesLocation && matchesTier;
    });

    return sortPractitioners(filtered);
  }, [practitioners, selectedSpecialism, selectedLocation, selectedTier]);

  const featuredPractitioners = useMemo(() => {
    return sortPractitioners(
      practitioners.filter((practitioner) => practitioner.tier === "Premium")
    );
  }, [practitioners]);

  const hasActiveFilters =
    selectedSpecialism !== "All" ||
    selectedLocation !== "All" ||
    selectedTier !== "All";

  const resetFilters = () => {
    setSelectedSpecialism("All");
    setSelectedLocation("All");
    setSelectedTier("All");
  };

  return {
    selectedSpecialism,
    selectedLocation,
    selectedTier,
    specialisms,
    locations,
    filteredPractitioners,
    featuredPractitioners,
    resultCount: filteredPractitioners.length,
    hasActiveFilters,
    setSelectedSpecialism,
    setSelectedLocation,
    setSelectedTier,
    resetFilters,
  };
}