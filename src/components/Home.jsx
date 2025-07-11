import  { useRef } from 'react';
const Home = () => {
  const mainContentRef = useRef(null);
  const videoRef = useRef(null);
  // increase width of mainContent when section left the viewport scroll

  ;

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 overflow-hidden px-4"
    >

      {/* Main Content Layout */}
      <div
        ref={mainContentRef}
        className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl h-[90vh] md:h-[90vh]  shadow-2xl overflow-hidden backdrop-blur-md md:rounded-3xl transition-all duration-100"
        style={{ transition: 'transform 0.1s linear, height 0.1s linear, width 0.1s linear' }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
          style={{ objectFit: 'cover' }}
        >
          <source src="/assets/videos/bigBubble.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Left: Text & Buttons */}
        <div className="flex flex-col justify-center items-start flex-1 px-6 md:px-12 py-10 gap-6">
          <div>
            <h1 className=" text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-widest uppercase text-zinc-100 leading-tight mb-2 drop-shadow-lg">
              <span className="block text-8xl tracking-wide">TRUE</span>
              <span className="block text-zinc-300 text-6xl font-extrabold tracking-normal">FRIENDS</span>
              <h2 className="font-semibold tracking-wider text-zinc-300 mb-6 uppercase  *: *: text-center text-4xl">Professionals</h2>
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
          <div className="w-full h-full max-w-[500px] max-h-[500px] aspect-square overflow-hidden drop-shadow-2xl drop-shadow-zinc-700  flex items-center justify-center relative rounded-3xl bg-black/80 ">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain rounded-2xl "
            >
              <source src="/assets/videos/transparentbg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home