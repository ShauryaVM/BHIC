"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatContextType {
  messages: Message[];
  addMessage: (message: Message) => void;
  clearMessages: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const STORAGE_KEY = 'bhic-chat-messages';

function loadMessagesFromStorage(): Message[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    
    const parsed = JSON.parse(stored);
    // Convert timestamp strings back to Date objects
    return parsed.map((msg: any) => ({
      ...msg,
      timestamp: new Date(msg.timestamp)
    }));
  } catch (error) {
    console.error('Failed to load chat messages from storage:', error);
    return [];
  }
}

function saveMessagesToStorage(messages: Message[]) {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat messages to storage:', error);
  }
}

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>(() => {
    const loaded = loadMessagesFromStorage();
    // If no messages, add welcome message
    if (loaded.length === 0) {
      return [{
        role: 'assistant',
        content: 'Hello! I\'m your AI assistant for Bald Head Island Conservancy. I can help you understand your data, answer questions about the organization, and provide insights. What would you like to know?',
        timestamp: new Date()
      }];
    }
    return loaded;
  });

  useEffect(() => {
    saveMessagesToStorage(messages);
  }, [messages]);

  const addMessage = (message: Message) => {
    setMessages(prev => [...prev, message]);
  };

  const clearMessages = () => {
    const welcomeMessage: Message = {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant for Bald Head Island Conservancy. I can help you understand your data, answer questions about the organization, and provide insights. What would you like to know?',
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
  };

  return (
    <ChatContext.Provider value={{ messages, addMessage, clearMessages }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatMessages() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatMessages must be used within ChatProvider');
  }
  return context;
}

