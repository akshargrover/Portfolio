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

function App() {
    const [activeChannel, setActiveChannel] = useState('welcome');

    const renderContent = () => {
        switch (activeChannel) {
            case 'welcome': return <Welcome setActiveChannel={setActiveChannel} />;
            case 'about-me': return <AboutMe />;
            case 'experience': return <Experience />;
            case 'projects': return <Projects />;
            case 'extracurriculars': return <Extracurriculars />;
            case 'research': return <Research />;
            case 'chat-with-akshar': return <ChatArea />;
            default: return <Welcome setActiveChannel={setActiveChannel} />;
        }
    };

    return (
        <div className="flex h-screen w-full bg-discord-serverRail text-text-main overflow-hidden">
            <ServerNavigation />
            <ChannelSidebar activeChannel={activeChannel} setActiveChannel={setActiveChannel} />
            {renderContent()}
            <MemberSidebar />
        </div>
    );
}

export default App;
