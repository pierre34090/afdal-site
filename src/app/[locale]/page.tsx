// src/app/[locale]/page.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4">
      <h1 className="text-4xl font-bold mb-6">{t("hero.title")}</h1>
      <p className="max-w-xl text-lg text-gray-700 mb-8">{t("hero.subtitle")}</p>
      <Link
        href={`/${locale}/solution`}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        {t("hero.cta")}
      </Link>
    </section>
  );
}
