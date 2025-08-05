import React, { memo, useMemo } from 'react';
import { ThreeDMarquee } from './ui/3d-marquee';

// Star Rating Component - Memoized for performance
const StarRating = memo(({ rating }) => (
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
));
StarRating.displayName = 'StarRating';

// Review Card - Memoized for performance
const ReviewCard = memo(({ review }) => (
  <div className="bg-white text-black p-4 md:p-6 rounded-2xl shadow-md border-2 border-[#EEC970]/30 w-48 md:w-64 hardware-accelerated">
    <div className="flex items-center mb-3 md:mb-4">
      <img
        src={review.avatar}
        alt={review.name}
        className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-3 md:mr-4 border-2 border-[#EEC970] review-avatar"
        loading="lazy" // Add lazy loading for images
      />
      <div>
        <h4 className="font-bold text-sm md:text-lg text-[#6B9080]">{review.name}</h4>
        <p className="text-xs md:text-sm text-gray-600">{review.location}</p>
      </div>
    </div>
    <StarRating rating={review.rating} />
    <p className="text-gray-700 text-xs md:text-sm italic">"{review.review}"</p>
  </div>
));
ReviewCard.displayName = 'ReviewCard';

// Review Data - Indian names with English reviews
const reviewsData = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Elite Hair Studio Mumbai",
    rating: 5,
    review: "Absolutely love these products! My clients' hair looks amazing and feels so soft after treatment.",
    avatar: "/assets/images/1.png"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Modern Hair Salon Delhi",
    rating: 5,
    review: "Best hair care products I've used in my 15 years as a stylist. Highly recommend!",
    avatar: "/assets/images/5.png"
  },
  {
    id: 3,
    name: "Sneha Patel",
    location: "Luxe Hair Boutique Bangalore",
    rating: 5,
    review: "The keratin shampoo is a game-changer. My clients keep asking what I'm using!",
    avatar: "/assets/images/7.png"
  },
  {
    id: 4,
    name: "Arjun Singh",
    location: "Premium Hair Care Pune",
    rating: 5,
    review: "Professional quality products that deliver consistent results every time.",
    avatar: "/assets/images/13.png"
  },
  {
    id: 5,
    name: "Kavya Reddy",
    location: "Glamour Hair Gallery Hyderabad",
    rating: 5,
    review: "My salon has seen a 30% increase in customer satisfaction since using these products.",
    avatar: "/assets/images/1.png"
  },
  {
    id: 6,
    name: "Vikram Joshi",
    location: "Style Masters Chennai",
    rating: 5,
    review: "The styling wax gives perfect hold without making hair look greasy. Love it!",
    avatar: "/assets/images/5.png"
  },
  {
    id: 7,
    name: "Ananya Gupta",
    location: "Trendy Cuts Kolkata",
    rating: 5,
    review: "Natural ingredients that actually work. My clients notice the difference immediately.",
    avatar: "/assets/images/7.png"
  },
  {
    id: 8,
    name: "Rohit Mehta",
    location: "Urban Hair Studio Ahmedabad",
    rating: 5,
    review: "Excellent value for money. These products compete with the most expensive brands.",
    avatar: "/assets/images/13.png"
  },
  {
    id: 9,
    name: "Deepika Iyer",
    location: "Chic Hair Studio Kochi",
    rating: 5,
    review: "These products have transformed my salon's offerings. Clients are thrilled!",
    avatar: "/assets/images/1.png"
  },
  {
    id: 10,
    name: "Karan Malhotra",
    location: "Downtown Salon Chandigarh",
    rating: 5,
    review: "I can't imagine using anything else. These products are a staple in my salon.",
    avatar: "/assets/images/5.png"
  },
  {
    id: 11,
    name: "Riya Agarwal",
    location: "Elegant Hair Studio Jaipur",
    rating: 5,
    review: "These products have elevated my salon's services. My clients adore them!",
    avatar: "/assets/images/7.png"
  },
  {
    id: 12,
    name: "Siddharth Nair",
    location: "Fashion Hair Studio Goa",
    rating: 5,
    review: "These products have made a noticeable difference in my clients' hair health.",
    avatar: "/assets/images/13.png"
  },
  {
    id: 13,
    name: "Ishita Kapoor",
    location: "Luxury Hair Salon Lucknow",
    rating: 5,
    review: "The keratin treatment is a hit with my clients. They keep coming back for more!",
    avatar: "/assets/images/1.png"
  },
  {
    id: 14,
    name: "Aditya Verma",
    location: "Elite Hair Studio Indore",
    rating: 5,
    review: "Outstanding quality products that deliver professional salon results every time.",
    avatar: "/assets/images/5.png"
  },
  {
    id: 15,
    name: "Pooja Mishra",
    location: "Trendy Hair Salon Bhopal",
    rating: 5,
    review: "I love the natural ingredients. My clients' hair has never looked better.",
    avatar: "/assets/images/7.png"
  },
  {
    id: 16,
    name: "Neha Chopra",
    location: "Glamorous Hair Studio Nagpur",
    rating: 5,
    review: "These products have completely transformed my salon's reputation in the city!",
    avatar: "/assets/images/13.png"
  },
];

// Main Reviews Section with 3D Marquee  
const ThreeDMarqueeDemo = () => {
  // Memoize the review cards to prevent unnecessary re-renders
  const reviewCards = useMemo(() => 
    reviewsData.map((review) => <ReviewCard key={review.id} review={review} />), 
    []
  );

  return (
    <section
      id="reviews"
      className="w-full font-Roboto overflow-hidden  bg-gray-950/5 ring-1 ring-neutral-700/10 dark:bg-neutral-800"
      style={{
        // background: 'linear-gradient(0deg, #B3A18A 0%, #A4C3B2 50%, #B3A18A 100%)',
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white py-2 bg-teal-900 px-4">What Salon Owners Say</h2>
      </div>

      <div className="">
        <ThreeDMarquee images={reviewCards} />
      </div>
    </section>
  );
};

export default ThreeDMarqueeDemo;
