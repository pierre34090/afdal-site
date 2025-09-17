// src/app/[locale]/page.tsx

"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";

export default function HomePage() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <PageHeader
        title={t("home.header.title")}
        subtitle={t("home.header.subtitle")}
        imageSrc="/headers/home.jpg"   // 👉 mets ton image dans public/headers/home.jpg
        height={400}
      />

      <section className="mx-auto max-w-6xl px-4 grid md:grid-cols-2 items-center gap-12 py-20">
        {/* Colonne gauche : texte */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-left">
            {t("hero.title")}
          </h1>
          <p className="max-w-xl text-lg text-gray-700 mb-8 text-left">
            {t("hero.subtitle")}
          </p>
          <Link
            href={`/${locale}/solution`}
            className="px-6 py-3 bg-[--primary] text-[--on-primary] rounded-lg hover:opacity-90"
          >
            {t("hero.cta")}
          </Link>
        </div>

        {/* Colonne droite : visuel placeholder */}
        <div className="aspect-[4/3] rounded-xl bg-[--surface-alt] border" />
      </section>
    </>
  );
}
