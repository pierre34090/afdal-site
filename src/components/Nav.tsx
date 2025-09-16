// src/components/Nav.tsx
"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcher from "@/components/LocaleSwitcher";

export default function Nav() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <nav className="flex items-center gap-6">
      <Link href={`/${locale}`} className="hover:underline">
        {t("nav.home")}
      </Link>
      <Link href={`/${locale}/who-we-are`} className="hover:underline">
        {t("nav.who")}
      </Link>
      <Link href={`/${locale}/solution`} className="hover:underline">
        {t("nav.solution")}
      </Link>
      <Link href={`/${locale}/team`} className="hover:underline">
        {t("nav.team")}
      </Link>
      <Link href={`/${locale}/contact`} className="hover:underline">
        {t("nav.contact")}
      </Link>

      {/* Switcher de langue à droite (optionnel) */}
      <LocaleSwitcher />
    </nav>
  );
}
