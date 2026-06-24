import type { Practitioner } from "@/data/practitioners";
import { Button } from "@/components/ui/Button";
import { PractitionerCard } from "@/components/marketplace/PractitionerCard";

type FeaturedTrainersProps = {
  practitioners: Practitioner[];
};

export function FeaturedTrainers({ practitioners }: FeaturedTrainersProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 lg:grid-cols-[240px_1fr]">
      <div>
        <p className="text-sm font-black uppercase tracking-wide text-premium">
          ✧ Featured
        </p>

        <h2 className="mt-2 text-2xl font-black tracking-tight text-primary">
          Premium Trainers
        </h2>

        <p className="mt-3 text-sm leading-6 text-muted-foreground">
          Premium trainers get priority placement in the directory.
        </p>

        <Button variant="outline" className="mt-6">
          View all premium trainers →
        </Button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {practitioners.map((practitioner) => (
          <PractitionerCard
            key={practitioner.id}
            practitioner={practitioner}
            featured
          />
        ))}
      </div>
    </section>
  );
}