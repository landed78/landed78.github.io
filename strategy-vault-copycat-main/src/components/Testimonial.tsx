import { Card, CardContent } from "@/components/ui/card";

export const Testimonial = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto border-0 shadow-xl bg-gradient-to-r from-vault-navy to-vault-navy-light">
          <CardContent className="p-12 text-center">
            <blockquote className="text-2xl lg:text-3xl font-medium text-white mb-6 leading-relaxed">
              "Strategy Vault helped us develop our product growth strategy in a very tough and competitive market segment. It really made a big difference in terms of results."
            </blockquote>
            <cite className="text-lg text-white/90 not-italic">
              — Sean, Client of Strategy Vault
            </cite>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};