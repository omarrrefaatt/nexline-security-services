// @ts-expect-error PageShell is a JavaScript module without TypeScript declarations.
import PageShell from "../../components/layout/PageShell.jsx";
// @ts-expect-error Hero is a JavaScript module without TypeScript declarations.
import Hero from "../../sections/home/Hero.jsx";
// @ts-expect-error TrustedBy is a JavaScript module without TypeScript declarations.
import TrustedBy from "../../sections/home/TrustedBy.jsx";

function Home() {
  return (
    <PageShell>
      <Hero />
      <TrustedBy />
    </PageShell>
  );
}

export default Home;
