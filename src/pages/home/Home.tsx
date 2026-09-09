// @ts-expect-error PageShell is a JavaScript module without TypeScript declarations.
import PageShell from "../../components/layout/PageShell.jsx";
// @ts-expect-error Hero is a JavaScript module without TypeScript declarations.
import Hero from "../../sections/home/Hero.jsx";
// @ts-expect-error VisionSection is a JavaScript module without TypeScript declarations.
import VisionSection from "../../sections/home/VisionSection.jsx";
// @ts-expect-error ServicesSection is a JavaScript module without TypeScript declarations.
import ServicesSection from "../../sections/home/ServicesSection.jsx";
// @ts-expect-error AwardsSection is a JavaScript module without TypeScript declarations.
import AwardsSection from "../../sections/home/AwardsSection.jsx";
// @ts-expect-error CareerCTA is a JavaScript module without TypeScript declarations.
import CareerCTA from "../../sections/home/CareerCTA.jsx";
// @ts-expect-error ReviewsSection is a JavaScript module without TypeScript declarations.
import ReviewsSection from "../../sections/home/ReviewsSection.jsx";
// @ts-expect-error TrustedBy is a JavaScript module without TypeScript declarations.
import TrustedBy from "../../sections/home/TrustedBy.jsx";

function Home() {
  return (
    <PageShell>
      <Hero />
      <VisionSection />
      <ServicesSection />
      <AwardsSection />
      <CareerCTA />
      <ReviewsSection />
      <TrustedBy />
    </PageShell>
  );
}

export default Home;