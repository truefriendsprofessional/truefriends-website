import React from 'react'
import { ThreeDMarquee } from './ui/3d-marquee';
// Reviews data array with Indian names
const reviewsData = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Elite Hair Studio Mumbai",
    rating: 5,
    review: "Absolutely love these products! My clients' hair looks amazing and feels so soft after treatment."
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Modern Hair Salon Delhi",
    rating: 5,
    review: "Best hair care products I've used in my 15 years as a stylist. Highly recommend!"
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Luxe Hair Boutique Bangalore",
    rating: 5,
    review: "The keratin shampoo is a game-changer. My clients keep asking what I'm using!"
  },
  {
    id: 4,
    name: "Arjun Singh",
    location: "Premium Hair Care Pune",
    rating: 5,
    review: "Professional quality products that deliver consistent results every time."
  },
  {
    id: 5,
    name: "Kavya Reddy",
    location: "Glamour Hair Gallery Hyderabad",
    rating: 5,
    review: "My salon has seen a 30% increase in customer satisfaction since using these products."
  },
  {
    id: 6,
    name: "Vikram Joshi",
    location: "Style Masters Chennai",
    rating: 5,
    review: "The styling wax gives perfect hold without making hair look greasy. Love it!"
  },
  {
    id: 7,
    name: "Ananya Gupta",
    location: "Trendy Cuts Kolkata",
    rating: 5,
    review: "Natural ingredients that actually work. My clients notice the difference immediately."
  },
  {
    id: 8,
    name: "Rohit Mehta",
    location: "Urban Hair Studio Ahmedabad",
    rating: 5,
    review: "Excellent value for money. These products compete with the most expensive brands."
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

// Function to get initials from name
const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase();
};

// Function to get random color based on name
const getAvatarColor = (name) => {
  const colors = [
    'bg-gradient-to-br from-purple-500 to-pink-500',
    'bg-gradient-to-br from-blue-500 to-cyan-500',
    'bg-gradient-to-br from-green-500 to-emerald-500',
    'bg-gradient-to-br from-orange-500 to-red-500',
    'bg-gradient-to-br from-indigo-500 to-purple-500',
    'bg-gradient-to-br from-rose-500 to-pink-500',
    'bg-gradient-to-br from-teal-500 to-green-500',
    'bg-gradient-to-br from-amber-500 to-orange-500'
  ];
  
  // Use name length to get consistent color for same name
  const index = name.length % colors.length;
  return colors[index];
};

// Avatar Component
const Avatar = ({ name }) => {
  const initials = getInitials(name);
  const colorClass = getAvatarColor(name);
  
  return (
    <div className={`w-12 h-12 rounded-full ${colorClass} flex items-center justify-center text-white font-bold text-base border-2 border-[#EEC970] shadow-lg`}>
      {initials}
    </div>
  );
};

// Review Card Component
const ReviewCard = ({ review }) => {
  return (
    <div
      className="flex-shrink-0 w-80 mx-4 p-6 rounded-2xl shadow-lg bg-[#FAFAFA] border-2 border-[#EEC970]/30"
    >
      <div className="flex items-center mb-4">
        <Avatar name={review.name} />
        <div className="ml-4">
          <h4 className="font-bold text-lg" style={{ color: '#6B9080' }}>
            {review.name}
          </h4>
          <p className="text-sm text-gray-600">{review.location}</p>
        </div>
      </div>
      <StarRating rating={review.rating} />
      <p className="text-gray-700 text-sm leading-relaxed italic">
        "{review.review}"
      </p>
    </div>
  );
};

const Reviews = () => {
  return (
    <section
      id="reviews"
      className="w-full py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(0deg, #B3A18A 0%, #A4C3B2 50%, #B3A18A 100%)',
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold mb-4 text-white"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
          What Salon Owners Say
        </h2>
        <p className="text-lg text-white/90 max-w-2xl mx-auto">
          Trusted by hundreds of professional salons and stylists worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Moving Strip */}
        <div className="flex animate-marquee">
          {/* First set of reviews */}
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {/* Duplicate set for seamless loop */}
          {reviewsData.map((review) => (
            <ReviewCard key={`duplicate-${review.id}`} review={review} />
          ))}
        </div>
      </div>

      {/* CSS for marquee animation */}
      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        
      `}</style>
    </section>
  )
}

export default Reviews