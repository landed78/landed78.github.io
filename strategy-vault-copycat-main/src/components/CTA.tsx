import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-vault-navy to-vault-navy-light">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
          Get started with Strategy Vault, today.
        </h2>
        <Button variant="vaultOrange" size="xl">
          Book a consultation
        </Button>
      </div>
    </section>
  );
};