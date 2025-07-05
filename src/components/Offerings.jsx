import React from 'react'

const Offerings = () => {
  return (
    <section
          id="offerings"
          className="min-h-screen w-full flex justify-center items-center bg-gray-900 px-6 text-center"
        >
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-4">Our Offerings</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="p-6 bg-gray-800/60 rounded-lg transform hover:translate-y-2 transition"
                >
                  <img
                    src={`../assets/5.png`}
                    alt="Offer"
                    className="mx-auto mb-4 rounded"
                  />
                  <p className="opacity-80">Product Description {i}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default Offerings