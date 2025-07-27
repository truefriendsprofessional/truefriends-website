import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import keratinImg from "../assets/images/keratin6.jpg";
import nanoplastImg from "../assets/images/nanoplast6.jpg";
import kerabotoxImg from "../assets/images/kerabotox6.jpg";
import hairSerumImg from "../assets/images/hairSerum.jpg";
import prewaxImg from "../assets/images/prewax.jpg";
import waxingImg from "../assets/images/waxing.jpg";

gsap.registerPlugin(ScrollTrigger);

// Products data array
const productsData = [
  {
    title: "Advanced Keratin Shampoo",
    description: "Keratin formula that repairs and strengthens damaged hair. Premium quality ingredients for professional results.",
    price: "₹2275",
    image: keratinImg,
    backgroundColor: "bg-gradient-to-l from-amber-500 to-amber-900",
    accentColor: "from-[#161616] to-[#505050]",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/keratin"
  },
  {
    title: "Deep Nourishing Conditioner",
    description: "Premium conditioner with natural oils for silky results. Deeply moisturizes and repairs damaged hair for a healthy shine.",
    price: "₹3175",
    image: nanoplastImg,
    backgroundColor: "bg-gradient-to-l from-cyan-400 to-blue-100",
    accentColor: "from-[#2C3090] to-blue-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/nanoplastia"
  },
  {
    title: "Luxurious Hair Serum",
    description: "Hair serum with heat protection and brilliant shine. Advanced formula protects against styling damage while adding luminous shine.",
    price: "₹4175",
    image: kerabotoxImg,
    backgroundColor: "bg-gradient-to-l from-rose-500 to-rose-100",
    accentColor: "from-rose-400 to-rose-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/kera-boto-x"
  },
  {
    title: "Premium Hair Serum",
    description: "Professional-grade serum with argan oil and vitamin E. Nourishes and protects hair while providing exceptional shine and manageability.",
    price: "₹1575",
    image: hairSerumImg,
    backgroundColor: "bg-gradient-to-l from-amber-300 to-amber-900",
    accentColor: "from-[#2CA5A6] to-[#1D64A8] ",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/argan/products/argan-silky-shine-hair-serum"
  },
  {
    title: "Pre-Wax Treatment",
    description: "Styling treatment for hold and texture with natural movement. Prepares hair for styling while adding volume and texture.",
    price: "₹725",
    image: prewaxImg,
    backgroundColor: "bg-gradient-to-l from-red-400 to-emerald-100",
    accentColor: "from-emerald-400 to-emerald-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/depilatory/products/aloe-vera-moisturizing-after-wax-lotion"
  },
  {
    title: "Professional Styling Wax",
    description: "Professional wax with strong hold and matte finish. Perfect for creating defined styles that last all day with a natural look.",
    price: "₹1275",
    image: waxingImg,
    backgroundColor: "bg-gradient-to-l from-lime-500 to-purple-100",
    accentColor: "from-[#502A28] to-[#030D05]",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/depilatory/products/white-chocolate-brazilian-wax"
  }
];

