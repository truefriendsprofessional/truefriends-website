import React from 'react'

const WhyUs = () => {
  return (
       <section
          id="why-us"
          className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900 px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-3 text-lg opacity-80">
            <li>Expert-formulated keratin treatments</li>
            <li>Clinical-grade ingredients for guaranteed shine</li>
            <li>Custom salon pricing and support</li>
            <li>Sustainable, salon-friendly packaging</li>
          </ul>
        </section>
  )
}

export default WhyUs