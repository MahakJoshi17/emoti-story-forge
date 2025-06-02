
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StorySection = () => {
  return (
    <section id="story" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Write Your <span className="text-gradient">Emotional Blockchain</span> Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each decision is a sentence. Each emotion is a color. Your life, in data and feeling.
          </p>
        </div>
        
        <div className="space-y-16">
          {/* Story Prompts */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-0">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Write Your Story</h3>
                <p className="text-gray-600">Each decision is a sentence. Each emotion is a color. Your life, in data and feeling.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-0">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">Own Your Moments</h3>
                <p className="text-gray-600">From pain to success, every log is part of your personal growth story — tokenized.</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-gradient-to-br from-pink-50 to-red-50 border-0">
              <CardContent className="p-0 text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3">Build Your Universe</h3>
                <p className="text-gray-600">Turn your feelings into a franchise. Build your emotional identity like a Marvel origin story.</p>
              </CardContent>
            </Card>
          </div>
          
          {/* Story Protocol Integration */}
          <div className="bg-gradient-to-r from-purple-900 to-pink-900 rounded-3xl p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Powered by Story Protocol
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Your emotional journey becomes verifiable intellectual property. Track the evolution of your decisions, own your growth story, and build on your emotional intelligence.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-3">📊 IP-Based Emotions</h4>
                  <p className="opacity-80">Each emotional log becomes a registered creative node, building your unique IP portfolio.</p>
                </div>
                <div className="text-left">
                  <h4 className="text-xl font-semibold mb-3">🔗 Narrative Linking</h4>
                  <p className="opacity-80">Connect your emotional journey like story chapters, showing evolution over time.</p>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-purple-900 hover:bg-gray-100">
                Learn About Story Protocol
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
