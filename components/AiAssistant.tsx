import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Minus } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputValue('');
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: "Tu es l'assistant de Roseval Design (fondé par Antonny F. Ros à Toulouse). Tu réponds avec expertise, courtoisie et brio. Prix: Site Vitrine (399€), E-commerce (900€+), Refonte (400€+), Maintenance (50€/mois), Réseaux Sociaux (40€+). Paiement 3x possible. Ton but : aider le client et le rassurer sur notre professionnalisme local.",
        }
      });

      const aiText = response.text || "Je suis à votre service pour tout projet web à Toulouse.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Service temporairement indisponible. N'hésitez pas à nous appeler !" }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end gap-6">
      {isOpen ? (
        <div className="w-[420px] h-[650px] glass rounded-[40px] border border-white/10 shadow-[0_20px_80px_-20px_rgba(99,102,241,0.3)] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 slide-in-from-bottom-20 duration-500">
          <div className="p-8 bg-slate-900 flex items-center justify-between text-white border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                  <Bot size={28} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-4 border-slate-900"></div>
              </div>
              <div>
                <h3 className="font-bold text-lg outfit">Expert IA Roseval</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Support 24/7 Toulouse</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2.5 rounded-xl transition-colors">
              <Minus size={24} className="text-slate-400" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 p-8 overflow-y-auto space-y-6 bg-slate-950/20">
            {messages.length === 0 && (
              <div className="text-center py-20 animate-in fade-in duration-1000">
                <div className="w-20 h-20 bg-indigo-500/10 rounded-[32px] flex items-center justify-center mx-auto mb-6 text-indigo-400">
                   <Sparkles size={32} />
                </div>
                <h4 className="text-white font-bold mb-2">Comment puis-je vous aider ?</h4>
                <p className="text-slate-500 text-sm px-10">Je connais tous les tarifs de Roseval Design et je peux vous conseiller sur votre futur site à Toulouse.</p>
              </div>
            )}
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[24px] text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-indigo-600 text-white rounded-br-none shadow-lg shadow-indigo-600/10' 
                  : 'glass text-slate-200 rounded-tl-none border-white/10'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass px-6 py-4 rounded-[20px] rounded-tl-none flex gap-1.5 items-center border-white/10">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 glass border-t border-white/5 bg-slate-900/40">
            <div className="relative group">
              <input 
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Posez votre question ici..."
                className="w-full bg-white/5 border border-white/10 rounded-[20px] py-5 pl-6 pr-16 focus:outline-none focus:border-indigo-500 text-white transition-all text-sm group-hover:border-white/20"
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white text-black rounded-[14px] flex items-center justify-center hover:bg-slate-200 transition-all active:scale-90 disabled:opacity-20 shadow-xl"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="group relative w-20 h-20 bg-indigo-600 rounded-[28px] flex items-center justify-center text-white shadow-[0_15px_40px_-10px_rgba(99,102,241,0.5)] hover:scale-105 transition-all active:scale-95 overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <MessageCircle size={32} className="relative z-10" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-4 border-[#020617] animate-pulse"></div>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;