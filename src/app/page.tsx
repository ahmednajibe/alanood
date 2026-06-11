import { SiteHeader } from "@/components/site/site-header";
import { Hero } from "@/components/site/hero";
import { Sectors } from "@/components/site/sectors";
import { Centers } from "@/components/site/centers";
import { Media } from "@/components/site/media";
import { SiteFooter } from "@/components/site/site-footer";
import { AiAssistant } from "@/components/site/ai-assistant";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Sectors />
        <Centers />
        <Media />
      </main>
      <SiteFooter />
      <AiAssistant />
    </>
  );
}
