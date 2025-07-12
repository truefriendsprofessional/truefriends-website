import React, { useState, useEffect } from 'react'

// Product testimonials data
const testimonials = [
  {
    id: 1,
    image: "./public/assets/kerabotox6.jpg",
    name: "Advanced Keratin Shampoo",
    testimonial: "Amazing results! My hair feels stronger and shinier.",
    rating: 5,
    price: "$29.99"
  },
  {
    id: 2,
    image: "./public/assets/nanoplast6.jpg",
    name: "Deep Nourishing Conditioner",
    testimonial: "Perfect for dry hair. Incredible softness!",
    rating: 5,
    price: "$24.99"
  },
  {
    id: 3,
    image: "./public/assets/keratin6.jpg",
    name: "Luxurious Hair Serum",
    testimonial: "Heat protection that actually works. Love it!",
    rating: 5,
    price: "$34.99"
  },
  {
    id: 4,
    image: "./public/assets/hairSerum.jpg",
    name: "Premium Hair Serum",
    testimonial: "Professional quality at home. Highly recommend!",
    rating: 5,
    price: "$39.99"
  },
  {
    id: 5,
    image: "./public/assets/prewax.jpg",
    name: "Pre-Wax Treatment",
    testimonial: "Great hold without the sticky feeling.",
    rating: 5,
    price: "$27.99"
  },
  {
    id: 6,
    image: "./public/assets/waxing.jpg",
    name: "Professional Styling Wax",
    testimonial: "Matte finish that lasts all day long.",
    rating: 5,
    price: "$32.99"
  }
];

// Star Rating Component
const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className={`w-4 h-4 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Contact = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-slide testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentProduct = testimonials[currentTestimonial];

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-20 px-6"
      style={{
        background: 'radial-gradient(at top left, #f5e6eb 0%, transparent 50%), radial-gradient(at bottom right, #c8b5db 0%, transparent 50%),linear-gradient(to top right, #f5e6eb, #f1e5ee, #c8b5db);',
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2
                className="text-4xl font-bold mb-4 text-black/50"
                style={{ fontFamily: 'Roboto, sans-serif' }}
              >
                Get in Touch
              </h2>
              <p className="text-lg text-black/90 mb-8">
                For bulk orders and salon partnerships, reach out to us!
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <div
                className="p-6 rounded-2xl shadow-lg"
                style={{
                  backgroundColor: '#DED6D1',
                  border: '2px solid #EEC6CA'
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6B9080' }}>
                  Business Inquiries
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-gray-700">
                      <a
                        href="mailto:sales@truefriendspro.com"
                        className="hover:underline"
                        style={{ color: '#6B9080' }}
                      >
                        sales@truefriendspro.com
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-700">
                      <a
                        href="tel:+911234567890"
                        className="hover:underline"
                        style={{ color: '#6B9080' }}
                      >
                        +91 12345 67890
                      </a>
                    </span>
                  </div>
                </div>
              </div>

              {/* Additional Contact Info */}
              <div
                className="p-6 rounded-2xl shadow-lg"
                style={{
                  backgroundColor: '#DED6D1',
                  border: '2px solid #EEC6CA'
                }}
              >
                <h3 className="text-xl font-bold mb-4" style={{ color: '#6B9080' }}>
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Professional salon-grade quality
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Natural ingredients & cruelty-free
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Bulk discounts available
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 mr-2" style={{ color: '#6B9080' }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Fast & reliable shipping
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column - Product Testimonial Carousel */}
          <div className="space-y-6 mt-17">
            {/* <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Featured Product
              </h3>
            </div> */}
            {/* Indicator Dots */}
            <div className="flex justify-center space-x-2 mb-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentTestimonial
                      ? 'bg-opacity-100 border-2 border-black/30'
                      : 'bg-opacity-30 hover:bg-opacity-60'
                    }`}
                  style={{ backgroundColor: '#6B9080' }}
                />
              ))}
            </div>

            {/* Testimonial Card */}
            <div
              className="transform transition-all duration-500 px-10 pt-6 pb-1 bg-white/30 backdrop-blur-lg rounded-3xl shadow-xl"
              style={{
                // backgroundColor: '#DED6D1',
                // border: '2px solid #EEC6CA'
              }}
            >
              <div className="text-center mb-4">
                <div className="w-full h-70 mb-4 overflow-hidden rounded-xl">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h4 className="text-xl font-bold mb-2" style={{ color: '#6B9080' }}>
                  {currentProduct.name}
                </h4>
                {/* <div className="flex justify-center mb-2">
                  <StarRating rating={currentProduct.rating} />
                </div> */}
                {/* <p className="text-gray-700 italic text-sm mb-4">
                  "{currentProduct.testimonial}"
                </p> */}
                {/* <p className="text-2xl font-bold" style={{ color: '#6B9080' }}>
                  {currentProduct.price}
                </p> */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    className="flex-1 py-3  rounded-lg font-semibold text-white bg-[#6B9080] cursor-pointer transition-all duration-300 transform hover:bg-black/50"
                    
                  >
                    Buy Now
                  </button>
                  <button
                    className="flex-1 py-3  text-[#6B9080]  border-2 border-[#6B9080] cursor-pointer hover:bg-[#6B9080] hover:text-white rounded-lg font-semibold transition-all duration-300 transform "

                  >
                    Explore More
                  </button>
                </div>
              </div>


            </div>

            {/* Action Buttons */}

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact