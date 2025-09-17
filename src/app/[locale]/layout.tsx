// src/app/[locale]/layout.tsx
import { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import Nav from "@/components/Nav";

type Props = { children: ReactNode; params: { locale: string } };

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  const messages = await getMessages({ locale });

  return (
    <>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <header className="border-b">
          <Nav />
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t p-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Afdal
        </footer>
      </NextIntlClientProvider>
    </>
  );
}
