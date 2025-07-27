import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpeg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-vault-navy to-vault-navy-light">
      <div className="container mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Multi-disciplinary expertise connecting strategy, innovation, and execution for real-world results.
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Get in touch for a free chat or consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="vaultOrange" size="xl">
                Book a Consultation
              </Button>
              <Button variant="vaultOutline" size="xl" className="border-white text-white hover:bg-white hover:text-vault-navy">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-vault-orange/20 to-transparent rounded-3xl"></div>
            <img 
              src={heroImage} 
              alt="Strategy and business consulting" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-vault-orange/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-gradient-to-tr from-vault-blue/10 to-transparent"></div>
    </section>
  );
};