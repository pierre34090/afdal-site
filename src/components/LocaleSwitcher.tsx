// src/components/LocaleSwitcher.tsx
"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

const LOCALES = ["en", "fr", "ar"] as const;

export default function LocaleSwitcher() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname() || "/";

  const parts = pathname.split("/").filter(Boolean); // [locale, ...rest]
  const rest = parts.slice(1).join("/");
  const restPath = rest ? `/${rest}` : "";

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600">{t("lang.switch") ?? "Language"}:</span>
      {LOCALES.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}${restPath}`}
          className={`text-sm px-2 py-1 rounded ${loc === locale ? "bg-gray-200" : "hover:bg-gray-100"}`}
        >
          {t(`lang.${loc}`) ?? loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
