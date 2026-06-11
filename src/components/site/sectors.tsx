import {
  ArrowLeft,
  Check,
  HeartHandshake,
  TrendingUp,
  Building2,
  LineChart,
  Landmark,
  Handshake,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  sectorCharity,
  sectorInvestment,
  hero,
  investmentMetrics,
} from "@/lib/content";

const investmentTicker = [
  { label: "العقار والتطوير", icon: Building2 },
  { label: "الأسواق المالية", icon: LineChart },
  { label: "الأوقاف الاستثمارية", icon: Landmark },
  { label: "الشراكات النوعية", icon: Handshake },
];

export function Sectors() {
  return (
    <section id="about" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold tracking-wide text-brand-gold">
            منظومة المؤسسة
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-brand-slate sm:text-4xl">
            قطاعان.. رسالة واحدة للأثر المستدام
          </h2>
          <p className="mt-4 text-muted-foreground">
            نوازن بين العطاء الخيري والاستدامة المالية عبر قطاعين متكاملين يعملان
            بحوكمة واحدة ورؤية موحّدة.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Card A — Charity (green) */}
          <article className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-green/15 bg-white p-8 shadow-[0_30px_70px_-50px_rgba(19,105,70,0.65)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-50px_rgba(19,105,70,0.8)] lg:p-10">
            <div className="pointer-events-none absolute -top-24 -left-20 size-72 rounded-full bg-brand-green/10 blur-3xl transition-opacity duration-500 group-hover:opacity-80" />

            <div className="relative flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-green text-white shadow-lg">
                <HeartHandshake className="size-7" />
              </span>
              <div>
                <span className="inline-flex rounded-full bg-brand-green/10 px-3 py-1 text-xs font-semibold text-brand-green">
                  {sectorCharity.badge}
                </span>
                <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-brand-slate">
                  {sectorCharity.title}
                </h3>
              </div>
            </div>

            <p className="relative mt-5 font-heading text-lg font-bold text-brand-green">
              {sectorCharity.subtitle}
            </p>
            <p className="relative mt-2 leading-relaxed text-muted-foreground">
              {sectorCharity.description}
            </p>

            <ul className="relative mt-6 grid gap-3 sm:grid-cols-2">
              {sectorCharity.bullets.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-2.5 text-sm font-medium text-brand-slate"
                >
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-green/10 text-brand-green">
                    <Check className="size-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* Impact statistics counter banner */}
            <div className="relative mt-8 grid grid-cols-3 gap-px overflow-hidden rounded-2xl bg-brand-green text-white">
              {hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-brand-green px-3 py-5 text-center transition-colors hover:bg-brand-green-dark"
                >
                  <div className="font-heading text-2xl font-extrabold tabular-nums">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-white/75">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex-1" />
            <Button className="relative mt-2 h-12 w-full gap-2 rounded-xl bg-[#136946] text-base font-semibold text-white hover:bg-[#136946]/90 sm:w-auto sm:self-start sm:px-7">
              {sectorCharity.cta}
              <ArrowLeft className="size-4" />
            </Button>
          </article>

          {/* Card B — Investment (gold) */}
          <article className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-brand-gold/25 bg-white p-8 shadow-[0_30px_70px_-50px_rgba(231,154,58,0.7)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_40px_90px_-50px_rgba(231,154,58,0.85)] lg:p-10">
            <div className="pointer-events-none absolute -top-24 -right-20 size-72 rounded-full bg-brand-gold/15 blur-3xl transition-opacity duration-500 group-hover:opacity-90" />

            <div className="relative flex items-center gap-4">
              <span className="grid size-14 place-items-center rounded-2xl bg-brand-gold text-white shadow-lg">
                <TrendingUp className="size-7" />
              </span>
              <div>
                <span className="inline-flex rounded-full bg-brand-gold/15 px-3 py-1 text-xs font-semibold text-[#b9711d]">
                  {sectorInvestment.badge}
                </span>
                <h3 className="mt-1.5 font-heading text-2xl font-extrabold text-brand-slate">
                  {sectorInvestment.title}
                </h3>
              </div>
            </div>

            {/* Sleek animated marquee banner */}
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-brand-gold/25 bg-gradient-to-l from-brand-gold/10 to-transparent py-3">
              <div className="flex w-max animate-marquee items-center gap-8 px-4">
                {[...investmentTicker, ...investmentTicker].map((t, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-2 text-sm font-semibold whitespace-nowrap text-[#b9711d]"
                  >
                    <t.icon className="size-4" />
                    {t.label}
                    <span className="text-brand-gold/50">•</span>
                  </span>
                ))}
              </div>
            </div>

            <p className="relative mt-5 font-heading text-lg font-bold text-[#b9711d]">
              {sectorInvestment.subtitle}
            </p>
            <p className="relative mt-2 leading-relaxed text-muted-foreground">
              {sectorInvestment.description}
            </p>

            {/* Investment sectors grid */}
            <div className="relative mt-6 grid grid-cols-2 gap-3">
              {sectorInvestment.bullets.map((b, i) => (
                <div
                  key={b}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-brand-base/60 px-3.5 py-3 text-sm font-medium text-brand-slate transition-colors hover:border-brand-gold/40"
                >
                  <span className="grid size-7 shrink-0 place-items-center rounded-lg bg-brand-gold/15 font-heading text-xs font-bold text-[#b9711d]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {b}
                </div>
              ))}
            </div>

            {/* Investment metrics */}
            <div className="relative mt-6 grid grid-cols-3 gap-3">
              {investmentMetrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-brand-gold/20 bg-brand-gold/5 px-3 py-3 text-center"
                >
                  <div className="font-heading text-xl font-extrabold text-[#b9711d] tabular-nums">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-8 flex-1" />
            <Button className="relative mt-2 h-12 w-full gap-2 rounded-xl bg-brand-gold text-base font-semibold text-white hover:bg-brand-gold/90 sm:w-auto sm:self-start sm:px-7">
              {sectorInvestment.cta}
              <ArrowLeft className="size-4" />
            </Button>
          </article>
        </div>
      </div>
    </section>
  );
}
