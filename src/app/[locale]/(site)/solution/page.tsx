// app/[locale]/solution/page.tsx

"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function SolutionPage() {
  const t = useTranslations();

  return (
    <>
      <PageHeader
        title={t("solution.header.title")}
        subtitle={t("solution.header.subtitle")}
        imageSrc="/headers/solution.jpg"
        height={320}
      />

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">{t("solution.body.title")}</h2>
        <p className="text-lg text-gray-700 mb-6">{t("solution.body.paragraph")}</p>
        <a
          href="https://example.com" // 👉 lien prod à remplacer
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-[--primary] text-[--on-primary] rounded-lg hover:opacity-90"
        >
          {t("solution.body.cta")}
        </a>
      </section>
    </>
  );
}

