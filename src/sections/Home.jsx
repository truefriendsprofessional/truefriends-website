import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white font-sans">
      {/* Modern 3D background */}
      {/* <Spline scene="https://prod.spline.design/b6Bw9VcnN8uZgi68/scene.splinecode" className="fixed inset-0 z-0" /> */}
        {/* <Spline scene="https://prod.spline.design/b6Bw9VcnN8uZgi68/scene.splinecode" /> */}
 
      <Spline scene="https://prod.spline.design/eOFC78XgoIeKLz5g/scene.splinecode" className="fixed inset-0 -0" />
{/* <Spline scene="https://prod.spline.design/5FgWeFrPNO1RR9k4/scene.splinecode" /> */}
  
      {/* Modern Navbar */}
      <nav className="fixed w-full z-50 flex justify-between items-center px-12 py-6 backdrop-blur-md bg-black/50">
        <div className="text-2xl font-bold text-yellow-400">TRUE FRIENDS</div>
        <div className="space-x-8 text-lg">
          <a href="#home" className="hover:text-yellow-300 transition">Home</a>
          <a href="#features" className="hover:text-yellow-300 transition">Features</a>
          <a href="#about" className="hover:text-yellow-300 transition">About</a>
          <button className="ml-4 px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-500 transition">Buy Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col items-center justify-center h-screen text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-5xl md:text-8xl font-extrabold text-yellow-400 drop-shadow-lg"
        >
          TRUE FRIENDS PROFESSIONAL
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl max-w-2xl"
        >
          Elevate your salon business with our premium hair treatment products crafted for professionals.
        </motion.p>
        <motion.button 
          whileHover={{ scale: 1.1 }} 
          className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-full text-lg font-semibold"
        >
          Shop Now
        </motion.button>
      </section>

      {/* Animated Bottles Orbiting */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-96 h-96 z-40">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="relative w-full h-full"
        >
          <motion.img 
            src="/assets/bbottle1.png" 
            className="absolute top-0 left-1/2 w-16 h-16 -translate-x-1/2" />
          <motion.img 
            src="/assets/bbottle2.png" 
            className="absolute bottom-0 left-1/2 w-16 h-16 -translate-x-1/2" />
          <motion.img 
            src="/assets/bbottle3.png" 
            className="absolute top-1/2 left-0 w-16 h-16 -translate-y-1/2" />
          <motion.img 
            src="/assets/bbottle4.png" 
            className="absolute top-1/2 right-0 w-16 h-16 -translate-y-1/2" />
        </motion.div>
      </div>

      {/* Features Section */}
      <section id="features" className="relative z-40 py-24 px-8 bg-black/80">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-yellow-400 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Premium Quality</h3>
            <p>Top-grade ingredients for long-lasting hair care results your clients will love.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-yellow-400 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">For Professionals</h3>
            <p>Formulated to meet the high standards of salons and hair specialists.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="p-6 border border-yellow-400 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-2">Fast Delivery</h3>
            <p>Reliable B2B supply chain so you never run out of stock.</p>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="about" className="relative z-40 py-24 px-8 bg-yellow-400 text-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Partner with True Friends</h2>
        <p className="max-w-3xl mx-auto mb-8">Join hundreds of salons who trust True Friends for their premium hair treatment needs. Let’s grow together.</p>
        <button className="px-6 py-3 bg-black text-yellow-400 rounded-full text-lg font-semibold hover:bg-gray-900 transition">Get Started</button>
      </section>
    </main>
  );
}
