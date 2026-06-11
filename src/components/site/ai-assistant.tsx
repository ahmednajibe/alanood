"use client";

import { useState } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

import { cn } from "@/lib/utils";

const suggestions = [
  "كيف أتقدم لبرامج التمكين؟",
  "ما هي مراكز المؤسسة؟",
  "أين أجد التقرير السنوي؟",
];

export function AiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      {/* Chat panel */}
      <div
        className={cn(
          "w-[min(22rem,calc(100vw-2.5rem))] origin-bottom-right overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_80px_-30px_rgba(15,23,42,0.5)] transition-all duration-300",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0",
        )}
      >
        <div className="flex items-center justify-between bg-brand-green px-5 py-4 text-white">
          <div className="flex items-center gap-3">
            <span className="grid size-9 place-items-center rounded-xl bg-white/15">
              <Bot className="size-5" />
            </span>
            <div className="leading-tight">
              <p className="font-heading text-sm font-bold">مساعد العنود الذكي</p>
              <p className="flex items-center gap-1 text-[11px] text-white/75">
                <span className="size-1.5 rounded-full bg-brand-gold" />
                متصل الآن
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="إغلاق المساعد"
            className="grid size-8 place-items-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        <div className="space-y-3 px-5 py-5">
          <div className="flex items-start gap-2.5">
            <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand-green/10 text-brand-green">
              <Sparkles className="size-4" />
            </span>
            <p className="rounded-2xl rounded-tr-sm bg-brand-base px-4 py-3 text-sm leading-relaxed text-brand-slate">
              أهلاً بك في مؤسسة الأميرة العنود الخيرية. كيف يمكنني مساعدتك اليوم؟
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {suggestions.map((s) => (
              <button
                key={s}
                type="button"
                className="rounded-full border border-brand-green/20 bg-brand-green/5 px-3 py-1.5 text-xs font-medium text-brand-green transition-colors hover:bg-brand-green hover:text-white"
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-border px-4 py-3">
          <input
            type="text"
            placeholder="اكتب رسالتك..."
            className="h-10 flex-1 rounded-xl border border-border bg-brand-base px-3.5 text-sm text-brand-slate outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-brand-green/50"
          />
          <button
            type="button"
            aria-label="إرسال"
            className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand-green text-white transition-colors hover:bg-brand-green-dark"
          >
            <Send className="size-4 -scale-x-100" />
          </button>
        </div>
      </div>

      {/* Floating trigger + popover */}
      <div className="flex items-center gap-3">
        <div className="relative">
          {!open && (
            <span className="absolute inset-0 -z-10 animate-ring rounded-full bg-brand-gold" />
          )}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="اسأل مساعد العنود الذكي"
            className="relative grid size-15 place-items-center rounded-full bg-brand-green text-white shadow-[0_18px_40px_-12px_rgba(19,105,70,0.85)] ring-4 ring-white transition-transform hover:scale-105 active:scale-95"
          >
            {open ? <X className="size-6" /> : <Bot className="size-7" />}
          </button>
        </div>

        {!open && (
          <span className="hidden animate-fade-up items-center gap-2 rounded-full border border-border bg-white px-4 py-2.5 text-sm font-semibold text-brand-slate shadow-lg sm:inline-flex">
            <Sparkles className="size-4 text-brand-gold" />
            اسأل مساعد العنود الذكي
          </span>
        )}
      </div>
    </div>
  );
}
