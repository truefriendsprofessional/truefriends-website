// Cards.jsx – Updated Card component
import styles from './style.module.scss';

const Card = ({ i, title, description, src, url, color }) => {
  return (
    <div 
      className={`${styles.card} stack-card mt-[20vh] mb-[20vh]`} 
      style={{ backgroundColor: color, top: `calc(-5vh + ${25 * i}px)` }}
    >
      <h2>{title}</h2>
      <div className={styles.body}>
        {/* Text description */}
        <div className={styles.description}>
          <p>{description}</p>
          <span>
            <a href={url} target="_blank" rel="noopener noreferrer">
              See more
            </a>
            <svg width="22" height="12" viewBox="0 0 22 12" fill="none">
              <path d="M21.53 6.53c.29-.29.29-.76 0-1.06L16.76.7c-.29-.29-.77-.29-1.06 0-.29.29-.29.77 0 1.06L19.94 6l-4.24 4.24c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0L21.53 6.53zM0 6.75h21v-1.5H0v1.5z" fill="black"/>
            </svg>
          </span>
        </div>
        {/* Image container */}
        <div className={styles.imageContainer}>
          <div className={styles.inner}>
            {/* <img src={`/assets/${src}`} alt="" /> */}
            <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    >
                      <source src={`/assets/videos/${src}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
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