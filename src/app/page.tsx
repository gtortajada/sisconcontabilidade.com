import AboutUs from "@/components/sections/AboutUs";
import FAQ from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
