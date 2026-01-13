import Hero from "./_components/Hero";
import HowItWorks from "./_components/HowItWorks";
import Trends from "./_components/Trends";
import FAQ from "./_components/FAQ";

export default function HomePage() {
  return (
    <div className="w-full max-w-312 mx-auto">
      <Hero></Hero>
      <Trends></Trends>
      <HowItWorks></HowItWorks>
      <FAQ></FAQ>
    </div>
  );
}
