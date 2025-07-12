
import { useRef, useState, useEffect } from 'react';

const videoSources = [
  '/assets/videos/transparentbg.mp4',
  '/assets/videos/transparentbg2.mp4',
  '/assets/videos/transparentbg3.mp4',
];

const Home = () => {
  const mainContentRef = useRef(null);
  const frontVideoRef = useRef(null);
  const backVideoRef = useRef(null);
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Start transition 1s before video ends
  useEffect(() => {
    // Get current active video ref based on flip state
    const getActiveVideoRef = () => {
      return isFlipped ? backVideoRef : frontVideoRef;
    };

    const video = getActiveVideoRef().current;
    if (video) {
      const handleCanPlay = () => {
        // Remove any previous listeners
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.addEventListener('timeupdate', handleTimeUpdate);
      };

      const handleTimeUpdate = () => {
        if (!isTransitioning && video.duration && video.currentTime >= video.duration - 1) {
          setIsTransitioning(true);

          // Start flip and switch video after flip completes
          setTimeout(() => {
            setCurrentVideo((prev) => (prev + 1) % videoSources.length);
            setIsFlipped(prev => !prev); // Toggle flip state
            setIsTransitioning(false);
          }, 800); // Flip duration
        }
      };

      video.addEventListener('canplay', handleCanPlay);
      // If already loaded
      if (video.readyState >= 3) {
        handleCanPlay();
      }

      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('timeupdate', handleTimeUpdate);
      };
    }
  }, [currentVideo, isTransitioning, isFlipped]);

  // Reset videos to start on change
  useEffect(() => {
    if (frontVideoRef.current) {
      frontVideoRef.current.currentTime = 0;
      frontVideoRef.current.play();
    }
    if (backVideoRef.current) {
      backVideoRef.current.currentTime = 0;
      backVideoRef.current.play();
    }
  }, [currentVideo]);

  return (
    // <section
    //   id="home"
    //   className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 overflow-hidden px-4"
    // >
    <div
      ref={mainContentRef}
      className="relative z-10 flex flex-col md:flex-row w-full h-[100vh] md:h-[100vh]   overflow-hidden backdrop-blur-md md:rounded-3xl transition-all duration-100"
      style={{ transition: 'transform 0.1s linear, height 0.1s linear, width 0.1s linear' }}
    >
      {/* Main Content Layout */}
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
        style={{ objectFit: 'cover' }}
      >
        <source src="/assets/videos/bigBubble.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* Left: Text & Buttons */}
      <div className="flex flex-col justify-center items-start flex-1 px-6 md:px-12 py-10 gap-6">
        <div>
          <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase text-zinc-100 leading-tight mb-2 drop-shadow-lg">
            <span className="block text-8xl tracking-wide">TRUE</span>
            <span className="block text-zinc-300 text-6xl font-extrabold tracking-normal">FRIENDS</span>
            <p className="font-semibold tracking-wider text-zinc-300 mb-6 uppercase  *: *: text-center text-4xl">Professionals</p>
            <div className="flex flex-row gap-4 mb-6">
              <button className="px-6 py-2 rounded-lg border-2 border-zinc-100 bg-zinc-900 text-white font-bold text-base hover:bg-zinc-800 transition-all shadow-md">Buy Now</button>
              <button className="px-6 py-2 rounded-lg border-2 border-zinc-400 bg-white text-zinc-900 font-bold text-base hover:bg-zinc-100 transition-all shadow-md">More</button>
            </div>
          </h1>
        </div>
        <p className="max-w-md text-base sm:text-lg md:text-xl text-zinc-200 opacity-90 font-medium drop-shadow">
          Salon-grade hair care that elevates your service and your clients' confidence.
        </p>
      </div>
      {/* Right: Video Box (hidden on small screens) */}
      <div className="hidden md:flex flex-1 items-center justify-center p-6">
        <div className="w-full h-full max-w-[500px] max-h-[500px] aspect-square overflow-hidden drop-shadow-2xl drop-shadow-zinc-700 flex items-center justify-center relative rounded-3xl bg-black/80">
          {/* Card flip container */}
          <div
            className={`relative w-full h-full transition-transform duration-800 ease-in-out preserve-3d ${isFlipped ? 'rotate-y-180' : ''
              }`}
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Front side - Shows current video when not flipped, next video when flipped */}
            <div className="absolute w-full h-full backface-hidden">
              <video
                ref={frontVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-contain rounded-2xl"
                key={`front-${currentVideo}-${isFlipped}`}
              >
                <source src={videoSources[isFlipped ? (currentVideo + 1) % videoSources.length : currentVideo]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Back side - Shows next video when not flipped, current video when flipped */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <video
                ref={backVideoRef}
                autoPlay
                muted
                playsInline
                className="w-full h-full object-contain rounded-2xl"
                key={`back-${currentVideo}-${isFlipped}`}
              >
                <source src={videoSources[isFlipped ? currentVideo : (currentVideo + 1) % videoSources.length]} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
      {/* Custom CSS for 3D flip effect */}
      <style>{`
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
      {/* </section> */}
    </div>

  );
}

export default Home;