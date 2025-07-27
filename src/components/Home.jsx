
import { Canvas } from '@react-three/fiber';
import { useRef, Suspense, useState, useEffect } from 'react';
import AnimatedBottle from './AnimatedBottle';
import { Environment, OrbitControls } from "@react-three/drei";

const Home = () => {
  const mainContentRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation on component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id='home'
      ref={mainContentRef}
      className="relative w-full h-screen overflow-hidden bg-yellow-50 font-[roboto] pt-0"
      style={{
        background: 'linear-gradient(135deg, #f5f5f5 0%, #DADED0 100%)'
      }}
    >
      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col w-full h-full">

        {/* Main Title Section - Centered */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Large Background Title */}
          <div className="absolute inset-0 flex pt-35 justify-center">
            <div
              className={`font-[Orbitron] text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] 2xl:text-[8rem] font-black text-gray-800 tracking-wider uppercase leading-none transform transition-all duration-1000 delay-300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
            style={{
              textShadow: '-10px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
            >
              TRUE FRIENDS
              <br />
              <div
                className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] 2xl:text-[6rem] justify-center text-center'

              >
                PROFESSIONALS
              </div>
            </div>
          </div>

          {/* 3D Bottle - Centered and hovering */}
          <div className="absolute inset-0 flex items-center justify-center z-10 mt-20">
            <div className={`w-full h-full transform transition-all duration-1000 delay-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                shadows="soft"
                gl={{ alpha: true, antialias: true }}
                style={{ pointerEvents: 'auto' }}
              >
                <ambientLight intensity={0.5} />
                <directionalLight
                  position={[11, 1, 19]}
                  intensity={1.0}
                  castShadow
                  shadow-mapSize-width={4096}
                  shadow-mapSize-height={4096}
                  shadow-camera-left={-10}
                  shadow-camera-right={10}
                  shadow-camera-top={10}
                  shadow-camera-bottom={-10}
                  shadow-camera-near={0.1}
                  shadow-camera-far={30}
                  shadow-bias={-0.0001}
                />
                <pointLight position={[-8, -8, -8]} intensity={0.3} />
                <spotLight
                  position={[0, 15, 5]}
                  angle={0.4}
                  penumbra={1}
                  intensity={1.0}
                  shadow-mapSize-width={2048}
                  shadow-mapSize-height={2048}
                />
                <Environment preset="studio" environmentIntensity={0.3} />
                <Suspense fallback={null}>
                  {/* <OrbitControls /> */}
                  <AnimatedBottle scale={0.25} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        </div>

        {/* Right Side Text - Glassmorphic Card */}
        <div className="absolute right-4 bottom-4 md:right-10 md:bottom-32 max-w-xs z-20 w-auto px-4 md:px-0">
          <div className={`transform transition-all duration-1000 delay-900 z-10 relative ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div
              className="rounded-2xl p-6 shadow-2xl backdrop-blur-xl  bg-black/10 border border-white/40"

            >
              <div className="space-y-4 relative">
                {/* Minimal black icon at top left */}
                <div className="absolute -top-4 -left-4 bg-[#d2d2d2] rounded-full p-2  shadow-2xl flex items-center justify-center w-8 h-8 border border-white/10">
                  {/* Sparkle icon (Heroicons outline, black) */}
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25M12 18.75V21M4.219 4.219l1.591 1.591M18.19 18.19l1.591 1.591M3 12h2.25M18.75 12H21M4.219 19.781l1.591-1.591M18.19 5.81l1.591-1.591M8.25 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0z" />
                  </svg>
                </div>
                <div className="text-right">
                  <div className="text-base font-black text-black mb-1 tracking-wide flex items-center gap-2 justify-end">
                    {/* We Set the Standard */}
                    Our results speakes
                  </div>
                  <p className="text-sm text-gray-700 font-medium mt-1">
                    We deliver professional hair care, so you can expect nothing less than excellence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Side Description */}
        <div className="absolute left-4 bottom-4 md:left-8 md:bottom-20 max-w-sm md:max-w-md hidden sm:block">
          <div className={`space-y-4 transform transition-all duration-1000 delay-1100 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-[-10px] opacity-0'}`}>
            <p className="text-gray-700  text-sm leading-relaxed">
              From intuitive formulas to seamless quality, True Friends products transform your hair care routine into a professional experience.
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-50 h-25 bg-gray-300 drop-shadow-xl flex items-center justify-center rounded-2xl ">

                {/* video element */}
                <video className="w-full h-full object-cover rounded-2xl"
                  controls
                  loop
                  muted
                  autoPlay
                  playsInline
                  style={{ filter: 'brightness(0.95) contrast(1.05) saturate(1.1)' }}

                >
                  <source src="/assets/videos/logoFlash.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 right-1/2 transform -translate-x-1/2 z-50">
          <div className={`flex flex-col items-center space-y-2 transform transition-all duration-1000 delay-1300 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
            </div>
            <div className="flex flex-col items-center">

              <svg className="w-4 h-4 text-gray-400 animate-bounce" style={{ animationDelay: '0.1s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;