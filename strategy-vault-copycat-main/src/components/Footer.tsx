export const Footer = () => {
  return (
    <footer className="bg-vault-navy text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Strategy Vault</h3>
            <p className="text-white/80">
              Delivering real insights, digital growth strategies and projects to move your business forward faster.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Business Development</li>
              <li>Business Analysis</li>
              <li>Agile Project Delivery</li>
              <li>Coaching</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-white/80">
              <li>About</li>
              <li>Team</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li>Sydney, Australia</li>
              <li>info@strategyvault.com</li>
              <li>+61 (0) 123 456 789</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Strategy Vault. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};