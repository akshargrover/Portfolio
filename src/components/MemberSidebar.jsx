import React from 'react';
import { portfolioData } from '../portfolioData';

const MemberSidebar = () => {
    const { techStackRoles } = portfolioData;

    return (
        <div className="w-memberList h-full bg-discord-memberList hidden lg:flex flex-col flex-shrink-0">
            <div className="flex-1 overflow-y-auto px-2 pt-4 pb-4 space-y-6">

                {techStackRoles.map((role, idx) => (
                    <div key={idx} className="mb-4">
                        <h3 className="text-text-muted text-[12px] font-bold uppercase tracking-wider px-2 mb-[2px]">
                            {role.roleName} — {role.members.length}
                        </h3>

                        <div className="space-y-[2px]">
                            {role.members.map((member, mIdx) => {
                                const initial = member.name.charAt(0).toUpperCase() + member.name.charAt(1).toUpperCase();

                                const content = (
                                    <div className="flex items-center hover:bg-[#34343d] px-2 py-1 rounded-[4px] cursor-pointer transition-colors group">
                                        <div className="w-8 h-8 rounded-full bg-discord-accent flex items-center justify-center text-white font-bold text-[12px] relative flex-shrink-0">
                                            {initial}
                                            <div className={`absolute -bottom-1 -right-1 w-[14px] h-[14px] ${role.statusColor || 'bg-green-500'} rounded-full border-[3px] border-[#2e3035] group-hover:border-[#34343d] transition-colors`}></div>
                                        </div>
                                        <div className="ml-3 flex flex-col overflow-hidden">
                                            <span className="text-[15px] font-medium text-text-muted group-hover:text-text-main truncate leading-5">
                                                {member.name}
                                            </span>
                                        </div>
                                    </div>
                                );

                                if (member.link) {
                                    return (
                                        <a key={mIdx} href={member.link} target="_blank" rel="noopener noreferrer" className="block text-decoration-none">
                                            {content}
                                        </a>
                                    );
                                }

                                return <div key={mIdx}>{content}</div>;
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default MemberSidebar;
