
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TechSection = () => {
  const techStack = [
    {
      category: "Frontend",
      items: ["React + TypeScript", "Tailwind CSS", "Chart.js", "Web3 Integration"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Blockchain",
      items: ["Sepolia Testnet", "Smart Contracts", "MetaMask Integration", "Ethers.js"],
      icon: "⛓️",
      color: "from-purple-500 to-violet-500"
    },
    {
      category: "Storage",
      items: ["IPFS via Pinata", "MongoDB", "Local JSON", "Encrypted Metadata"],
      icon: "💾",
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "AI & Analytics",
      items: ["Emotion Vectors", "Cosine Similarity", "PCA Analysis", "Pattern Recognition"],
      icon: "🧠",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="tech" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built with <span className="text-gradient">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A powerful tech stack that combines emotional intelligence with blockchain innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techStack.map((tech, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
              <CardHeader className="pb-3">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${tech.color} flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {tech.icon}
                </div>
                <CardTitle className="text-lg font-bold">
                  {tech.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-gray-600 flex items-center">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Architecture Flow */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-8">How It Works</h3>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl mb-3 mx-auto">
                😊
              </div>
              <h4 className="font-semibold mb-2">Capture Emotion</h4>
              <p className="text-sm text-gray-600">Log your emotional state before making decisions</p>
            </div>
            
            <div className="hidden md:block text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mb-3 mx-auto">
                📊
              </div>
              <h4 className="font-semibold mb-2">Analyze & Store</h4>
              <p className="text-sm text-gray-600">AI processes and stores data on IPFS</p>
            </div>
            
            <div className="hidden md:block text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center text-white text-2xl mb-3 mx-auto">
                ⛓️
              </div>
              <h4 className="font-semibold mb-2">Blockchain Log</h4>
              <p className="text-sm text-gray-600">Record immutably on blockchain</p>
            </div>
            
            <div className="hidden md:block text-2xl text-gray-400">→</div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mb-3 mx-auto">
                📖
              </div>
              <h4 className="font-semibold mb-2">Create Story</h4>
              <p className="text-sm text-gray-600">Build your narrative with Story Protocol</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSection;
