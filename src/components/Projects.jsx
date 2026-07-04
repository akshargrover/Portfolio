import React from 'react';
import { portfolioData } from '../portfolioData';

const Projects = () => {
    const { projects } = portfolioData;

    return (
        <div className="flex-1 h-full bg-discord-mainContent flex flex-col min-w-0">
            <div className="h-12 w-full flex items-center px-4 border-b border-[#292932] shadow-[0_1px_2px_rgba(0,0,0,0.1)] flex-shrink-0 z-10">
                <span className="text-xl text-text-muted font-bold mr-2">#</span>
                <h2 className="text-[15px] font-bold text-text-main font-sans tracking-wide">projects</h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 pt-4 pb-8">
                <div className="max-w-3xl">
                    <div className="mt-8 mb-12">
                        <div className="w-16 h-16 bg-[#34343d] rounded-full flex items-center justify-center mb-4">
                            <span className="text-3xl text-text-muted font-bold">#</span>
                        </div>
                        <h1 className="text-[32px] font-bold text-white mb-2">Welcome to #projects!</h1>
                        <p className="text-[15px] text-text-variant">A showcase of the systems, tools, and applications I've built.</p>
                    </div>

                    <div className="space-y-6">
                        {projects.map((proj, idx) => (
                            <div key={idx} className="flex -mx-4 px-4 hover:bg-[#2e3035]/40 py-2 transition-colors">
                                <div className="mr-4 mt-1 flex-shrink-0">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white bg-discord-accent">
                                        AK
                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="flex items-end mb-1 leading-5">
                                        <span className="text-[15px] font-medium text-text-main hover:underline cursor-pointer mr-2">Akshar</span>
                                        <span className="text-[12px] text-text-muted leading-4 font-medium">{proj.date}</span>
                                    </div>

                                    <div className="mt-2 p-4 bg-[#292932] border-l-4 border-l-discord-accent rounded-r-md max-w-lg mb-2">
                                        <div className="text-discord-accent text-[12px] font-bold mb-1 uppercase tracking-widest">
                                            Project Data
                                        </div>
                                        <h2 className="text-text-main font-bold text-[18px] mb-2">{proj.title}</h2>
                                        <p className="text-[14px] text-text-variant mb-4">{proj.description}</p>

                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {proj.techStack.map((tech, tIdx) => (
                                                <span key={tIdx} className="bg-[#1a1b23] text-text-muted px-2 py-1 rounded text-[12px] font-bold tracking-wide">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Projects;
