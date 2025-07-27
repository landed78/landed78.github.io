import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import approachImage from "@/assets/approach-image.jpeg";

export const Approach = () => {
  return (
    <section id="about" className="py-20 bg-vault-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={approachImage} 
              alt="Our professional team approach" 
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-vault-navy mb-6">
              Our approach
            </h2>
            <p className="text-lg text-vault-gray mb-6 leading-relaxed">
              We are hands-on strategists and analysts who bridge the gap between insight and action. Our integrated approach spans strategic analysis, solution design, and seamless project delivery.
            </p>
            <p className="text-lg text-vault-gray mb-8 leading-relaxed">
              From initial analysis through to execution, we deliver end-to-end solutions that transform business challenges into measurable outcomes.
            </p>
            <Button variant="vault" size="lg">
              Learn more
            </Button>
          </div>
        </div>
        
        <div className="mt-20">
          <Card className="bg-white border-0 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-vault-navy mb-4">
                Providing you with rapid results
              </h3>
              <p className="text-lg text-vault-gray">
                We accelerate the delivery of services that add long-term results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};