import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const Chatbot = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Liyab's assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(messageText),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleClearChat = () => {
    setMessages([
      {
        id: "1",
        text: "Chat cleared! How can I help you today?",
        sender: "bot",
        timestamp: new Date(),
      },
    ]);
    toast({
      title: "Chat Cleared",
      description: "Conversation history has been reset.",
    });
  };

  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi") || lowerInput.includes("hey")) {
      return "Hello! 👋 I'm here to help you learn about Liyab. Ask me about projects, skills, experience, or how to get in touch!";
    } else if (lowerInput.includes("project") || lowerInput.includes("work") || lowerInput.includes("portfolio")) {
      return "Liyab has worked on amazing projects like:\n• LIYAB - Creative platform\n• Prevail - Task management\n• Enabled - Accessibility tools\n• Print Palace, MSDEES, and more!\n\nScroll down to the Projects section to see them all with live demos! 🚀";
    } else if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack")) {
      return "Liyab's tech stack includes:\n• Frontend: React, TypeScript, Tailwind CSS\n• Backend: Node.js, Supabase\n• Tools: Git, Vite, Modern DevOps\n\nCheck the About section for the complete list! 💻";
    } else if (lowerInput.includes("contact") || lowerInput.includes("email") || lowerInput.includes("reach")) {
      return "You can connect with Liyab through:\n• Contact form on this page 📧\n• LinkedIn profile 💼\n• GitHub repositories 🐙\n\nJust scroll to the Contact section below!";
    } else if (lowerInput.includes("experience") || lowerInput.includes("background") || lowerInput.includes("resume")) {
      return "Liyab has extensive experience in:\n• Full-stack web development\n• UI/UX design & implementation\n• Modern web technologies\n• Client collaboration\n\nVisit the Experience section to see the full journey! 📈";
    } else if (lowerInput.includes("who") || lowerInput.includes("about")) {
      return "Liyab J Tachin is a passionate Full-Stack Developer specializing in creating modern, responsive web applications. With expertise in React, TypeScript, and cutting-edge technologies, Liyab builds solutions that make a difference! 🎯";
    } else if (lowerInput.includes("thank") || lowerInput.includes("thanks")) {
      return "You're very welcome! Feel free to ask anything else about Liyab's work and expertise! 😊";
    } else if (lowerInput.includes("help") || lowerInput.includes("?")) {
      return "I can help you with:\n• Learning about Liyab's projects\n• Understanding the tech stack\n• Finding contact information\n• Exploring work experience\n\nJust ask away! 💬";
    } else {
      return "That's an interesting question! Try asking me about:\n• Liyab's projects and portfolio\n• Technical skills and expertise\n• Work experience\n• How to get in contact\n\nI'm here to help! 🌟";
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[550px] bg-card/95 backdrop-blur-xl border-2 border-primary/30 rounded-3xl shadow-[0_0_60px_rgba(147,51,234,0.4)] overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="bg-gradient-primary p-5 flex justify-between items-center shadow-lg">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center shadow-glow ring-2 ring-white/30">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Chat Assistant</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-xs text-white/90 font-medium">Online • {messages.length} messages</p>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClearChat}
                className="text-white hover:bg-white/20"
                title="Clear chat"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <ScrollArea className="h-[385px] p-5 bg-gradient-to-b from-background/80 to-card/80 backdrop-blur-sm" ref={scrollRef}>
            <div className="space-y-4">{/* ... keep existing code */}
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-5 py-3 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
                      message.sender === "user"
                        ? "bg-gradient-primary text-white shadow-[0_4px_20px_rgba(147,51,234,0.4)]"
                        : "bg-card/90 backdrop-blur border-2 border-primary/20 text-foreground shadow-[0_4px_20px_rgba(147,51,234,0.2)]"
                    }`}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-2 ${message.sender === "user" ? "text-white/80" : "text-muted-foreground"}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start animate-fade-in">
                  <div className="bg-card/90 backdrop-blur border-2 border-primary/20 rounded-2xl px-5 py-4 shadow-lg">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input */}
          <div className="p-4 border-t-2 border-primary/20 bg-card/80 backdrop-blur">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1 bg-background/50 border-2 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl transition-all duration-300"
                disabled={isTyping}
              />
              <Button
                onClick={() => handleSend()}
                size="icon"
                className="bg-gradient-primary hover:shadow-glow hover:scale-110 transition-all duration-300 rounded-xl"
                disabled={isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-gradient-primary shadow-[0_0_50px_rgba(147,51,234,0.6)] hover:shadow-[0_0_70px_rgba(147,51,234,0.8)] hover:scale-110 transition-all duration-300 ring-4 ring-primary/20 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </>
  );
};

export default Chatbot;
