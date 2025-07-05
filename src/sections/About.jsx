import React from 'react'

const About = () => {
    return (
        <div>
            {/* very long about section */}
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-indigo-600 mb-4">About True Friends</h1>
                <p className="text-lg text-gray-700 mb-8">
                    True Friends is a platform dedicated to connecting people through shared experiences and meaningful interactions.
                    Our mission is to foster genuine friendships and create a supportive community where everyone feels valued and included.
                </p>
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-300">
                    Learn More
                </button>

            </div>
        </div>
    )
}

export default About