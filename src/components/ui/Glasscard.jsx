import React from 'react';

const GlassCard = () => {
    return (
        <>

            <div className="relative flex items-center justify-center  bg-gray-100 overflow-hidden">
                {/* Blurry Background Text */}
                <div className="absolute text-[120px] font-extrabold text-gray-400 opacity-20 select-none z-0">
                    CLIMATE
                </div>

                {/* Glowing Animated Glass Card */}
                <div className="relative z-10 w-80 p-6 rounded-xl border border-white/30 shadow-xl backdrop-blur-xl
        text-gray-900 bg-gradient-to-r from-pink-100/20 via-indigo-100/20 to-blue-100/20
        animate-glow">

                    <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-lg">Climate Harmony</h3>
                        <div className="w-5 h-5 flex items-center justify-center">☁️</div>
                    </div>
                    <p className="text-sm text-gray-700">
                        Consistent comfort with temperature monitoring and regulation tool
                    </p>

                    <div className="absolute bottom-3 right-3 w-4 h-4 flex items-center justify-center">✨</div>
                </div>
            </div>
        </>

    );
};

export default GlassCard;
