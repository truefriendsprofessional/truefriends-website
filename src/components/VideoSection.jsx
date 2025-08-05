import React from 'react';

const VideoSection = () => {
    return (
        <section className="w-full py-12 md:py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                {/* Optional Caption */}
                <div className="mb-6 text-center ">
                    <p className="text-white/80 text-xl sm:text-2xl md:text-3xl font-bold font-[Poppins] shadow-md  mx-auto">
                        Experience the luxury of premium hair care products
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center">

                    {/* Video Container */}
                    <div className="w-full max-w-6xl mx-auto">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                            >
                                <source src="assets/videos/blast.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Optional overlay for better text readability if needed */}
                            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default VideoSection;
