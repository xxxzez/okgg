// src/components/MainNews.tsx

import Image from 'next/image'

const MainNews = () => {
  return (
    <a
      href="/news/1"
      className="block relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-8 group"
      style={{ minHeight: 260 }}
    >
      <Image
        src="/faze.jpg"
        alt="Main News"
        fill
        style={{ objectFit: 'cover' }}
        className="transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-black/80 to-transparent flex items-center">
        <h2 className="text-white text-2xl md:text-3xl font-bold px-8 py-4 drop-shadow">
          S1MPLE ON TOP AS FAZE ELIMINATE BC.GAME
        </h2>
      </div>
    </a>
  )
}

export default MainNews