const ProductCard = ({ product }) => (
  <div className="absolute w-full inset-0 flex flex-col lg:flex-row">
    {/* For small screens: merged single card */}
    <div className="lg:hidden w-full flex justify-center items-center px-4 my-auto md:p-6">
      <div className={`w-full max-w-sm md:max-w-xl p-4 md:p-6 bg-white/10 ${product.backgroundColor}/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all`}>
        <div className="relative group w-full mb-4 md:mb-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
          <img
            src={product.image}
            alt={product.title}
            className="relative w-full h-48 md:h-auto object-contain rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-xl md:text-3xl font-extrabold text-white tracking-wide font-[Orbitron] leading-tight">
            {product.title}
          </h3>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-2 md:pt-4">
            <span className="text-xl md:text-2xl font-bold text-white">{product.price}</span>
            <button
              onClick={() => window.open(product.redirectLink, "_blank")}
              className={`px-4 py-2 md:px-6 bg-gradient-to-r ${product.accentColor} text-white rounded-full font-semibold text-xs uppercase tracking-wider transition-transform hover:scale-105 cursor-pointer`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* For medium and larger screens: two-column layout */}
    <div className="hidden lg:flex lg:w-1/2 w-full justify-center items-center p-6 lg:p-12 lg:pt-28">
      <div className="w-full max-w-xl p-6 lg:p-10 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 hover:bg-white/15 transition-all">
        <div className="space-y-4">
          <h3 className="text-3xl lg:text-5xl font-extrabold text-white tracking-wide font-[Orbitron]">
            {product.title}
          </h3>
          <p className="text-base lg:text-lg text-white/90 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl lg:text-3xl font-bold text-white">
              {product.price}
            </span>
            <button
              onClick={() => window.open(product.redirectLink, "_blank")}
              className={`px-6 py-2 lg:px-8 lg:py-3 bg-gradient-to-r ${product.accentColor} text-white rounded-full cursor-pointer font-semibold text-xs lg:text-sm uppercase tracking-wider transition-transform hover:scale-105`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      className={`hidden lg:flex lg:w-1/2 w-full ${product.backgroundColor}/10 items-center justify-center relative lg:pt-28 p-6 overflow-hidden`}
    >
      <div className="relative z-10 w-full max-w-xs md:max-w-full">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-white/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-300"></div>
          <img
            src={product.image}
            alt={product.title}
            className="relative w-full h-full object-contain rounded-xl shadow-2xl group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  </div>
);

const Offerings = () => {
  const sectionRef = useRef(null);
  const activeProductRef = useRef(0);

  useEffect(() => {
    const container = sectionRef.current;
    if (!container) return;

    // Kill any existing ScrollTriggers for this section to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "offerings-sticky") {
        trigger.kill();
      }
    });

    const initTimer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const totalProducts = productsData.length;
        const cards = gsap.utils.toArray('.product-card', container);

        if (cards.length === 0) {
          console.warn("No product cards found");
          return;
        }

        // Set initial state - hide all cards except first
        gsap.set(cards, { 
          opacity: 0,
          pointerEvents: "none" // Disable interaction initially
        });
        gsap.set(cards[0], { 
          opacity: 1,
          pointerEvents: "auto" // Enable interaction for first card
        });

        // Create timeline for sticky scroll effect
        gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${totalProducts * 100}%`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            id: "offerings-sticky",
            onUpdate: (self) => {
              // Calculate which product should be active based on progress
              const progress = self.progress;
              const newActiveProduct = Math.min(
                Math.floor(progress * totalProducts),
                totalProducts - 1
              );

              if (newActiveProduct !== activeProductRef.current) {
                activeProductRef.current = newActiveProduct;

                // Fade out all cards and fade in the active one
                gsap.to(cards, { 
                  opacity: 0, 
                  duration: 0.9,
                  pointerEvents: "none" // Disable interaction for hidden cards
                });
                
                // Show and enable interaction for the active card
                gsap.to(cards[newActiveProduct], { 
                  opacity: 1, 
                  duration: 0.9,
                  pointerEvents: "auto" // Enable interaction for active card
                });
                gsap.from(cards[newActiveProduct], { x: 600, duration: 0.3 });
                gsap.to(cards[activeProductRef.current], { x: 0, duration: 1 });
                gsap.to(cards[newActiveProduct - 1], { x: -300, duration: 0.8 });
                console.log(`Switching to product ${newActiveProduct}`);
              }
            }
          }
        });

        console.log("Offerings sticky scroll initialized with", cards.length, "cards");
      }, sectionRef);

      return () => ctx.revert();
    }, 150);

    return () => {
      clearTimeout(initTimer);
    };
  }, []);

  return (
    <section
      id="offerings"
      ref={sectionRef}
      className="relative h-screen w-full bg-gradient-to-br from-fuchsia-950 via-fuchsia-300 to-pink-950 overflow-hidden"
      style={{
        fontFamily: "'Roboto','Poppins', 'Segoe UI', Arial, sans-serif",
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 ">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 right-3/4 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-bounce delay-5000"></div>
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 text-center pt-24 md:pt-20">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-5 bg-gradient-to-r from-[#161616] to-[#7b5b33] bg-clip-text text-transparent">
            Our Hair Care Products
          </h2>
        </div>
      </div>

      {/* Product Cards Container */}
      <div className="absolute w-full h-screen top-0 overflow-hidden">
        <div className="relative w-full h-full pt-24 md:pt-2">
          {productsData.map((product, index) => (
            <div
              key={index}
              className="product-card absolute inset-0 w-full h-full"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings