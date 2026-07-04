import React from 'react';
import { portfolioData } from '../portfolioData';

const Research = () => {
    const { research } = portfolioData;

    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">research</h2>
                <span className="ml-4 pl-4 border-l border-[#34343d] text-[13px] font-medium text-text-muted">Academic papers and independent studies.</span>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
                <div className="max-w-3xl">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #research!</h1>
                        <p className="text-[15px] text-text-variant">This is the start of the #research channel. Here you'll find details on my academic and independent research projects.</p>
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
                                    <span className="text-[15px] font-medium text-text-main hover:underline cursor-pointer mr-2">Akshar Grover</span>
                                    <span className="text-[12px] text-text-muted leading-4 font-medium">Just now</span>
                                </div>

                                <div className="bg-[#292932] border-l-4 border-l-discord-accent rounded-r mt-3 p-4">
                                    <h3 className="text-discord-accent hover:underline font-bold text-[16px] mb-1 cursor-pointer">
                                        {research.title}
                                    </h3>
                                    <p className="text-[14px] text-text-muted italic block mt-2">
                                        {research.publication}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Research;
