import React from 'react';

const ServerNavigation = () => {
    return (
        <nav className="w-serverList h-full bg-discord-serverRail flex flex-col items-center py-3 gap-2 flex-shrink-0">
            {/* Discord Home Icon */}
            <div className="relative group w-12 h-12 flex items-center justify-center">
                {/* Active Indicator Left Pill */}
                <div className="absolute -left-3.5 w-2 h-10 bg-white rounded-r-lg"></div>
                {/* Icon block */}
                <div className="w-12 h-12 bg-discord-accent rounded-[16px] flex items-center justify-center text-white cursor-pointer transition-all duration-300">
                    <svg width="28" height="20" viewBox="0 0 28 20" fill="currentColor">
                        <path d="M23.0182 1.67C21.2182 0.835 19.3091 0.26 17.3091 0C17.0545 0.445 16.7818 1.055 16.5818 1.54C14.4727 1.22 12.3818 1.22 10.3 1.54C10.1 1.055 9.82728 0.445 9.57273 0C7.57273 0.26 5.66364 0.835 3.86364 1.67C0.536364 6.55 -0.336364 11.31 0.109091 16.03C2.5 17.78 4.8 18.84 7.04545 19.53C7.60909 18.77 8.11818 17.96 8.57273 17.1C7.73636 16.79 6.93636 16.41 6.18182 15.98C6.38182 15.83 6.58182 15.67 6.77273 15.52C11.1636 17.51 15.7 17.51 20.0636 15.52C20.2636 15.67 20.4545 15.83 20.6636 15.98C19.9 16.41 19.1 16.79 18.2727 17.1C18.7273 17.96 19.2364 18.78 19.8 19.53C22.0455 18.84 24.3455 17.78 26.7364 16.03C27.2727 10.66 25.8727 5.92 23.0182 1.67ZM9.30909 13.25C8.07273 13.25 7.05455 12.11 7.05455 10.73C7.05455 9.35003 8.05455 8.21003 9.30909 8.21003C10.5636 8.21003 11.5818 9.36003 11.5636 10.73C11.5636 12.11 10.5636 13.25 9.30909 13.25ZM17.5455 13.25C16.3091 13.25 15.2909 12.11 15.2909 10.73C15.2909 9.35003 16.2909 8.21003 17.5455 8.21003C18.8 8.21003 19.8182 9.36003 19.8 10.73C19.8 12.11 18.8 13.25 17.5455 13.25Z" />
                    </svg>
                </div>
            </div>

            <hr className="w-8 border-t-2 border-[#2d2f32] rounded-full my-1" />

            {/* Portfolio Server Icon */}
            <div className="relative group w-12 h-12 flex items-center justify-center mt-1">
                {/* Hover Pill Indicator */}
                <div className="absolute -left-3.5 w-2 h-0 group-hover:h-5 bg-white rounded-r-lg transition-all duration-300"></div>
                {/* Icon block */}
                <div className="w-12 h-12 bg-[#36393f] group-hover:bg-discord-accent group-hover:text-white rounded-[24px] group-hover:rounded-[16px] flex items-center justify-center text-text-variant cursor-pointer transition-all duration-300 font-bold text-lg">
                    AG
                </div>
            </div>

            {/* Blog Server Icon */}
            <div className="relative group w-12 h-12 flex items-center justify-center">
                <div className="absolute -left-3.5 w-2 h-0 group-hover:h-5 bg-white rounded-r-lg transition-all duration-300"></div>
                <div className="w-12 h-12 bg-[#36393f] group-hover:bg-green-600 group-hover:text-white rounded-[24px] group-hover:rounded-[16px] flex items-center justify-center text-text-variant cursor-pointer transition-all duration-300 font-bold text-lg">
                    BG
                </div>
            </div>

            <div className="relative group w-12 h-12 flex items-center justify-center mt-2 group">
                <div className="w-12 h-12 bg-[#36393f] group-hover:bg-green-600 group-hover:text-white rounded-[24px] group-hover:rounded-[16px] flex items-center justify-center text-green-500 cursor-pointer transition-all duration-300">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </div>
            </div>

        </nav>
    );
};

export default ServerNavigation;
