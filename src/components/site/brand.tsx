import { cn } from "@/lib/utils";

/**
 * Monogram-style placeholder mark for the Alanood Foundation logo.
 * Uses the Arabic letter "ع" inside a layered emblem to read as a
 * premium institutional crest while remaining a clear placeholder.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "relative grid size-11 place-items-center rounded-2xl bg-brand-green text-white shadow-[0_8px_24px_-10px_rgba(19,105,70,0.7)] ring-1 ring-brand-green/20",
        className,
      )}
    >
      <span className="absolute inset-1 rounded-xl border border-white/25" />
      <span className="font-heading text-xl leading-none font-extrabold">
        ع
      </span>
      <span className="absolute -bottom-0.5 left-1/2 h-1 w-5 -translate-x-1/2 rounded-full bg-brand-gold" />
    </span>
  );
}

export function BrandLockup({
  className,
  line1,
  line2,
  sub,
}: {
  className?: string;
  line1: string;
  line2: string;
  sub: string;
}) {
  return (
    <a href="#home" className={cn("flex items-center gap-3", className)}>
      <BrandMark />
      <span className="flex flex-col leading-tight">
        <span className="font-heading text-base font-extrabold text-brand-green">
          {line1}{" "}
          <span className="font-bold text-brand-slate">{line2}</span>
        </span>
        <span className="text-[11px] font-medium tracking-wide text-muted-foreground">
          {sub}
        </span>
      </span>
    </a>
  );
}
