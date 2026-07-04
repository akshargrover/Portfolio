import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../portfolioData';

const ChatArea = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: "Akshar Grover",
            isBot: true,
            text: "Hi there! Welcome to my portfolio. Feel free to ask me anything about my experience, or type 'hello' to try the mock bot out!",
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const scrollContainerRef = useRef(null);

    const scrollToBottom = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
                top: scrollContainerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping]);

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = {
            id: Date.now(),
            sender: "Guest User",
            isBot: false,
            text: inputValue,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsTyping(true);

        // Simulate 1000ms network request & randomized response
        setTimeout(() => {
            const { mockBotResponses } = portfolioData;
            const randomReponse = mockBotResponses[Math.floor(Math.random() * mockBotResponses.length)];

            const botMessage = {
                id: Date.now() + 1,
                sender: "Akshar Grover",
                isBot: true,
                text: randomReponse,
                timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(prev => [...prev, botMessage]);
            setIsTyping(false);
        }, 1000);
    };

    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">💬 chat-with-akshar</h2>
            </div>

            <div ref={scrollContainerRef} className="flex-1 overflow-y-auto px-4 pt-4 pb-2">
                <div className="space-y-6">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #💬 chat-with-akshar!</h1>
                        <p className="text-[15px] text-text-variant">This is the start of the #💬 chat-with-akshar channel.</p>
                    </div>

                    {messages.map((message) => (
                        <div key={message.id} className="flex hover:bg-[#2e3035]/40 -mx-4 px-4 py-1 mt-1 transition-colors group">
                            <div className="mr-4 mt-1 flex-shrink-0 cursor-pointer">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${message.isBot ? 'bg-discord-accent' : 'bg-green-600'}`}>
                                    {message.isBot ? 'AB' : 'U'}
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex items-end mb-1 leading-5">
                                    <span className="text-[15px] font-medium text-text-main hover:underline cursor-pointer mr-2 flex items-center">
                                        {message.sender}
                                        {message.isBot && <span className="ml-2 px-1 bg-discord-accent text-white text-[10px] rounded leading-3 tracking-wide font-bold py-[2px]">BOT</span>}
                                    </span>
                                    <span className="text-[12px] text-text-muted leading-4 font-medium">{message.timestamp}</span>
                                </div>
                                <div className="text-[15px] text-text-variant leading-relaxed">
                                    {message.text}
                                </div>
                            </div>
                        </div>
                    ))}

                    {isTyping && (
                        <div className="flex items-center text-text-muted text-[13px] font-medium px-2 py-1 mt-2">
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce mr-1"></span>
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce mx-1" style={{ animationDelay: '150ms' }}></span>
                            <span className="w-2 h-2 bg-text-muted rounded-full animate-bounce mx-1" style={{ animationDelay: '300ms' }}></span>
                            <span className="ml-2">Akshar Grover is typing...</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="px-4 pb-6 pt-2 shrink-0">
                <div className="bg-[#383842] rounded-md px-4 py-[10px] flex items-center shadow-sm">
                    <button className="flex items-center justify-center h-6 w-6 rounded-full bg-[#4f545c] hover:bg-[#b9bbbe] transition-colors mr-4 group flex-shrink-0">
                        <div className="w-[14px] h-[2px] bg-[#dcddde] group-hover:bg-[#36393f] absolute rounded-sm"></div>
                        <div className="w-[2px] h-[14px] bg-[#dcddde] group-hover:bg-[#36393f] rounded-sm"></div>
                    </button>

                    <form className="flex-1 flex" onSubmit={handleSendMessage}>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Message #💬 chat-with-akshar"
                            className="bg-transparent border-none outline-none text-[15px] text-text-main w-full font-sans placeholder-[#8f8fa0]"
                            autoComplete="off"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};
export default ChatArea;
