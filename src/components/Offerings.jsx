// Products data array
const productsData = [
  {
    id: 1,
    name: "Advanced Keratin Shampoo",
    description: "Keratin formula that repairs and strengthens damaged hair.",
    price: "$29.99",
    image: "./public/assets/kerabotox6.jpg",
    alt: "Keratin Shampoo"
  },
  {
    id: 2,
    name: "Deep Nourishing Conditioner",
    description: "Premium conditioner with natural oils for silky results.",
    price: "$24.99",
    image: "./public/assets/nanoplast6.jpg",
    alt: "Hair Conditioner"
  },
  {
    id: 3,
    name: "Luxurious Hair Serum",
    description: "Hair serum with heat protection and brilliant shine.",
    price: "$34.99",
    image: "./public/assets/keratin6.jpg",
    alt: "Hair Serum"
  },
  {
    id: 4,
    name: "Premium Hair Serum",
    description: "Professional-grade serum with argan oil and vitamin E.",
    price: "$39.99",
    image: "./public/assets/hairSerum.jpg",
    alt: "Premium Hair Serum"
  },
  {
    id: 5,
    name: "Pre-Wax Treatment",
    description: "Styling treatment for hold and texture with natural movement.",
    price: "$27.99",
    image: "./public/assets/prewax.jpg",
    alt: "Pre-Wax Treatment"
  },
  {
    id: 6,
    name: "Professional Styling Wax",
    description: "Professional wax with strong hold and matte finish.",
    price: "$32.99",
    image: "./public/assets/waxing.jpg",
    alt: "Styling Wax"
  }
];

// Product Card Component
const ProductCard = ({ product }) => {
  return (
    <div className="group relative">
      <div 
        className="bg-black/20 rounded-2xl shadow-2xl p-6 transform  transition-all duration-500 hover:shadow-3xl cursor-pointer"
        style={{
          boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
          border: '1px solid rgba(255,255,255,0.2)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
          e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.1)';
        }}
      >
        <div className="w-full h-68 mb-4 overflow-hidden rounded-xl">
          <img 
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{ minWidth: '100%', minHeight: '100%' }}
          />
        </div>
        <h4 className="text-xl font-bold mb-2" style={{ color: '#6B9080' }}>
          {product.name}
        </h4>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {product.description}
        </p>
        <button 
          className="w-full py-2 px-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105"
          style={{ 
            backgroundColor: '#EEC6CA',
            color: '#6B9080'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#FFB7C3';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#EEC6CA';
          }}
        >
          Buy Now - {product.price}
        </button>
      </div>
    </div>
  );
};

const Offerings = () => {
  return (
    <section
      id="offerings"
      className="min-h-screen w-full py-16 px-6  bg-gradient-to-b from-[#DED6D1]  via-[#FFB7C3] to-[#A4C3B2]"
      style={{ 
        
        fontFamily: 'Roboto, sans-serif'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-4xl font-bold mb-4 text-white"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            Our Hair Care Products
          </h2>
          <p className="text-lg text-white/90 max-w-xl mx-auto">
            Premium hair care solutions with natural ingredients.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {productsData.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Offerings