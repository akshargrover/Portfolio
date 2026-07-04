import React from 'react';

const ChannelSidebar = ({ activeChannel, setActiveChannel }) => {
    const navItemClass = (channel) => `flex items-center px-2 py-1 mx-1 rounded-[4px] cursor-pointer transition-colors font-medium ${activeChannel === channel ? 'bg-[#34343d] text-text-main' : 'text-text-muted hover:bg-[#34343d] hover:text-text-main'}`;

    return (
        <div className="w-sidebar h-full bg-discord-channelSidebar flex flex-col pt-3 flex-shrink-0">
            <div className="px-4 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.2)] hover:bg-[#34343d] cursor-pointer transition-colors px-4 pb-4">
                <h1 className="text-[15px] font-bold text-text-main font-sans tracking-tight leading-5">Akshar's Portfolio</h1>
            </div>

            <div className="flex-1 overflow-y-auto mt-4 px-2 space-y-4">

                {/* Category: Information */}
                <div>
                    <div className="flex items-center px-1 mb-[2px] group cursor-pointer hover:text-text-main">
                        <svg className="w-3 h-3 text-text-muted group-hover:text-text-main mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        <h2 className="text-[12px] font-bold text-text-muted group-hover:text-text-main uppercase tracking-wider">Information</h2>
                    </div>
                    <div className="space-y-[2px]">
                        <div onClick={() => setActiveChannel('welcome')} className={navItemClass('welcome')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">welcome</span>
                        </div>
                        <div onClick={() => setActiveChannel('about-me')} className={navItemClass('about-me')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">about-me</span>
                        </div>
                        <div onClick={() => setActiveChannel('chat-with-akshar')} className={navItemClass('chat-with-akshar')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">💬 chat-with-akshar</span>
                        </div>
                    </div>
                </div>

                {/* Category: Professional */}
                <div>
                    <div className="flex items-center px-1 mb-[2px] group cursor-pointer hover:text-text-main">
                        <svg className="w-3 h-3 text-text-muted group-hover:text-text-main mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        <h2 className="text-[12px] font-bold text-text-muted group-hover:text-text-main uppercase tracking-wider">Professional</h2>
                    </div>
                    <div className="space-y-[2px]">
                        <div onClick={() => setActiveChannel('experience')} className={navItemClass('experience')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">experience</span>
                        </div>
                        <div onClick={() => setActiveChannel('projects')} className={navItemClass('projects')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">projects</span>
                        </div>
                    </div>
                </div>

                {/* Category: Experience & Extras */}
                <div>
                    <div className="flex items-center px-1 mb-[2px] group cursor-pointer hover:text-text-main">
                        <svg className="w-3 h-3 text-text-muted group-hover:text-text-main mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                        <h2 className="text-[12px] font-bold text-text-muted group-hover:text-text-main uppercase tracking-wider">Research & Extra</h2>
                    </div>
                    <div className="space-y-[2px]">
                        <div onClick={() => setActiveChannel('extracurriculars')} className={navItemClass('extracurriculars')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">extracurriculars</span>
                        </div>
                        <div onClick={() => setActiveChannel('research')} className={navItemClass('research')}>
                            <span className="text-xl mr-2 text-text-muted">#</span><span className="text-[15px] leading-5">research</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[52px] bg-[#1a1b23] border-t border-[#292932] px-2 flex items-center justify-between">
                <div className="flex items-center hover:bg-[#34343d] p-1 rounded-md cursor-pointer transition-colors w-full">
                    <div className="w-8 h-8 rounded-full bg-discord-accent flex items-center justify-center font-bold relative text-white">
                        U
                        <div className="absolute -bottom-1 -right-1 w-[14px] h-[14px] bg-green-500 rounded-full border-[3px] border-[#1a1b23]"></div>
                    </div>
                    <div className="ml-2 flex flex-col">
                        <span className="text-[14px] font-bold leading-4">Guest User</span>
                        <span className="text-[12px] text-text-muted leading-3">#6789</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ChannelSidebar;
