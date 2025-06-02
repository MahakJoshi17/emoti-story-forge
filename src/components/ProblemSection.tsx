
import { Card, CardContent } from "@/components/ui/card";

const ProblemSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-gradient">Problem</span> We Solve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Most people forget how they felt when making important decisions. What if your emotions were part of your history — verifiable, immutable, and evolving?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">😤</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Emotional Trading Losses</h3>
                  <p className="text-gray-600">You made that trade while angry and lost money, but can't remember the emotional context that led to the decision.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🔄</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Repeated Mistakes</h3>
                  <p className="text-gray-600">Without emotional context, you keep making the same decisions in similar emotional states.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">No Growth Tracking</h3>
                  <p className="text-gray-600">Your personal development journey isn't documented or verifiable as intellectual property.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 border-0 shadow-xl">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4 text-gradient">EmotiLock Solution</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Capture emotional state at critical moments</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Log decisions immutably on blockchain</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Create traceable IP trail with Story Protocol</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Visualize evolution: "From chaos to emotional awareness"</span>
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

export default ProblemSection;
