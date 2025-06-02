
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/hooks/useWallet";
import EmotionalLogger from "./EmotionalLogger";

const Header = () => {
  const { account, isConnected, isLoading, connectWallet, disconnectWallet, formatAddress } = useWallet();
  const [showLogger, setShowLogger] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(`#${sectionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartLogging = () => {
    if (isConnected) {
      setShowLogger(true);
    } else {
      scrollToSection('cta');
    }
  };

  return (
    <>
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
            {isConnected ? (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium text-green-700">
                    {formatAddress(account!)}
                  </span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={disconnectWallet}
                  className="hidden sm:inline-flex"
                >
                  Disconnect
                </Button>
              </div>
            ) : (
              <Button 
                variant="outline" 
                className="hidden sm:inline-flex"
                onClick={connectWallet}
                disabled={isLoading}
              >
                {isLoading ? 'Connecting...' : 'Connect Wallet'}
              </Button>
            )}
            <Button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={handleStartLogging}
            >
              {isConnected ? 'Log Emotion' : 'Start Logging'}
            </Button>
          </div>
        </nav>
      </header>

      <EmotionalLogger 
        isOpen={showLogger} 
        onClose={() => setShowLogger(false)} 
      />
    </>
  );
};

export default Header;
