import React from 'react'

const Card = () => {
  return (
     <div className="bg-[#6c65650f] max-w-sm backdrop-blur-md rounded-2xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-purple-900">
    <img
      className="w-full h-48 object-cover"
      src="https://media.istockphoto.com/id/1370772148/photo/track-and-mountains-in-valle-del-lago-somiedo-nature-park-asturias-spain.jpg?s=612x612&w=0&k=20&c=QJn62amhOddkJSbihcjWKHXShMAfcKM0hPN65aCloco="
      alt="Project Image"
    />
    <div className="p-4 space-y-2">
      <h1 className="text-white font-bold text-xl">Project Title</h1>
      <p className="text-gray-300 text-sm">
        A brief description of the project goes here. Make it clear and catchy.
      </p>
      <div className="flex justify-between items-center mt-3">
        <a
          href="#"
          className="text-sm text-purple-400 hover:underline hover:text-purple-300"
        >
          View Demo
        </a>
        <a
          href="#"
          className="text-sm text-purple-400 hover:underline hover:text-purple-300"
        >
          GitHub →
        </a>
      </div>
    </div>
  </div>
  )
}

export default Card
