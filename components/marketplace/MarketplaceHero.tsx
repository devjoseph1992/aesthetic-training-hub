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

export function MarketplaceHero() {
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
            Discover vetted UK aesthetics trainers. Standard profiles are listed
            at £150/month, while Premium profiles are £249/month and receive
            featured placement across the directory.
          </p>

          <div className="mt-8 grid max-w-xl gap-4 sm:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-wide text-muted-foreground">
                Standard
              </p>

              <p className="mt-2 text-4xl font-black tracking-tight text-primary">
                £150
                <span className="text-base font-semibold text-muted-foreground">
                  /month
                </span>
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Appears in the public trainer directory.
              </p>
            </article>

            <article className="rounded-2xl border border-premium/50 bg-premium-soft p-5 shadow-sm">
              <p className="text-xs font-black uppercase tracking-wide text-premium">
                Premium
              </p>

              <p className="mt-2 text-4xl font-black tracking-tight text-primary">
                £249
                <span className="text-base font-semibold text-muted-foreground">
                  /month
                </span>
              </p>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Featured carousel and priority placement.
              </p>
            </article>
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