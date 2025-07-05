import React from 'react'

const Reviews = () => {
  return (
    <section
          id="reviews"
          className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">What Salon Owners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="p-6 bg-gray-800/60 rounded-lg transform hover:scale-105 transition"
              >
                <img
                  src={`../assets/bg.jpg`}
                  alt="Owner"
                  className="rounded-full mx-auto mb-4"
                />
                <blockquote className="italic opacity-80 mb-2">
                  “Fantastic shine and manageable hair every time!”
                </blockquote>
                <cite className="opacity-70">— Owner {i}, City</cite>
              </div>
            ))}
          </div>
        </section>
  )
}

export default Reviews