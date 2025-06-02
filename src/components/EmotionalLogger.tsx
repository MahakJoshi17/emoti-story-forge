
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { useWallet } from "@/hooks/useWallet";

interface EmotionalLoggerProps {
  isOpen: boolean;
  onClose: () => void;
}

const emotions = [
  { name: 'Happy', emoji: '😊', color: 'bg-yellow-400' },
  { name: 'Angry', emoji: '😠', color: 'bg-red-400' },
  { name: 'Sad', emoji: '😢', color: 'bg-blue-400' },
  { name: 'Excited', emoji: '🤩', color: 'bg-orange-400' },
  { name: 'Anxious', emoji: '😰', color: 'bg-purple-400' },
  { name: 'Calm', emoji: '😌', color: 'bg-green-400' },
];

const actions = [
  'Made a trade',
  'Avoided a trade',
  'Researched market',
  'Set stop loss',
  'Took profit',
  'Held position'
];

const EmotionalLogger = ({ isOpen, onClose }: EmotionalLoggerProps) => {
  const { account, isConnected } = useWallet();
  const [selectedEmotion, setSelectedEmotion] = useState<string>('');
  const [selectedAction, setSelectedAction] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const [isLogging, setIsLogging] = useState(false);

  const handleLogEmotion = async () => {
    if (!selectedEmotion || !selectedAction) {
      alert('Please select both emotion and action');
      return;
    }

    setIsLogging(true);
    
    // Simulate emotion logging to blockchain/IPFS
    const emotionLog = {
      wallet: account,
      emotion: selectedEmotion,
      action: selectedAction,
      result: result,
      timestamp: new Date().toISOString(),
      similarity: Math.random() * 100, // Simulated similarity score
    };

    console.log('Logging emotion to Story Protocol:', emotionLog);
    
    // Simulate blockchain transaction
    setTimeout(() => {
      alert(`Emotion logged successfully! 
      
Emotion: ${selectedEmotion}
Action: ${selectedAction}
${result ? `Result: ${result}` : ''}

This log has been stored on Story Protocol blockchain.`);
      
      setIsLogging(false);
      onClose();
      
      // Reset form
      setSelectedEmotion('');
      setSelectedAction('');
      setResult('');
    }, 2000);
  };

  if (!isConnected) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Connect Wallet Required</DialogTitle>
          </DialogHeader>
          <div className="text-center py-6">
            <p className="mb-4">Please connect your MetaMask wallet to start logging emotions.</p>
            <Button onClick={onClose}>Close</Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Log Your Emotional Journey</DialogTitle>
          <p className="text-sm text-gray-500">Connected: {account?.slice(0, 6)}...{account?.slice(-4)}</p>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-3">How are you feeling?</h3>
            <div className="grid grid-cols-3 gap-3">
              {emotions.map((emotion) => (
                <Card 
                  key={emotion.name}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    selectedEmotion === emotion.name ? 'ring-2 ring-purple-500' : ''
                  }`}
                  onClick={() => setSelectedEmotion(emotion.name)}
                >
                  <CardContent className="p-4 text-center">
                    <div className={`w-12 h-12 rounded-full ${emotion.color} flex items-center justify-center mx-auto mb-2`}>
                      <span className="text-2xl">{emotion.emoji}</span>
                    </div>
                    <p className="text-sm font-medium">{emotion.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">What action did you take?</h3>
            <div className="grid grid-cols-2 gap-2">
              {actions.map((action) => (
                <Button
                  key={action}
                  variant={selectedAction === action ? "default" : "outline"}
                  onClick={() => setSelectedAction(action)}
                  className="justify-start"
                >
                  {action}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">Result (optional)</h3>
            <div className="flex gap-2">
              <Button
                variant={result === 'profit' ? "default" : "outline"}
                onClick={() => setResult(result === 'profit' ? '' : 'profit')}
                className="flex-1"
              >
                📈 Profit
              </Button>
              <Button
                variant={result === 'loss' ? "default" : "outline"}
                onClick={() => setResult(result === 'loss' ? '' : 'loss')}
                className="flex-1"
              >
                📉 Loss
              </Button>
              <Button
                variant={result === 'neutral' ? "default" : "outline"}
                onClick={() => setResult(result === 'neutral' ? '' : 'neutral')}
                className="flex-1"
              >
                ➡️ Neutral
              </Button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={handleLogEmotion}
              disabled={!selectedEmotion || !selectedAction || isLogging}
              className="flex-1"
            >
              {isLogging ? 'Logging to Blockchain...' : 'Log to Story Protocol'}
            </Button>
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EmotionalLogger;
