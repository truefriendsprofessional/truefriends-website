import React from 'react'

const Features = () => {
  return (
   <section
          id="features"
          className="min-h-screen w-full flex justify-center items-center bg-gray-800 px-6"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-4">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              {[
                "Deep Hydration",
                "Frizz Control",
                "Heat Protection",
                "Salon Shine",
              ].map((feat, i) => (
                <div
                  key={i}
                  className="p-4 bg-gray-700/50 rounded-lg cursor-pointer transform hover:scale-105 transition"
                >
                  <h3 className="text-2xl font-semibold mb-1">{feat}</h3>
                  <p className="opacity-70">
                    {feat === "Deep Hydration"
                      ? "Locks in moisture for lasting smoothness."
                      : feat === "Frizz Control"
                      ? "Tames hair in any climate."
                      : feat === "Heat Protection"
                      ? "Guards against styling damage."
                      : "Deliver a professional finish."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Features