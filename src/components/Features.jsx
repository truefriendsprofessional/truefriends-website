import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const features = [
  {
    title: 'Gentle on Scalp, No Fumes',
    desc: 'Experience the difference with our unique formula that nourishes your scalp and hair without harsh chemicals or fumes. Perfect for sensitive skin and daily use.',
    video: './assets/videos/girl washing hair.mp4',
  },
  {
    title: 'No Harsh Chemicals',
    desc: 'Our shampoo is free from sulfates, parabens, and other harmful chemicals. Enjoy a clean, healthy scalp and vibrant hair.',
    video: './assets/videos/noChemical.mp4',
  },
  {
    title: 'Healing & Rejuvenating',
    desc: 'Infused with natural ingredients to help heal and rejuvenate your scalp and hair. See the shine and feel the softness after every wash.',
    video: './assets/videos/healing.mp4',
  },
]

const Features = () => {
  // Reference the tall container that controls the scroll-driven animation
  const containerRef = useRef(null)

  // Track scroll progress over the full container height
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  // Define Y-offset transforms for each card
  const y1 = useTransform(scrollYProgress, [0, 0.33, 1], ['0%', '0%', '0%'])
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], ['100%', '0%', '0%', '0%'])
  const y3 = useTransform(scrollYProgress, [0, 0.55, 0.85, 1], ['200%', '200%', '0%', '0%'])
  const zIndexes = [1, 2, 3]
  const boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)'

  return (
    <section id="features" className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      {/* Outer container height = 3x viewport to allow full scroll-through before unstick */}
      <div ref={containerRef} className="h-[300vh]">
        {/* Sticky wrapper pins content until scroll through 300vh */}
        <div className="sticky top-0 flex flex-col justify-center items-center h-screen px-4 py-16">
          <div className="w-full max-w-6xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-center text-white mb-4 tracking-tight">
              Why Choose Our Shampoo?
            </h2>
            <p className="text-xl md:text-2xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
              Discover the benefits of a formula designed for real results and real comfort.
            </p>
            <div className="relative min-h-[700px] flex flex-col items-center justify-center">
              {/* Card 0 */}
              <motion.div
                style={{ y: y1, zIndex: zIndexes[0], position: 'absolute', width: '100%', boxShadow }}
                initial={{ opacity: 1, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 gap-6 md:gap-10 border border-gray-700"
              >
                {/* ... content same as before ... */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{features[0].title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-4">{features[0].desc}</p>
                  <ul className="list-disc pl-5 text-gray-400 text-base md:text-lg space-y-1">
                    <li>Zero fumes for a pleasant wash</li>
                    <li>Safe for all ages</li>
                    <li>Dermatologist tested</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-600">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    >
                      <source src={features[0].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
              {/* Card 1 */}
              <motion.div
                style={{ y: y2, zIndex: zIndexes[1], position: 'absolute', width: '100%', boxShadow }}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 gap-6 md:gap-10 border border-gray-700"
              >
                {/* ... content same as before ... */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{features[1].title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-4">{features[1].desc}</p>
                  <ul className="list-disc pl-5 text-gray-400 text-base md:text-lg space-y-1">
                    <li>No sulfates or parabens</li>
                    <li>Color-safe and gentle</li>
                    <li>Eco-friendly packaging</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-600">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    >
                      <source src={features[1].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div
                style={{ y: y3, zIndex: zIndexes[2], position: 'absolute', width: '100%', boxShadow }}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row items-center bg-gray-800 rounded-3xl overflow-hidden p-6 md:p-8 gap-6 md:gap-10 border border-gray-700"
              >
                {/* ... content same as before ... */}
                <div className="w-full md:w-1/2 flex flex-col justify-center items-start mb-4 md:mb-0">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{features[2].title}</h3>
                  <p className="text-lg md:text-xl text-gray-300 mb-4">{features[2].desc}</p>
                  <ul className="list-disc pl-5 text-gray-400 text-base md:text-lg space-y-1">
                    <li>Natural healing botanicals</li>
                    <li>Restores shine and softness</li>
                    <li>Reduces scalp irritation</li>
                  </ul>
                </div>
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="aspect-w-16 aspect-h-9 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-600">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover rounded-2xl"
                    >
                      <source src={features[2].video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
