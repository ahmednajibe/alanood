"use client";

import { useEffect, useState } from "react";
import { LockKeyhole, Menu, X, Globe } from "lucide-react";

import { Button } from "@/components/ui/button";
import { BrandLockup } from "@/components/site/brand";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<"ar" | "en">("ar");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const isAr = lang === "ar";

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/70 bg-white/80 backdrop-blur-md shadow-[0_8px_30px_-18px_rgba(15,23,42,0.25)]"
          : "border-b border-transparent bg-white/40 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <BrandLockup
          line1={nav.brandLine1}
          line2={nav.brandLine2}
          sub={nav.brandEn}
        />

        {/* Center nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-3.5 py-2 text-sm font-medium text-brand-slate/80 transition-colors hover:text-brand-green"
            >
              {isAr ? link.label : link.labelEn}
              <span className="absolute inset-x-3 -bottom-0.5 h-0.5 origin-center scale-x-0 rounded-full bg-brand-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setLang(isAr ? "en" : "ar")}
            className="hidden items-center gap-1.5 rounded-lg border border-border bg-white/70 px-3 py-2 text-xs font-semibold text-brand-slate transition-colors hover:border-brand-green/40 hover:text-brand-green sm:inline-flex"
            aria-label="Toggle language"
          >
            <Globe className="size-3.5" />
            {isAr ? "EN" : "العربية"}
          </button>

          <Button className="hidden h-10 gap-2 rounded-xl bg-[#136946] px-4 text-sm font-semibold text-white shadow-sm hover:bg-[#136946]/90 sm:inline-flex">
            <LockKeyhole className="size-4" />
            {isAr ? nav.sso : nav.ssoEn}
          </Button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-lg border border-border bg-white/70 text-brand-slate lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/60 bg-white/95 backdrop-blur-md transition-[max-height,opacity] duration-300 lg:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-brand-slate/90 transition-colors hover:bg-brand-green/5 hover:text-brand-green"
            >
              {isAr ? link.label : link.labelEn}
            </a>
          ))}
          <div className="mt-2 flex items-center gap-2">
            <Button className="h-11 flex-1 gap-2 rounded-xl bg-[#136946] text-sm font-semibold text-white hover:bg-[#136946]/90">
              <LockKeyhole className="size-4" />
              {isAr ? nav.sso : nav.ssoEn}
            </Button>
            <button
              type="button"
              onClick={() => setLang(isAr ? "en" : "ar")}
              className="grid h-11 w-14 place-items-center rounded-xl border border-border text-xs font-semibold text-brand-slate"
            >
              {isAr ? "EN" : "ع"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
