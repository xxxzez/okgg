// src/components/NewsGrid.tsx

import Image from 'next/image'

const newsData = [
  {
    id: 1,
    title: 'S1MPLE ON TOP AS FAZE ELIMINATE BC.GAME',
    image: '/faze.jpg',
  },
  {
    id: 2,
    title: 'Spirit clinch PGL Astana trophy after 3-1 final against Astralis',
    image: '/news2.jpg',
  },
  {
    id: 3,
    title: 'New CS2 update changes gameplay dynamics',
    image: '/news3.jpg',
  },
  {
    id: 4,
    title: 'The Rise of Dota 2 in the competitive scene',
    image: '/news4.jpg',
  },
]

const NewsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {newsData.map((news) => (
        <a
          key={news.id}
          href={`/news/${news.id}`}
          className="relative rounded-lg overflow-hidden shadow-md group h-48 flex"
        >
          <Image
            src={news.image}
            alt={`News ${news.id}`}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
            <h3 className="text-white text-lg font-semibold drop-shadow">
              {news.title}
            </h3>
          </div>
        </a>
      ))}
    </div>
  )
}

export default NewsGrid
