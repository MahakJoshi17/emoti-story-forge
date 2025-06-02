
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConnectWallet = () => {
    // Placeholder for wallet connection logic
    console.log("Connect wallet clicked");
    alert("Wallet connection coming soon!");
  };

  const handleStartLogging = () => {
    // Scroll to CTA section
    scrollToSection('cta');
  };

  return (
    <header className="relative z-10 px-6 py-6">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
            <span className="text-white font-bold text-lg">E</span>
          </div>
          <span className="text-2xl font-bold text-gradient">EmotiLock</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('features')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection('story')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Your Story
          </button>
          <button 
            onClick={() => scrollToSection('tech')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Technology
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="outline" 
            className="hidden sm:inline-flex"
            onClick={handleConnectWallet}
          >
            Connect Wallet
          </Button>
          <Button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            onClick={handleStartLogging}
          >
            Start Logging
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
