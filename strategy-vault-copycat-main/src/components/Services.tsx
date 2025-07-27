import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import businessDevelopmentImg from "@/assets/business-development.jpeg";
import businessAnalysisImg from "@/assets/business-analysis.jpeg";
import agileDeliveryImg from "@/assets/agile-delivery.jpeg";
import coachingImg from "@/assets/coaching.jpeg";

const services = [
  {
    title: "Business & product development",
    image: businessDevelopmentImg,
    description: "Strategic business growth and product development services"
  },
  {
    title: "Business Analysis",
    image: businessAnalysisImg,
    description: "Comprehensive analysis to identify opportunities and optimize processes"
  },
  {
    title: "Agile Project Delivery",
    image: agileDeliveryImg,
    description: "Efficient project delivery using agile methodologies"
  },
  {
    title: "Coaching",
    image: coachingImg,
    description: "Professional coaching to enhance team performance and capabilities"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-vault-navy mb-4">
            Our services
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-vault-navy/20 group-hover:bg-vault-navy/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-vault-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-vault-gray text-sm">
                    {service.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="vaultOutline" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};