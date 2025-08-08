import AbouthUs from "@/components/sections/aboutUs/aboutUs";
import { FAQ } from "@/components/sections/faq/faq";
import Hero from "@/components/sections/hero/hero";
import Services from "@/components/sections/services/services";
import { Testimonials } from "@/components/sections/testimonials/testimonials";

export default function Page() {
  return (
    <>
      <Hero />
      <Services />
      <AbouthUs />
      <Testimonials />
      <FAQ />
    </>
  );
}
