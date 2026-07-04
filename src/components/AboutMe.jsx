import React from 'react';
import { portfolioData } from '../portfolioData';

const AboutMe = () => {
    const { aboutMe } = portfolioData;

    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">about-me</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
                <div className="max-w-3xl">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #about-me!</h1>
                        <p className="text-[15px] text-text-variant">This is the start of the #about-me channel. Get to know {aboutMe.name}.</p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex -mx-4 px-4 hover:bg-[#2e3035]/40 py-2 transition-colors">
                            <div className="mr-4 mt-1 flex-shrink-0">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-discord-accent">
                                    AK
                                </div>
                            </div>
                            <div className="w-full">
                                <div className="flex items-end mb-1 leading-5">
                                    <span className="text-[15px] font-medium text-text-main hover:underline cursor-pointer mr-2 flex items-center">
                                        {aboutMe.name}
                                        <span className="ml-2 px-1 bg-discord-accent text-white text-[10px] rounded leading-3 tracking-wide font-bold py-[2px]">{aboutMe.tag}</span>
                                    </span>
                                    <span className="text-[12px] text-text-muted leading-4 font-medium">Today at 10:00 AM</span>
                                </div>

                                <div className="text-[15px] text-text-variant leading-relaxed mt-2">
                                    <p className="mb-4">{aboutMe.bio}</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                                        {(aboutMe.infoBoxes || aboutMe.aboutMe?.infoBoxes || []).map((box, index) => (
                                            <div key={index} className={`bg-[#292932] p-4 rounded border-l-4 ${box.borderColor}`}>
                                                <h4 className="text-xs font-bold text-discord-muted uppercase tracking-wide mb-1">{box.label}</h4>
                                                <p className="font-semibold text-text-main">{box.value}</p>
                                            </div>
                                        ))}
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
export default AboutMe;
