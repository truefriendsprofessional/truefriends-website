// Cards.jsx – Luxurious Card component with enhanced styling
import styles from './style.module.scss';
import { useState, useRef, useEffect } from 'react';

const Card = ({ i, title, description, src, url, color, features }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && videoRef.current) {
          // Only play if video is loaded and in view
          if (isVideoLoaded) {
            videoRef.current.play().catch(() => {
              // Handle autoplay restriction silently
            });
          }
        } else if (videoRef.current) {
          videoRef.current.pause();
        }
      },
      { 
        threshold: 0.2, // Increased threshold for better performance
        rootMargin: '50px' // Add margin for smoother transitions
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoLoaded]); // Add isVideoLoaded as dependency

  return (
    <div 
      ref={cardRef}
      className={`${styles.card} ${!isMobile ? 'stack-card' : ''} mt-30 mb-[30vh] backdrop-blur-sm relative overflow-hidden transform-gpu border-4 border-green-500`} 
      style={{ 
        background: color,
        top: !isMobile ? `calc(-5vh + ${25 * i}px)` : 'auto',
        boxShadow: '0 30px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(238, 201, 112, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(238, 201, 112, 0.3)',
        willChange: 'transform, opacity'
      }}
    >
      {/* Luxury accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#EEC970] via-[#3FA6DA] to-[#EEC970]"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{
             backgroundImage: `radial-gradient(circle at 20% 20%, rgba(238, 201, 112, 0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(63, 166, 218, 0.1) 0%, transparent 50%)`
           }}>
      </div>
      
      <div className="relative z-10">
        <h2 className="text-[#EEC970] font-bold text-2xl md:text-3xl lg:text-4xl mb-4 tracking-wide text-center drop-shadow-lg">
          {title}
        </h2>
        
        <div className={`${styles.body} flex-col lg:flex-row gap-6 lg:gap-8`}>
          {/* Text description */}
          <div className={`${styles.description} w-full lg:w-2/5 order-2 lg:order-1`}>
            <p className="text-[#FAFAFA] text-base md:text-lg leading-relaxed mb-6 font-light opacity-90">
              {description}
            </p>
            
            {/* Features list */}
            {features && (
              <div className="mb-6">
                <h4 className="text-[#EEC970] font-medium text-sm uppercase tracking-wider mb-3">Key Benefits</h4>
                <ul className="space-y-2">
                  {features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-[#FAFAFA] text-sm opacity-80">
                      <div className="w-2 h-2 bg-[#EEC970] rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <span className="flex items-center gap-2 group">
              <a 
                href={url} 
                className="text-[#EEC970] hover:text-[#3FA6DA] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                Learn More
              </a>
              <svg 
                width="18" 
                height="10" 
                viewBox="0 0 22 12" 
                fill="none" 
                className="transition-transform group-hover:translate-x-1"
              >
                <path 
                  d="M21.53 6.53c.29-.29.29-.76 0-1.06L16.76.7c-.29-.29-.77-.29-1.06 0-.29.29-.29.77 0 1.06L19.94 6l-4.24 4.24c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0L21.53 6.53zM0 6.75h21v-1.5H0v1.5z" 
                  fill="#EEC970"
                />
              </svg>
            </span>
          </div>
          
          {/* Video container */}
          <div className={`${styles.imageContainer} w-full lg:w-3/5 order-1 lg:order-2 relative`}>
            <div className={`${styles.inner} rounded-xl overflow-hidden border border-[#EEC970]/20 shadow-xl`}>
              {/* Loading placeholder */}
              {!isVideoLoaded && (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center rounded-xl">
                  <div className="text-[#EEC970] text-sm">Loading...</div>
                </div>
              )}
              
              <video
                ref={videoRef}
                loop
                muted
                playsInline
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
                className={`w-full h-full object-cover rounded-xl transition-opacity duration-300 ${
                  isVideoLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  filter: 'brightness(0.95) contrast(1.05) saturate(1.1)',
                   // Hardware acceleration
                            backfaceVisibility: 'hidden'
                          }}
                          >
                          <source src={`./assets/videos/${src}`} type="video/mp4" />
                          Your browser does not support the video tag.
                          </video>
                          
                          {/* Video overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
              
              {/* Performance hint overlay when not in view */}
              {!isInView && (
                <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// import styles from './style.module.scss';
// import { useTransform, motion, useScroll } from 'framer-motion';
// import { useRef } from 'react';

// const Card = ({ i, title, description, src, url, color, progress, range, targetScale }) => {

//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ['start end', 'start start']
//   })

//   const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div ref={container} className={styles.cardContainer}>
//       <motion.div
//         style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }}
//         className={styles.card}
//       >
//         <h2>{title}</h2>
//         <div className={styles.body}>
//           <div className={styles.description}>
//             <p>{description}</p>
//             <span>
//               <a href={url} target="_blank">See more</a>
//               <svg width="22" height="12" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z" fill="black" />
//               </svg>
//             </span>
//           </div>

//           <div className={styles.imageContainer}>
//             <motion.div
//               className={styles.inner}
//               style={{ scale: imageScale }}
//             >
//               <img
                
//                 autoPlay
//                 loop
//                 muted
//                 playsInline
//                 src={`/assets/${src}`}
//                 alt="image"
//               />
//             </motion.div>
//           </div>

//         </div>
//       </motion.div>
//     </div>
//   )
// }

// export default Card