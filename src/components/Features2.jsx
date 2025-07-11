import { projects } from "../data"
import Card from "./Cards";
import Lenis from '@studio-freight/lenis'
import { useScroll } from 'framer-motion';
import { useEffect, useRef } from "react";

const Features2 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })
  return (
    <div ref={container} className='relative mt-[50vh]'>
      {
        projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i) * 0.05);
          return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale} />
        })
      }
    </div>
  )
}
export default Features2

