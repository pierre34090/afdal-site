// src/components/Nav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

export default function Nav() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname() || "/";

  const LANGS = [
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "ar", label: "العربية", flag: "🇸🇦" },
  ];
  const current = LANGS.find(l => l.code === locale) ?? LANGS[0];

  // keep current page, just swap first path segment [locale]
  const withLocale = (target: string) => {
    const parts = pathname.split("/");
    if (parts.length > 1) parts[1] = target;
    return parts.join("/") || `/${target}`;
  };

  return (
    <nav className="w-full h-16 flex items-center justify-between px-6 relative z-50">
      {/* Logo gauche */}
      <Link href={`/${locale}`} className="flex items-center">
        <Image
          src="/brand/afdal-logo.png"
          alt="Afdal"
          width={96}
          height={96}
          className="object-contain"
          priority
        />
      </Link>

      {/* Menu + langue (alignés à droite) */}
      <div className="flex items-center gap-8 text-sm font-medium">
        <Link href={`/${locale}`} className="hover:text-[--color-primary]">
          {t("nav.home")}
        </Link>
        <Link href={`/${locale}/who-we-are`} className="hover:text-[--color-primary]">
          {t("nav.who")}
        </Link>
        <Link href={`/${locale}/solution`} className="hover:text-[--color-primary]">
          {t("nav.solution")}
        </Link>
        <Link href={`/${locale}/team`} className="hover:text-[--color-primary]">
          {t("nav.team")}
        </Link>
        <Link href={`/${locale}/contact`} className="hover:text-[--color-primary]">
          {t("nav.contact")}
        </Link>

        {/* Langue : dropdown au survol, sans "trou d'air" */}
        <div className="relative group">
          <button
            className="inline-flex items-center gap-2 hover:opacity-80 focus:outline-none"
            aria-haspopup="menu"
          >
            <span className="text-base leading-none">{current.flag}</span>
            <span>{current.label}</span>
          </button>

          {/* Collé au bouton : plus de mt-2 ; ouvert sur hover ET focus-within */}
          <div
            className="absolute right-0 top-full w-40 rounded-md border bg-white shadow-lg 
                       opacity-0 translate-y-1 pointer-events-none
                       group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto
                       group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto
                       transition"
            role="menu"
          >
            <ul className="py-2">
              {LANGS.map(l => {
                const active = l.code === locale;
                return (
                  <li key={l.code}>
                    <Link
                      href={withLocale(l.code)}
                      className={`flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-50 ${
                        active ? "font-semibold text-[--color-primary]" : ""
                      }`}
                      role="menuitem"
                    >
                      <span className="text-base leading-none">{l.flag}</span>
                      <span>{l.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
