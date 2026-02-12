
import React, { useState, useEffect } from 'react';
import { Sparkles, X, MessageCircle, AlertCircle } from 'lucide-react';
import { getAIAssistantMessage } from '../services/geminiService';

const AIAvatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('正在加载小助手的问候...');
  const [isTyping, setIsTyping] = useState(false);

  const fetchGreeting = async () => {
    setIsTyping(true);
    const msg = await getAIAssistantMessage("用户刚刚进入了首页，现在是港硕第1学期末，期末周即将到来");
    setMessage(msg);
    setIsTyping(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      fetchGreeting();
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end">
      {/* Speech Bubble */}
      {isOpen && (
        <div className="mb-4 max-w-[280px] bg-white rounded-3xl p-5 shadow-2xl border border-navy-50 animate-in slide-in-from-bottom-5 fade-in duration-500 relative">
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute -top-2 -right-2 bg-navy-900 text-white p-1 rounded-full shadow-lg hover:bg-vibrant-orange transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center space-x-2 mb-2">
            <Sparkles className="w-4 h-4 text-vibrant-orange" />
            <span className="text-[10px] font-black text-navy-900 uppercase tracking-widest">Sycle 智能管家</span>
          </div>
          <p className="text-sm text-navy-800 leading-relaxed font-medium">
            {isTyping ? "..." : message}
          </p>
          <div className="mt-3 flex space-x-2">
            <div className="flex-1 h-1 bg-navy-50 rounded-full overflow-hidden">
              <div className="h-full bg-vibrant-orange w-1/3"></div>
            </div>
            <span className="text-[8px] font-bold text-gray-400">期末周提示</span>
          </div>
          {/* Bubble tail */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white border-r border-b border-navy-50 rotate-45"></div>
        </div>
      )}

      {/* Avatar Button */}
      <button 
        onClick={() => {
          if (!isOpen) fetchGreeting();
          setIsOpen(!isOpen);
        }}
        className={`group relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 shadow-xl ${
          isOpen ? 'bg-vibrant-orange rotate-90' : 'bg-navy-900 hover:scale-110'
        }`}
      >
        <div className="absolute inset-0 rounded-full bg-vibrant-orange/20 animate-ping"></div>
        {isOpen ? (
          <X className="w-8 h-8 text-white" />
        ) : (
          <div className="relative">
            <MessageCircle className="w-8 h-8 text-white" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-navy-900 rounded-full"></div>
          </div>
        )}
      </button>
    </div>
  );
};

export default AIAvatar;
