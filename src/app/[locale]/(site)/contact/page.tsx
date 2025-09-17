// src/app/[locale]/contact/page.tsx
"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import PageHeader from "@/components/PageHeader";

export default function ContactPage() {
  const t = useTranslations();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <>
      <PageHeader
        title={t("contact.header.title")}
        subtitle={t("contact.header.subtitle")}
        imageSrc="/headers/contact.jpg"
        height={320}
      />

      <section className="p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">{t("contact.body.title")}</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder={t("contact.form.name")}
            className="w-full border rounded p-2"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="w-full border rounded p-2"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <textarea
            placeholder={t("contact.form.message")}
            className="w-full border rounded p-2 h-32"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="px-6 py-2 bg-[--primary] text-[--on-primary] rounded hover:opacity-90"
          >
            {t("contact.form.submit")}
          </button>
        </form>
      </section>
    </>
  );
}
