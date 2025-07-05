import React from 'react'

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="public\assets\videos\3.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full bg-gray-900/70">
        <h1
          id="true"
          className="text-7xl font-extrabold mb-6 uppercase tracking-widest text-amber-500"
        >
          True Friends
        </h1>
        <h1
          id="professional"
          className="text-7xl font-extrabold mb-6 uppercase tracking-widest text-amber-500"
        >
          Professional
        </h1>
        <p className="max-w-lg text-lg opacity-80">
          Salon-grade hair care that elevates your service and your clients’
          confidence.
        </p>
      </div>
    </section>
  )
}

export default Home