import { ArrowLeft, FileText, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-background pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Ambient brand glows + editorial grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid-faint opacity-70" />
      <div className="pointer-events-none absolute -top-24 right-1/4 size-[28rem] rounded-full bg-brand-green/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 size-[26rem] rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        {/* Text — reading start (right in RTL) */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-1.5 text-xs font-semibold text-brand-green">
            <Sparkles className="size-3.5 text-brand-gold" />
            {hero.eyebrow}
          </span>

          <h1 className="mt-6 font-heading text-4xl leading-[1.15] font-extrabold text-balance text-brand-slate sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="h-12 gap-2 rounded-xl bg-[#136946] px-6 text-base font-semibold text-white shadow-[0_14px_34px_-16px_rgba(19,105,70,0.9)] hover:bg-[#136946]/90">
              {hero.primaryCta}
              <ArrowLeft className="size-4 transition-transform group-hover/button:-translate-x-1" />
            </Button>
            <Button
              variant="outline"
              className="h-12 gap-2 rounded-xl border-brand-slate/15 bg-white px-6 text-base font-semibold text-brand-slate hover:border-brand-green/40 hover:text-brand-green"
            >
              <FileText className="size-4" />
              {hero.secondaryCta}
            </Button>
          </div>

          {/* Inline stat strip */}
          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border/70 pt-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-heading text-2xl font-extrabold text-brand-green sm:text-3xl">
                  {s.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Image — masked premium placeholder */}
        <div className="animate-fade-up [animation-delay:120ms]">
          <div className="relative aspect-4/5 w-full overflow-hidden rounded-[2rem] ring-1 ring-brand-slate/10 shadow-[0_40px_80px_-40px_rgba(15,23,42,0.45)] sm:aspect-square lg:aspect-4/5">
            {/* Layered gradient stands in for cultural heritage photography */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-dark to-[#06301f]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(231,154,58,0.45),transparent_55%)]" />
            <div className="absolute inset-0 bg-grid-faint opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 backdrop-blur-[2px]" />

            {/* Caption chip */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
              <p className="text-sm font-semibold text-white">
                {hero.imageCaption}
              </p>
              <div className="mt-2 h-1 w-16 rounded-full bg-brand-gold" />
            </div>
          </div>

          {/* Floating accent badge */}
          <div className="animate-float pointer-events-none absolute -bottom-5 left-6 hidden rounded-2xl border border-border bg-white/90 px-5 py-4 shadow-xl backdrop-blur lg:block">
            <p className="font-heading text-lg font-extrabold text-brand-slate">
              رؤية 2030
            </p>
            <p className="text-xs text-muted-foreground">شريك في التنمية الوطنية</p>
          </div>
        </div>
      </div>
    </section>
  );
}
