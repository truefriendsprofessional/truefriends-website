import React from 'react'
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <>
            {/*make grid of 4 boxes on whole page  */}
            <div className="grid grid-cols-2 gap-4 h-screen">
                <div className="bg-blue-500 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">    
                        <Spline scene="https://prod.spline.design/WboYPPqRLGNoqHQT/scene.splinecode" />
                    </h1>
                </div>
                <div className="bg-green-500 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">      
                        <Spline scene="https://prod.spline.design/RVcQNlgrPushAqQ2/scene.splinecode" />
                    </h1>
                </div>
                <div className="bg-red-500 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Box 3</h1>
                </div>
                <div className="bg-yellow-500 flex items-center justify-center">
                    <h1 className="text-white text-3xl font-bold">Box 4</h1>
                </div>
            </div>

        </>
    )
}

export default Hero