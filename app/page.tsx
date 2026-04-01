import { Hero } from "@/components/sections/hero";
import { Mission } from "@/components/sections/mission";
import { Approach } from "@/components/sections/approach";
import { ProjectsPreview } from "@/components/sections/projects-preview";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Approach />
      <ProjectsPreview />
      <Contact />
    </>
  );
}
