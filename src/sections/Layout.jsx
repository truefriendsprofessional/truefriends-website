import Spline2 from '../components/Spline2';
import Spele from '../components/SplineComponent';

const Layout = () => {
  return (
    <div className="relative w-full h-[200vh]">
      {/* Fixed background */}
      <div className="fixed inset-0 z-0">
        <Spele />
      </div>

      {/* Scrolling content starts BELOW the first viewport */}
      <div className="relative mt-screen flex flex-col items-center justify-center min-h-screen bg-white/80">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">Welcome to True Friends</h1>
        <p className="text-lg text-gray-700 mb-8">Connecting people through shared experiences</p>
      <div>
        <Spline2 />
      </div>
        <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Layout;
