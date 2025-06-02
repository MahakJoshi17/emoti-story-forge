
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useWallet } from "@/hooks/useWallet";
import EmotionalLogger from "./EmotionalLogger";

const CTASection = () => {
  const { isConnected, connectWallet, isLoading } = useWallet();
  const [showLogger, setShowLogger] = useState(false);

  const handleStartTrial = () => {
    if (isConnected) {
      setShowLogger(true);
    } else {
      connectWallet();
    }
  };

  const handleViewDocs = () => {
    console.log("View documentation clicked");
    alert("Documentation is being prepared. Stay tuned!");
  };

  return (
    <>
      <section id="cta" className="py-20 px-6 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Own Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">Emotional Journey?</span>
          </h2>
          <p className="text-xl mb-12 opacity-90 max-w-3xl mx-auto">
            Start logging your emotions today and turn your personal growth into valuable intellectual property.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">🚀 Early Access</h3>
                <p className="mb-6 opacity-90">
                  {isConnected 
                    ? "Your wallet is connected! Start building your emotional story today."
                    : "Connect your MetaMask wallet and start building your emotional story today."
                  }
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
                  onClick={handleStartTrial}
                  disabled={isLoading}
                >
                  {isLoading ? 'Connecting...' : isConnected ? 'Start Logging' : 'Connect Wallet & Start'}
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">📚 Learn More</h3>
                <p className="mb-6 opacity-90">Explore the technology behind emotional IP and Story Protocol.</p>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  onClick={handleViewDocs}
                >
                  View Documentation
                </Button>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <p className="text-lg opacity-80 mb-6">
              "Turn your feelings into a franchise. Own the moments that changed you."
            </p>
            <div className="flex justify-center space-x-8 text-sm opacity-60">
              <span>• Blockchain Verified</span>
              <span>• Story Protocol IP</span>
              <span>• Open Source</span>
            </div>
          </div>
        </div>
      </section>

      <EmotionalLogger 
        isOpen={showLogger} 
        onClose={() => setShowLogger(false)} 
      />
    </>
  );
};

export default CTASection;
