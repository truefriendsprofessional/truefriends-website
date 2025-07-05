import React from 'react'

const Contact = () => {
  return (
  <section
          id="contact"
          className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-800 px-6 text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="opacity-80 mb-6">
            For bulk orders and salon partnerships:
          </p>
          <div className="space-y-2">
            <p>
              Email:{" "}
              <a
                href="mailto:sales@truefriendspro.com"
                className="text-pink-400"
              >
                sales@truefriendspro.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:+911234567890" className="text-pink-400">
                +91 12345 67890
              </a>
            </p>
          </div>
        </section>
  )
}

export default Contact