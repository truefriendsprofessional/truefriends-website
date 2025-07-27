import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Float } from "@react-three/drei";
import { Suspense, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShadowMaterial, Vector2 } from "three";
import Model from "./models/Bottle_final_with_names"
import { motion } from "framer-motion";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animated Bottle Component
function AnimatedBottle() {
  const bottleRef = useRef();
  const bottleModelRef = useRef();
  const mouse = useRef(new Vector2());
  const isHovered = useRef(false);
  const scrollPositionRef = useRef({ x: -1.8, y: 3 });
  const baseZPosition = useRef(0.5); // Track the base Z position from scroll
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);


  useFrame(() => {
    if (bottleRef.current) {

      // Apply floating animation while preserving scroll position
      bottleRef.current.position.x = scrollPositionRef.current.x
      bottleRef.current.position.y = scrollPositionRef.current.y

      // Subtle hover effect - only move backward slightly from base position
      if (isHovered.current) {
        // bottleRef.current.position.z = gsap.utils.interpolate(baseZPosition.current, baseZPosition.current + 0.5, 2);
      } else {
        // Return to base Z position when not hovered
        bottleRef.current.position.z = baseZPosition.current;
      }
    }
  });

  const handlePointerMove = (event) => {
    if (bottleRef.current) {
      // Use the Canvas viewport coordinates instead of DOM element
      const x = (event.point.x / window.innerWidth) * 2 - 1;
      const y = -(event.point.y / window.innerHeight) * 2 + 1;

      mouse.current.x = x;
      mouse.current.y = y;
    }
  };

  const handlePointerEnter = () => {
    isHovered.current = true;
  };

  const handlePointerLeave = () => {
    isHovered.current = false;
  };

  useEffect(() => {
    if (!bottleRef.current) return;

    // Initial position - start in first section (left side, top of viewport)
    scrollPositionRef.current = { x: -1.8, y: 4 };
    gsap.set(bottleRef.current.position, { x: -1.8, y: 4, z: 0.5 });
    gsap.set(bottleRef.current.rotation, { y: 0 });

    // Create a smooth scroll-triggered animation and store the reference
    const scrollTrigger = ScrollTrigger.create({
      trigger: "#model",
      start: "top bottom",
      end: "bottom top",
      scrub: 1.5, // Smoother scrubbing
      onUpdate: (self) => {
        if (!bottleRef.current) return;

        const progress = self.progress;
        let targetX, targetY, targetZ, targetRotY, targetRotX, targetRotZ;

        if (progress <= 0.16) {
          // entry animation
          const sectionProgress = progress * 6.25

          // Section 1 - Left side, top area (visible in first section)
          targetX = gsap.utils.interpolate(4, -1.5, sectionProgress);
          targetY = gsap.utils.interpolate(4.5, 3.5, sectionProgress); // Start higher, move down faster
          // targetY = 3
          targetZ = gsap.utils.interpolate(-3, 0.5, sectionProgress); // Zoom in effect
          targetRotY = gsap.utils.interpolate(Math.PI * 2, 0, sectionProgress);
          // targetRotX = gsap.utils.interpolate(Math.PI / 1.5, Math.PI / 2, sectionProgress); // X rotation
          targetRotX = 0
          // targetRotZ = gsap.utils.interpolate(0, 0, sectionProgress); // Z rotation
          targetRotZ = 0.2; // Fixed Z rotation for entry animation
        }
        else if (progress <= 0.25) {
          // Section 1 - Left side, top area (visible in first section)
          const sectionProgress = (progress - 0.16) * 11.11;

          targetX = -1.5
          targetY = gsap.utils.interpolate(3.5, 2.5, sectionProgress); // Faster vertical movement
          targetZ = gsap.utils.interpolate(0.5, 1, sectionProgress); // Slight zoom out
          targetRotY = gsap.utils.interpolate(0, 0.5, sectionProgress);
          targetRotX = gsap.utils.interpolate(0, -0.1, sectionProgress); // X rotation
          targetRotZ = gsap.utils.interpolate(0.2, -0.1, sectionProgress); // Z rotation
        }
        else if (progress <= 0.33) {
          // Section 1 - Left side, top area (visible in first section)
          const sectionProgress = (progress - 0.25) * 12.5;

          targetX = gsap.utils.interpolate(-1.5, 1.2, sectionProgress);
          targetY = gsap.utils.interpolate(2.5, 1.5, sectionProgress); // Start higher, move down faster
          targetZ = gsap.utils.interpolate(1, 0.5, sectionProgress); // Zoom in for transition
          targetRotY = gsap.utils.interpolate(0.5, Math.PI, sectionProgress);
          targetRotX = gsap.utils.interpolate(-0.1, 0.2, sectionProgress); // X rotation
          targetRotZ = gsap.utils.interpolate(-0.1, 0.3, sectionProgress); // Z rotation

        } else if (progress <= 0.5) {
          // Section 2 - Right side, center area (visible in second section)  
          const sectionProgress = (progress - 0.33) / 0.165;


          targetX = gsap.utils.interpolate(1.2, 1.5, sectionProgress);
          targetY = gsap.utils.interpolate(1.5, 0.1, sectionProgress); // Faster vertical movement
          targetZ = gsap.utils.interpolate(0.5, 1.5, sectionProgress); // Zoom out effect
          targetRotY = Math.PI;
          targetRotX = gsap.utils.interpolate(0.2, -0.3, sectionProgress); // X rotation
          targetRotZ = gsap.utils.interpolate(0.3, -0.2, sectionProgress); // Z rotation
        }
        else if (progress <= 0.6) {
          // Section 2 - Right side, center area (visible in second section)
          const sectionProgress = (progress - 0.5) * 10;


          targetX = gsap.utils.interpolate(1.5, 0, sectionProgress);
          targetY = gsap.utils.interpolate(0.1, -0.2, sectionProgress); // Faster vertical movement
          targetZ = gsap.utils.interpolate(1.5, 7, sectionProgress); // Zoom in for final transition
          // targetRotY = gsap.utils.interpolate(Math.PI, 0.2, sectionProgress);
          targetRotY = Math.PI;
          targetRotX = gsap.utils.interpolate(-0.3, -Math.PI / 2, sectionProgress); // X rotation
          targetRotZ = gsap.utils.interpolate(-0.2, 0, sectionProgress); // Z rotation
        }
        else if (progress <= 0.8) {
          // Section 3 - Left side, bottom area (visible in third section)
          const sectionProgress = (progress - 0.6) * 5;


          targetX = gsap.utils.interpolate(0, -1.8, sectionProgress);
          targetY = gsap.utils.interpolate(-0.2, -3.8, sectionProgress); // Move down much faster
          targetZ = gsap.utils.interpolate(7, -1.5, sectionProgress); // Final zoom out
          targetRotY = gsap.utils.interpolate(Math.PI, Math.PI, sectionProgress);
          targetRotX = gsap.utils.interpolate(-Math.PI / 2, 0, sectionProgress); // X rotation
          targetRotZ = gsap.utils.interpolate(0, -0.3, sectionProgress); // Z rotation
        }
        else {
          // remain in last section no change
          targetX = -1.8;
          targetY = -3.8;
          targetZ = -1.5;
          targetRotY = Math.PI;
          targetRotX = 0;
          targetRotZ = -0.3;
        }

        // Update the scroll position reference
        scrollPositionRef.current.x = targetX;
        scrollPositionRef.current.y = targetY;

        // Update base Z position for hover effect
        baseZPosition.current = targetZ;

        // Apply position with Z-axis movement for zoom effect (only if not hovered)
        if (!isHovered.current) {
          bottleRef.current.position.z = targetZ;
        }

        // Apply rotation directly with smoother interpolation
        bottleRef.current.rotation.y = targetRotY;
        bottleRef.current.rotation.x = targetRotX;
        bottleRef.current.rotation.z = targetRotZ;

        // Change material by showing/hiding different label meshes
        if (bottleModelRef.current) {
          const children = bottleModelRef.current.children;

          // Based on the new model structure:
          // children[0] = backLable (Nanoplast material)
          // children[4] = extraLable (Keratin material) 
          // children[5] = frontLable (Kerabotox material)

          if (children.length >= 6) {
            // Front label (Kerabotox) - Always visible
            if (children[5]) {
              children[5].visible = true;
            }

            // Position extraLable (Keratin) on the back initially
            if (children[4]) {
              children[4].position.set(0, 0, -0.01); // Move to back position
            }

            // For back label - show Keratin initially, then Nanoplast in last section
            if (progress >= 0.6) {
              // Section 3 - Show Nanoplast (backLable)
              if (children[0]) children[0].visible = true;
              if (children[4]) children[4].visible = false;

            } else {
              // Section 1 & 2 - Show Keratin (extraLable) on back
              if (children[0]) children[0].visible = false;
              if (children[4]) children[4].visible = true;

            }
          }
        }
      }
    });

    // Clean up only this specific ScrollTrigger
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <group
      ref={bottleRef}
      position={[-1.8, 3, 0.5]}
    >
      <group
        onPointerMove={handlePointerMove}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      >
        <Float speed={3} rotationIntensity={0.5} floatIntensity={1}>
          <Model ref={bottleModelRef} scale={isMobile ? 0.08 : 0.12} />
        </Float>
      </group>
      <mesh position={[0, -1.5, -0.5]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <primitive object={new ShadowMaterial({ transparent: true, opacity: 0.1 })} />
      </mesh>
    </group>
  );
}

export default function Slide() {
  const slideRef = useRef();

  // Refresh ScrollTrigger after component mounts to ensure compatibility with other components
  useEffect(() => {
    // Kill any conflicting ScrollTriggers first
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.trigger && trigger.vars.trigger.includes && trigger.vars.trigger.includes("#model")) {
        trigger.kill();
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: i => ({ opacity: 1, x: 0, transition: { delay: i * 0.2, duration: 0.6 } })
  };
  const products = [
    {
      id: 'section-1',
      title: 'Kerabotox',
      theme: 'red',
      gradient: ' bg-gradient-to-b from-[#330000] to-[#660000]',
      description: 'Experience the ultimate hair metamorphosis with Kerabotox: our advanced keratin-Botox fusion repair serum. Instantly erases frizz, revitalizes dull strands, and locks in silk-like smoothness for up to 6 months.',
      bullets: [
        '98% frizz elimination',
        'Deep nourishment for lasting shine',
        'Strengthens and rebuilds hair fibers',
        'Ideal for all hair types'
      ]
    },
    {
      id: 'section-2',
      title: 'Keratin Pro',
      theme: 'black',
      gradient: ' bg-gradient-to-b from-[#111111] to-[#333333]',
      description: 'Elevate hair health with Keratin Pro: pure protein infusion that rebuilds damaged cuticles, restores elasticity, and delivers salon-grade strength from root to tip.',
      bullets: [
        'Restores natural vitality',
        'Reduces breakage by 80%',
        'Enhances manageability and shine',
        'Protects against daily stressors'
      ]
    },
    {
      id: 'section-3',
      title: 'Nanoplast',
      theme: 'blue',
      gradient: ' bg-gradient-to-b from-[#001f3f] to-[#004080]',
      description: 'Unleash nano-precision care with Nanoplast: our innovative microscopic bonding treatment that penetrates deep to reconstruct and shield each strand. Enjoy lasting protection and hydration up to 8 months.',
      bullets: [
        'Ultra-fine molecular repair',
        'Heat & UV defense',
        'Long-lasting hydration',
        'Humidity resistance for flawless style'
      ]
    }
  ];

  return (
    <div ref={slideRef} id="model" className="w-full font-[Poppins,sans-serif] relative">
      <div className="absolute inset-0 z-30 pointer-events-none">
        <div className="absolute top-4 md:top-6 left-1/2 transform -translate-x-1/2 pt-3 text-red-100 font-bold text-xl md:text-2xl text-center px-4">
          Our Flagship Products
        </div>
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }} shadows gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[8, 12, 8]} intensity={1.5} castShadow shadow-mapSize-width={4096} shadow-mapSize-height={4096} shadow-camera-left={-15} shadow-camera-right={15} shadow-camera-top={15} shadow-camera-bottom={-15} shadow-camera-near={0.1} shadow-camera-far={50} shadow-bias={-0.0001} />
          <pointLight position={[-8, -8, -8]} intensity={0.2} />
          <spotLight position={[0, 15, 5]} angle={0.4} penumbra={1} intensity={0.8} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
          <Environment preset="studio" environmentIntensity={0.3} />
          <Suspense fallback={null}>
            <AnimatedBottle />
          </Suspense>
        </Canvas>
      </div>

      {products.map((prod, idx) => (
        <section key={prod.id} id={prod.id} className={`w-full h-[70vh] md:h-screen flex flex-col md:flex-row ${prod.gradient} relative z-20 text-white`}>
          {/* For section-2 (idx === 1), text should be on left, model on right */}
          {idx === 1 ? (
            <>
              <div className="w-full md:w-1/2 h-full md:h-full flex flex-col justify-center items-start px-4 md:px-8 lg:px-16 pt-32 md:pt-0">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={idx}
                  variants={sectionVariants}
                  className="max-w-lg"
                >
                  <motion.h2
                    className="text-3xl md:text-5xl font-orbitron mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {prod.title}
                  </motion.h2>
                  <motion.p
                    className="text-sm md:text-lg mb-4 md:mb-8 leading-relaxed"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {prod.description}
                  </motion.p>
                  <ul className="space-y-2 md:space-y-3">
                    {prod.bullets.map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                      >
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-white text-sm md:text-base">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
              <div className={`w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center`}>
                {/* 3D Model Space */}
              </div>
            </>
          ) : (
            <>
              <div className={`w-full md:w-1/2 h-full md:h-full flex items-center justify-center order-2 md:order-1`}>
                {/* 3D Model Space */}
              </div>
              <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-start px-4 md:px-8 lg:px-16 pt-54 md:pt-0 order-1 md:order-2">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  custom={idx}
                  variants={sectionVariants}
                  className="max-w-lg"
                >
                  <motion.h2
                    className="text-3xl md:text-5xl font-orbitron mb-4"
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                  >
                    {prod.title}
                  </motion.h2>
                  <motion.p
                    className="text-sm md:text-lg mb-4 md:mb-8 leading-relaxed"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                  >
                    {prod.description}
                  </motion.p>
                  <ul className="space-y-2 md:space-y-3">
                    {prod.bullets.map((text, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center space-x-3"
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.6 + i * 0.2, duration: 0.6 }}
                      >
                        <div className="w-2 md:w-3 h-2 md:h-3 bg-white rounded-full flex-shrink-0"></div>
                        <span className="text-white text-sm md:text-base">{text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </>
          )}
        </section>
      ))}
    </div>
  )
}
