import {
  ArrowUpLeft,
  Users,
  HousePlus,
  GraduationCap,
  BriefcaseBusiness,
  type LucideIcon,
} from "lucide-react";

import { centers, type Center } from "@/lib/content";

const iconMap: Record<Center["icon"], LucideIcon> = {
  youth: Users,
  family: HousePlus,
  training: GraduationCap,
  jobs: BriefcaseBusiness,
};

export function Centers() {
  return (
    <section id="centers" className="relative bg-brand-base py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold tracking-wide text-brand-gold">
              المراكز الاستراتيجية
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-brand-slate sm:text-4xl">
              مراكز نوعية ترافق الإنسان في كل مرحلة
            </h2>
          </div>
          <a
            href="#media"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green transition-colors hover:text-brand-green-dark"
          >
            استكشف جميع المراكز
            <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {centers.map((center, i) => {
            const Icon = iconMap[center.icon];
            return (
              <article
                key={center.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-brand-slate/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-green/30 hover:shadow-[0_24px_50px_-30px_rgba(15,23,42,0.4)]"
              >
                {/* top accent line */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />

                <span className="grid size-12 place-items-center rounded-xl border border-brand-green/15 bg-brand-green/5 text-brand-green transition-colors duration-300 group-hover:bg-brand-green group-hover:text-white">
                  <Icon className="size-6" strokeWidth={1.5} />
                </span>

                <span className="mt-5 inline-flex w-fit rounded-full bg-brand-base px-2.5 py-1 text-[11px] font-semibold text-muted-foreground">
                  {center.tag}
                </span>

                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-brand-slate">
                  {center.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {center.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                  <span className="text-xs font-medium text-muted-foreground/80">
                    {center.titleEn}
                  </span>
                  <span className="grid size-8 place-items-center rounded-full bg-brand-base text-brand-green transition-all duration-300 group-hover:bg-brand-green group-hover:text-white">
                    <ArrowUpLeft className="size-4" />
                  </span>
                </div>

                <span className="pointer-events-none absolute -bottom-10 -left-10 font-heading text-7xl font-extrabold text-brand-slate/[0.03] transition-colors group-hover:text-brand-green/5">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
