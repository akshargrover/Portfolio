import React from 'react';
import { portfolioData } from '../portfolioData';

const Extracurriculars = () => {
    const { extracurriculars } = portfolioData;

    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">extracurriculars</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
                <div className="max-w-3xl">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #extracurriculars!</h1>
                        <p className="text-[15px] text-text-variant">This is the start of the #extracurriculars channel. Here's a bit about what I do when I'm not coding.</p>
                    </div>

                    <div className="space-y-6">
                        {extracurriculars.map((activity, idx) => (
                            <div key={idx} className="flex -mx-4 px-4 hover:bg-[#2e3035]/40 py-2 transition-colors">
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
                                        <span className="text-[12px] text-text-muted leading-4 font-medium">{activity.date}</span>
                                    </div>

                                    <h3 className="text-white font-bold text-[18px] mt-2 mb-1">{activity.event}</h3>
                                    <p className="text-[15px] text-text-variant leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Extracurriculars;
