import { motion } from "motion/react";
import { cn } from "../../utils/cn";
import { useMemo, memo, useState, useEffect } from "react";
import "./marquee-optimizations.css";

export const ThreeDMarquee = ({
  images,
  className
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Memoize the chunks calculation to prevent recalculation on every render
  const chunks = useMemo(() => {
    // Responsive grid: 2 columns on mobile, 4 on desktop
    const numColumns = isMobile ? 2 : 4;
    const chunkSize = Math.ceil(images.length / numColumns);
    
    return Array.from({ length: numColumns }, (_, colIndex) => {
      const start = colIndex * chunkSize;
      return images.slice(start, start + chunkSize);
    });
  }, [images, isMobile]);
  
  return (
    <div
      className={cn(
        "mx-auto block h-[500px] md:h-[600px] overflow-hidden rounded-2xl marquee-container",
        className
      )}>
      <div className="flex size-full items-center justify-center">
        <div className="w-full max-w-6xl mx-auto scale-75 sm:scale-150 md:scale-120 lg:scale-150">
          <div
            style={{
              transform: isMobile ? "rotateX(20deg) rotateZ(-20deg)" : "rotateX(30deg) rotateZ(-30deg)",
              willChange: "transform",
            }}
            className={cn(
              "relative grid origin-top-left gap-4 md:gap-8 grid-cols-2  md:-left-[100px] top-48 md:top-96 marquee-grid",
              isMobile ? "grid-cols-2" : "grid-cols-4"
            )}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? (isMobile ? 30 : 50) : (isMobile ? -30 : -50) }}
                transition={{
                  duration: colIndex % 2 === 0 ? (isMobile ? 6 : 8) : (isMobile ? 9 : 12),
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "linear",
                }}
                style={{
                  willChange: "transform",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-center gap-4 md:gap-8 marquee-item">
                <GridLineVertical className="-left-2 md:-left-4 grid-line" offset={isMobile ? "40px" : "80px"} />
                {subarray.map((item, index) => (
                  <div className="relative marquee-item" key={`${colIndex}-${index}`}>
                    <GridLineHorizontal className="-top-2 md:-top-4 grid-line" offset={isMobile ? "10px" : "20px"} />
                    <motion.div
                      whileHover={{ y: isMobile ? -3 : -5 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="rounded-lg ring ring-gray-950/5 hover:shadow-2xl transform-gpu hardware-accelerated"
                      style={{
                        willChange: "transform",
                      }}
                    >
                      {item}
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const GridLineHorizontal = memo(({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
});
GridLineHorizontal.displayName = 'GridLineHorizontal';

const GridLineVertical = memo(({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "150px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
});
GridLineVertical.displayName = 'GridLineVertical';
