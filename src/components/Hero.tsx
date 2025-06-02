
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 float-animation"></div>
        <div className="absolute top-40 right-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 float-animation" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 float-animation" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-sm font-medium text-purple-800 mb-6">
            🧠 Powered by Story Protocol + Blockchain
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Own Your <span className="text-gradient">Emotional</span> Journey
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Every decision you make is part of your personal story. With EmotiLock, your emotions, actions, and outcomes become a permanent, secure part of your digital narrative.
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-gray-500 mb-6">
            ✨ Track your trades. See how you felt. Grow over time. ✨
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="px-8 py-4 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 pulse-glow">
            Start Your Story
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
            View Demo
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">10,000+</div>
            <div className="text-gray-600">Emotional Logs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">95%</div>
            <div className="text-gray-600">Decision Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gradient mb-2">∞</div>
            <div className="text-gray-600">Stories Created</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
