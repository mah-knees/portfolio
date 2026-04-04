import { Header } from "@/components/header";
import { HeroAbout } from "@/components/hero-about";
import { MotionSection } from "@/components/motion-section";
import { SelectedWorks } from "@/components/selected-works";
import { SiteFooter } from "@/components/site-footer";
import { VisualExplorations } from "@/components/visual-explorations";
import { VisualDiary } from "@/components/visual-diary";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <MotionSection>
          <HeroAbout />
        </MotionSection>
        <MotionSection>
          <SelectedWorks />
        </MotionSection>
        <MotionSection>
          <VisualExplorations />
        </MotionSection>
        <MotionSection>
          <VisualDiary />
        </MotionSection>
        <MotionSection>
          <SiteFooter />
        </MotionSection>
      </main>
    </div>
  );
}
