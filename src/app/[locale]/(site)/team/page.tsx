// app/[locale]/team/page.tsx


"use client";

import { useTranslations } from "next-intl";
import PageHeader from "@/components/PageHeader";

export default function TeamPage() {
  const t = useTranslations();
  const team = [
    { name: "Pierre Cazals", role: t("team.members.pierre"), img: "/placeholder.png" },
    { name: "Ali Al Zoabi", role: t("team.members.ali"), img: "/placeholder.png" },
    { name: "Satya Tamby", role: t("team.members.satya"), img: "/placeholder.png" }
  ];

  return (
    <>
      <PageHeader
        title={t("team.header.title")}
        subtitle={t("team.header.subtitle")}
        imageSrc="/headers/team.jpg"
        height={320}
      />

      <section className="p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-8">{t("team.body.title")}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="border rounded-lg p-4 text-center shadow-sm"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
