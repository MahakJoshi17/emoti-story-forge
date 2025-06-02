
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: "📖",
      title: "My Emotional Storybook",
      description: "Day-by-day emotional logs with mood meter graphs. Each log becomes a minted chapter using Story Protocol records.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: "🧬",
      title: "Emotional DNA",
      description: "A unique string of emotion-based actions that define your identity. Can be minted or forked as IP for apps, DAOs, or analysis.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "🖼️",
      title: "Emotion Artifacts",
      description: "NFTs representing emotional signatures like 'My Angry Trade Loss on March 3rd' stored as creative IP nodes.",
      gradient: "from-pink-500 to-red-500"
    },
    {
      icon: "📊",
      title: "Decision Analytics",
      description: "AI-powered insights showing correlations between emotions and outcomes. Learn when you make your best decisions.",
      gradient: "from-green-500 to-blue-500"
    },
    {
      icon: "🔗",
      title: "Story Chain",
      description: "Link emotional logs like a story chain. Show your growth from 'chaotic trader' to 'emotionally aware investor'.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "🛡️",
      title: "Ownership & Privacy",
      description: "Your emotional data is yours. Blockchain verified, IPFS stored, with full control over sharing and monetization.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Turn Your <span className="text-gradient">Feelings</span> into Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each emotion becomes data. Each decision becomes a story. Each story becomes valuable intellectual property.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
