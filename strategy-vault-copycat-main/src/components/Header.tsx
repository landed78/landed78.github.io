import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <div className="font-bold text-xl text-vault-navy">
          Strategy Vault
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-vault-navy transition-colors">
            Services
          </a>
          <a href="#about" className="text-sm font-medium hover:text-vault-navy transition-colors">
            About
          </a>
          <a href="#team" className="text-sm font-medium hover:text-vault-navy transition-colors">
            Team
          </a>
          <a href="#blog" className="text-sm font-medium hover:text-vault-navy transition-colors">
            Blog
          </a>
          <Button variant="vault" size="sm">
            Get Started
          </Button>
        </nav>
        
        <Button variant="vault" size="sm" className="md:hidden">
          Menu
        </Button>
      </div>
    </header>
  );
};