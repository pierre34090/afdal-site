// src/app/[locale]/who-we-are/page.tsx
"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function WhoWeArePage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("who.header.title")}
        subtitle={t("who.header.subtitle")}
        imageSrc="/headers/who.jpg"
        height={320}
      />

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">{t("who.body.title")}</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          {t("who.body.paragraph")}
        </p>
      </section>
    </>
  );
}
