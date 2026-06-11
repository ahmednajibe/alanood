import { ArrowLeft, CalendarDays, Newspaper } from "lucide-react";

import { Button } from "@/components/ui/button";
import { news } from "@/lib/content";

export function Media() {
  return (
    <section id="media" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-brand-gold">
              <Newspaper className="size-4" />
              المركز الإعلامي
            </span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold text-balance text-brand-slate sm:text-4xl">
              آخر الأخبار والإصدارات البحثية
            </h2>
          </div>
          <Button
            variant="outline"
            className="h-11 gap-2 rounded-xl border-brand-slate/15 bg-white px-5 font-semibold text-brand-slate hover:border-brand-green/40 hover:text-brand-green"
          >
            جميع الأخبار
            <ArrowLeft className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {news.map((item, i) => (
            <article
              key={item.title}
              className="group flex animate-fade-up flex-col overflow-hidden rounded-2xl border border-brand-slate/10 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              {/* Visual masthead placeholder */}
              <div className="relative h-44 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-green via-brand-green-dark to-[#06301f] transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(231,154,58,0.4),transparent_55%)]" />
                <div className="absolute inset-0 bg-grid-faint opacity-20 mix-blend-overlay" />
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-brand-green backdrop-blur">
                  {item.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5 text-brand-gold" />
                  {item.date}
                </span>
                <h3 className="mt-3 font-heading text-lg font-bold leading-snug text-brand-slate transition-colors group-hover:text-brand-green">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {item.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-green">
                  اقرأ المزيد
                  <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
