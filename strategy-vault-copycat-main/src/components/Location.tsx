import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const Location = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-vault-navy mb-6">
              In-person and remote options
            </h2>
            <p className="text-lg text-vault-gray mb-8 leading-relaxed">
              Our office is conveniently located in Sydney, Australia. Can't make it into the office? No worries – we've got you covered via zoom, teams or hangouts.
            </p>
            
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="text-vault-orange" size={24} />
                  <h3 className="text-xl font-bold text-vault-navy">
                    Sydney, Australia
                  </h3>
                </div>
                <p className="text-vault-gray">
                  Flexible meeting options available including in-person consultations and virtual meetings.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <Card className="border-0 shadow-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="h-96 bg-gradient-to-br from-vault-navy to-vault-blue flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin size={64} className="mx-auto mb-4 text-vault-orange" />
                    <h3 className="text-2xl font-bold mb-2">Sydney Office</h3>
                    <p className="text-white/90">Professional consulting services</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};