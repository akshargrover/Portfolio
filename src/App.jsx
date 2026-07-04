import React, { useState } from 'react';
import ServerNavigation from './components/ServerNavigation';
import ChannelSidebar from './components/ChannelSidebar';
import ChatArea from './components/ChatArea';
import MemberSidebar from './components/MemberSidebar';
import Welcome from './components/Welcome';
import AboutMe from './components/AboutMe';
import Extracurriculars from './components/Extracurriculars';
import Research from './components/Research';
import Experience from './components/Experience';
import Projects from './components/Projects';
import TechStack from './components/TechStack';

function App() {
    const [activeChannel, setActiveChannel] = useState('welcome');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const renderContent = () => {
        switch (activeChannel) {
            case 'welcome': return <Welcome setActiveChannel={setActiveChannel} />;
            case 'about-me': return <AboutMe />;
            case 'experience': return <Experience />;
            case 'projects': return <Projects />;
            case 'tech-stack': return <TechStack />;
            case 'extracurriculars': return <Extracurriculars />;
            case 'research': return <Research />;
            case 'chat-with-akshar': return <ChatArea />;
            default: return <Welcome setActiveChannel={setActiveChannel} />;
        }
    };

    return (
        <div className="flex h-[100dvh] w-full bg-discord-serverRail text-text-main overflow-hidden relative">
            {/* Mobile Overlay Backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}

            {/* Sidebars (Wrapped for mobile slide-in) */}
            <div
                className={`fixed inset-y-0 left-0 z-[100] flex h-full transform transition-transform duration-200 ease-in-out md:relative md:transform-none ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <ServerNavigation />
                <ChannelSidebar
                    activeChannel={activeChannel}
                    setActiveChannel={(channel) => { setActiveChannel(channel); setIsMobileMenuOpen(false); }}
                />
            </div>

            {/* Main Content Viewport */}
            <div className="flex-1 w-full min-w-0 h-full relative flex flex-col">
                {/* Mobile Hamburger Icon */}
                <div
                    className="md:hidden absolute top-0 left-0 w-14 h-12 flex items-center justify-center z-[90] cursor-pointer"
                    onClick={() => setIsMobileMenuOpen(true)}
                >
                    <svg className="w-6 h-6 text-text-muted hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>

                {/* 
           Dynamic padding for the absolute icon using child combinator injected to the mounted view's header div! 
        */}
                <div className="w-full h-full [&>div>div:first-child]:pl-14 md:[&>div>div:first-child]:pl-4 flex-1 min-w-0 overflow-hidden">
                    {renderContent()}
                </div>
            </div>

            {React.createElement(MemberSidebar)}
        </div>
    );
}

export default App;
