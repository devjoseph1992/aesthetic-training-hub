export type PractitionerTier = "Standard" | "Premium";

export type Practitioner = {
  id: string;
  name: string;
  specialisms: string[];
  location: string;
  latitude: number;
  longitude: number;
  tier: PractitionerTier;
  monthlyPrice: number;
};

export const practitioners: Practitioner[] = [
  {
    id: "pr-001",
    name: "Dr Amelia Hart",
    specialisms: ["Botulinum Toxin", "Dermal Fillers", "Facial Anatomy"],
    location: "London",
    latitude: 51.5072,
    longitude: -0.1276,
    tier: "Premium",
    monthlyPrice: 249,
  },
  {
    id: "pr-002",
    name: "Sophie Bennett RN",
    specialisms: ["Skin Boosters", "Microneedling", "Chemical Peels"],
    location: "Manchester",
    latitude: 53.4808,
    longitude: -2.2426,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-003",
    name: "Dr Ravi Shah",
    specialisms: [
      "Advanced Injectables",
      "Complications Management",
      "Dermal Fillers",
    ],
    location: "Birmingham",
    latitude: 52.4862,
    longitude: -1.8904,
    tier: "Premium",
    monthlyPrice: 249,
  },
  {
    id: "pr-004",
    name: "Claire Morgan",
    specialisms: ["Laser Hair Removal", "IPL", "Skin Rejuvenation"],
    location: "Leeds",
    latitude: 53.8008,
    longitude: -1.5491,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-005",
    name: "Emma Walsh RN",
    specialisms: [
      "Botulinum Toxin",
      "Lip Augmentation",
      "Consultation Skills",
    ],
    location: "Liverpool",
    latitude: 53.4084,
    longitude: -2.9916,
    tier: "Premium",
    monthlyPrice: 249,
  },
  {
    id: "pr-006",
    name: "Dr Hannah Price",
    specialisms: ["Chemical Peels", "Acne Treatments", "Medical Skincare"],
    location: "Bristol",
    latitude: 51.4545,
    longitude: -2.5879,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-007",
    name: "Nadia Khan",
    specialisms: [
      "Brow Mapping",
      "Semi-Permanent Makeup",
      "Micropigmentation",
    ],
    location: "Glasgow",
    latitude: 55.8642,
    longitude: -4.2518,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-008",
    name: "Dr Oliver Reed",
    specialisms: [
      "Facial Anatomy",
      "Advanced Injectables",
      "Non-Surgical Rhinoplasty",
    ],
    location: "London",
    latitude: 51.5072,
    longitude: -0.1276,
    tier: "Premium",
    monthlyPrice: 249,
  },
  {
    id: "pr-009",
    name: "Bethany Clarke",
    specialisms: ["Microneedling", "PRP", "Skin Boosters"],
    location: "Cardiff",
    latitude: 51.4816,
    longitude: -3.1791,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-010",
    name: "Dr Marcus Ellis",
    specialisms: [
      "Complications Management",
      "Emergency Protocols",
      "Dermal Fillers",
    ],
    location: "Newcastle",
    latitude: 54.9783,
    longitude: -1.6178,
    tier: "Premium",
    monthlyPrice: 249,
  },
  {
    id: "pr-011",
    name: "Aisha Patel RN",
    specialisms: ["Botulinum Toxin", "Dermal Fillers", "Lip Augmentation"],
    location: "Nottingham",
    latitude: 52.9548,
    longitude: -1.1581,
    tier: "Standard",
    monthlyPrice: 150,
  },
  {
    id: "pr-012",
    name: "Rachel Thompson",
    specialisms: ["Chemical Peels", "Skin Rejuvenation", "Medical Skincare"],
    location: "Edinburgh",
    latitude: 55.9533,
    longitude: -3.1883,
    tier: "Standard",
    monthlyPrice: 150,
  },
];

export const practitionerSpecialisms = Array.from(
  new Set(practitioners.flatMap((practitioner) => practitioner.specialisms))
).sort();

export const practitionerLocations = Array.from(
  new Set(practitioners.map((practitioner) => practitioner.location))
).sort();

export const tierPrices: Record<PractitionerTier, number> = {
  Standard: 150,
  Premium: 249,
};