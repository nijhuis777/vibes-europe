import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "./dictionaries";
import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Approach } from "@/components/sections/approach";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Hero lang={lang as Locale} dict={dict} />
      <Mission dict={dict} />
      <Approach dict={dict} />
      <ProjectsPreview lang={lang as Locale} dict={dict} />
      <Contact dict={dict} />
    </>
  );
}
