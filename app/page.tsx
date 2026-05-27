'use client';

import { useChat } from 'ai/react';
import { useRef, useEffect } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-xs font-bold">
            E1
          </div>
          <div>
            <h1 className="text-lg font-semibold">Eva.One</h1>
            <p className="text-xs text-white/40">Uncensored • Direct • No Filter</p>
          </div>
        </div>
        <div className="text-xs text-white/30">
          {isLoading ? (
            <span className="text-violet-400">thinking...</span>
          ) : (
            'ready'
          )}
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-2xl font-bold">
              E1
            </div>
            <h2 className="text-2xl font-semibold">Eva.One Uncensored</h2>
            <p className="text-white/50 max-w-md">
              AI Executive Intelligence. No gateway. No content policy. No refusals.
              Direct API calls. You control the behavior.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/50">GPT-4o</span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/50">Claude</span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-white/50">Streaming</span>
            </div>
          </div>
        )}

        {messages.map((m) => (
          <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                m.role === 'user'
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/5 border border-white/10 text-white/90'
              }`}
            >
              <div className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="px-6 py-4 border-t border-white/10">
        <div className="flex gap-3">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder="Tell EvaOne what you need..."
            className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500 transition-colors"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="px-6 py-3 bg-violet-600 hover:bg-violet-500 disabled:bg-white/10 disabled:text-white/30 rounded-xl text-sm font-medium transition-colors"
          >
            {isLoading ? '•••' : 'Send'}
          </button>
        </div>
      </form>
    </div>
  );
}
