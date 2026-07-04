import React from 'react';
import { portfolioData } from '../portfolioData';

const Welcome = ({ setActiveChannel }) => {
    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">welcome</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
                <div className="max-w-3xl">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #Akshar's Portfolio!</h1>
                        <p className="text-[15px] text-text-variant">This is the start of the #welcome channel.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex -mx-4 px-4 hover:bg-[#2e3035]/40 py-2 transition-colors">
                            <div className="mr-4 mt-1 flex-shrink-0">
                                {portfolioData?.aboutMe?.avatarUrl ? (
                                    <img src={portfolioData.aboutMe.avatarUrl} alt="avatar" className="w-10 h-10 rounded-full object-cover" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-discord-accent">
                                        AK
                                    </div>
                                )}
                            </div>
                            <div className="w-full">
                                <div className="flex items-end mb-1 leading-5">
                                    <span className="text-[15px] font-medium text-text-main hover:underline cursor-pointer mr-2 flex items-center">
                                        Akshar Grover
                                        <span className="ml-2 px-1 bg-discord-accent text-white text-[10px] rounded leading-3 tracking-wide font-bold py-[2px]">ADMIN</span>
                                    </span>
                                    <span className="text-[12px] text-text-muted leading-4 font-medium">Just now</span>
                                </div>

                                <div className="text-[15px] text-text-variant leading-relaxed space-y-4 mt-2">
                                    <p>Hello there! Welcome to my digital workspace. 👋</p>
                                    <p>I'm a passionate developer focused on Backend systems, AI integrations, and creating seamless UI/UX experiences. This server is structured to showcase my journey, projects, and professional background.</p>
                                    <p>Feel free to navigate through the channels on the left to learn more about my <span onClick={() => setActiveChannel('experience')} className="text-discord-accent cursor-pointer hover:underline font-medium">#experience</span> or check out some of my <span onClick={() => setActiveChannel('projects')} className="text-discord-accent cursor-pointer hover:underline font-medium">#projects</span>.</p>

                                    <div className="bg-[#292932] p-4 rounded border-l-4 border-l-yellow-400 mt-4 max-w-xl">
                                        <h4 className="text-[12px] uppercase tracking-wider text-text-muted font-bold mb-2">Getting Started Guide</h4>
                                        <p className="text-text-main">Not sure where to begin? Start with the <strong onClick={() => setActiveChannel('about-me')} className="text-discord-accent cursor-pointer hover:underline font-medium">#about-me</strong> channel for a quick overview of my skills and current focus areas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Welcome;
