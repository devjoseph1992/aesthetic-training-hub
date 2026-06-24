import { Button } from "@/components/ui/Button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="grid size-11 place-items-center rounded-2xl border border-premium/30 bg-premium-soft text-xl text-premium">
            ✦
          </div>

          <div>
            <p className="text-lg font-black uppercase leading-none tracking-[0.18em] text-primary">
              Aesthetic
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.42em] text-primary">
              Training Hub
            </p>
          </div>
        </div>

        <nav className="hidden items-center gap-10 text-sm font-semibold text-foreground md:flex">
          <a className="border-b-2 border-primary pb-7" href="#">
            Directory
          </a>
          <a className="pb-7 text-muted-foreground hover:text-foreground" href="#">
            How it works
          </a>
          <a className="pb-7 text-muted-foreground hover:text-foreground" href="#">
            For trainers
          </a>
        </nav>

        <Button>List your training</Button>
      </div>
    </header>
  );
}