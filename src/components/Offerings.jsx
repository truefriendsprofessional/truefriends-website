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
    backgroundColor: "from-amber-500/20 to-amber-900/30",
    accentColor: "from-[#161616] to-[#505050]",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/keratin"
  },
  {
    title: "Deep Nourishing Conditioner",
    description: "Premium conditioner with natural oils for silky results. Deeply moisturizes and repairs damaged hair for a healthy shine.",
    price: "₹3175",
    image: nanoplastImg,
    backgroundColor: "from-cyan-400/20 to-blue-600/30",
    accentColor: "from-[#2C3090] to-blue-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/nanoplastia"
  },
  {
    title: "Luxurious Hair Serum",
    description: "Hair serum with heat protection and brilliant shine. Advanced formula protects against styling damage while adding luminous shine.",
    price: "₹4175",
    image: kerabotoxImg,
    backgroundColor: "from-rose-500/20 to-pink-600/30",
    accentColor: "from-rose-400 to-rose-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/kera-boto-x"
  },
  {
    title: "Premium Hair Serum",
    description: "Professional-grade serum with argan oil and vitamin E. Nourishes and protects hair while providing exceptional shine and manageability.",
    price: "₹1575",
    image: hairSerumImg,
    backgroundColor: "from-emerald-400/20 to-teal-600/30",
    accentColor: "from-[#2CA5A6] to-[#1D64A8]",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/argan/products/argan-silky-shine-hair-serum"
  },
  {
    title: "Pre-Wax Treatment",
    description: "Styling treatment for hold and texture with natural movement. Prepares hair for styling while adding volume and texture.",
    price: "₹725",
    image: prewaxImg,
    backgroundColor: "from-orange-400/20 to-red-500/30",
    accentColor: "from-emerald-400 to-emerald-600",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/depilatory/products/aloe-vera-moisturizing-after-wax-lotion"
  },
  {
    title: "Professional Styling Wax",
    description: "Professional wax with strong hold and matte finish. Perfect for creating defined styles that last all day with a natural look.",
    price: "₹1275",
    image: waxingImg,
    backgroundColor: "from-purple-500/20 to-indigo-600/30",
    accentColor: "from-[#502A28] to-[#030D05]",
    redirectLink: "https://truefriendsprofessional.myshopify.com/collections/depilatory/products/white-chocolate-brazilian-wax"
  }
];

const ProductCard = ({ product }) => (
  <div className={`w-full h-full bg-gradient-to-br ${product.backgroundColor} relative overflow-hidden`}>
    {/* Animated background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-bounce"></div>
    </div>

    {/* For small screens: single column layout */}
    <div className="lg:hidden w-full h-full flex flex-col justify-center items-center px-6 py-12 relative z-10">
      <div className="w-full max-w-sm space-y-6">
        {/* Image Section */}
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-white/20 to-white/10 rounded-3xl blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain rounded-xl group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 space-y-4">
          <h3 className="text-2xl font-extrabold text-white tracking-wide font-[Orbitron] leading-tight">
            {product.title}
          </h3>
          <p className="text-sm text-white/90 leading-relaxed">
            {product.description}
          </p>
          <div className="flex items-center justify-between pt-4">
            <span className="text-2xl font-bold text-white">{product.price}</span>
            <button
              onClick={() => window.open(product.redirectLink, "_blank")}
              className={`px-6 py-3 bg-gradient-to-r ${product.accentColor} text-white rounded-full font-semibold text-xs uppercase tracking-wider transition-all hover:scale-105 hover:shadow-lg cursor-pointer`}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* For large screens: modern two-section layout */}
    <div className="hidden lg:flex w-full h-full relative z-10 px-10">
      {/* Left side - Product Info */}
      <div className="w-1/2 h-full flex flex-col justify-center px-12 py-16 pl-30">
        <div className="max-w-xl space-y-8">
          {/* Glass card effect */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-4xl lg:text-5xl font-extrabold text-white tracking-wide font-[Orbitron] leading-tight">
                  {product.title}
                </h3>
                <div className="w-20 h-1 bg-gradient-to-r from-white/50 to-transparent rounded-full"></div>
              </div>
              
              <p className="text-lg text-white/90 leading-relaxed font-light">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between pt-6">
                <div className="space-y-1">
                  <span className="text-sm text-white/70 uppercase tracking-wider">Price</span>
                  <div className="text-3xl lg:text-4xl font-bold text-white">
                    {product.price}
                  </div>
                </div>
                <button
                  onClick={() => window.open(product.redirectLink, "_blank")}
                  className={`px-8 py-4 bg-gradient-to-r ${product.accentColor} text-white rounded-full cursor-pointer font-semibold text-sm uppercase tracking-wider transition-all hover:scale-105 hover:shadow-xl transform`}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Product Image */}
      <div className="w-1/2 h-full flex items-center justify-center ">
        <div className="relative w-full group">
          {/* Enhanced glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-white/20 via-white/10 to-white/20 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700"></div>
          
          {/* Image container with modern styling */}
          <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-3 border border-white/20 shadow-2xl">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain rounded-2xl group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
            />
          </div>
          
          {/* Floating accent */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full blur-sm animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white/15 rounded-full blur-sm animate-pulse"></div>
        </div>
      </div>
    </div>
  </div>
);

const Offerings = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);

  useEffect(() => {
    const container = sectionRef.current;
    const cardsContainer = cardsContainerRef.current;
    if (!container || !cardsContainer) return;

    // Kill any existing ScrollTriggers for this section to prevent conflicts
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars.id === "offerings-horizontal") {
        trigger.kill();
      }
    });

    const ctx = gsap.context(() => {
      const totalProducts = productsData.length;
      const cardWidth = window.innerWidth;
      const totalWidth = cardWidth * (totalProducts - 1); // Fix: subtract 1 to prevent extra space

      // Create horizontal scroll animation
      gsap.to(cardsContainer, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${totalWidth}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          id: "offerings-horizontal"
        }
      });

      console.log("Horizontal scroll initialized");
    }, sectionRef);

    return () => ctx.revert();
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
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 text-center pt-8 md:pt-20 bg-amber-300">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-5 bg-gradient-to-r from-[#161616] to-[#7b5b33] bg-clip-text text-transparent">
            Our Hair Care Products
          </h2>
        </div>
      </div>

      {/* Horizontal Scrolling Cards Container */}
      <div className="w-full h-full pt-20 md:pt-24">
        <div 
          ref={cardsContainerRef}
          className="flex h-full"
          style={{ width: `${productsData.length * 100}vw` }}
        >
          {productsData.map((product, index) => (
            <div
              key={index}
              className="product-card flex-shrink-0 w-screen h-full"
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