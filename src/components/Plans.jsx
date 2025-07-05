import React from 'react'

const Plans = () => {
  return (
    <section
          id="plans"
          className="min-h-screen w-full flex justify-center items-center bg-gray-800 px-6"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-4xl font-bold mb-6">Key Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Starter Pack", "Professional Pack", "Ultimate Pack"].map(
                (plan, i) => (
                  <div
                    key={i}
                    className="p-6 border border-gray-700 rounded-lg transform hover:shadow-lg transition"
                  >
                    <h3 className="text-2xl font-semibold mb-2">{plan}</h3>
                    <p className="opacity-70">
                      {plan === "Starter Pack"
                        ? "Shampoo & conditioner duo. Ideal for trial runs."
                        : plan === "Professional Pack"
                        ? "Complete line: masks, serums & styling aids."
                        : "Includes training materials and salon display kits."}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>
        </section>
  )
}

export default Plans