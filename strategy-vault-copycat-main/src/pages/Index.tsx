import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Approach } from "@/components/Approach";
import { Services } from "@/components/Services";
import { Team } from "@/components/Team";
import { Testimonial } from "@/components/Testimonial";
import { Blog } from "@/components/Blog";
import { Location } from "@/components/Location";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Approach />
        <Services />
        <Team />
        <Testimonial />
        <Blog />
        <Location />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
