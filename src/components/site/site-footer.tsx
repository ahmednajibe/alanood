import { MapPin, Phone, Mail, Building2 } from "lucide-react";

import { BrandMark } from "@/components/site/brand";
import {
  XIcon,
  LinkedInIcon,
  YouTubeIcon,
  InstagramIcon,
} from "@/components/site/social-icons";
import { footer, nav } from "@/lib/content";

const socials = [
  { label: "X", Icon: XIcon, href: "#" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "#" },
  { label: "YouTube", Icon: YouTubeIcon, href: "#" },
  { label: "Instagram", Icon: InstagramIcon, href: "#" },
];

export function SiteFooter() {
  return (
    <footer
      id="contact"
      className="relative mt-auto overflow-hidden bg-brand-slate text-slate-300"
    >
      <div className="pointer-events-none absolute -top-24 right-0 size-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 size-80 rounded-full bg-brand-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + about */}
          <div>
            <div className="flex items-center gap-3">
              <BrandMark />
              <span className="flex flex-col leading-tight">
                <span className="font-heading text-base font-extrabold text-white">
                  {nav.brandLine1} {nav.brandLine2}
                </span>
                <span className="text-xs text-slate-400">{nav.brandEn}</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              {footer.about}
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {socials.map(({ label, Icon, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-colors hover:border-brand-gold/40 hover:bg-brand-gold/10 hover:text-brand-gold"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-sm font-bold tracking-wide text-white">
                {col.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-400 transition-colors hover:text-brand-gold"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-14 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2 lg:grid-cols-4">
          <ContactItem icon={<MapPin className="size-4" />} label={footer.contact.address} />
          <ContactItem icon={<Building2 className="size-4" />} label={footer.contact.pmo} />
          <ContactItem
            icon={<Phone className="size-4" />}
            label={footer.contact.phone}
            dir="ltr"
          />
          <ContactItem
            icon={<Mail className="size-4" />}
            label={footer.contact.email}
            dir="ltr"
          />
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-slate-400 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {footer.rights}
          </p>
          <p className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-brand-gold" />
            متوافق مع معايير الحوكمة والامتثال الوطنية
          </p>
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon,
  label,
  dir,
}: {
  icon: React.ReactNode;
  label: string;
  dir?: "ltr" | "rtl";
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-brand-green/20 text-brand-gold">
        {icon}
      </span>
      <span className="text-sm text-slate-300" dir={dir}>
        {label}
      </span>
    </div>
  );
}
