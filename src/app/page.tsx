import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/60 border-b border-black/30 shadow-sm">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-xl tracking-tight text-gray-800">
              okgg
            </span>
          </div>
          <nav className="flex gap-6">
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              News
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Events
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Results
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Ranking
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Matchmaking
            </a>
          </nav>
          <div>
            <a
              href="/login"
              className="px-4 py-1 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
            >
              Login
            </a>
            {/* 
            <div className="flex items-center gap-2">
              <Image src="/avatar.jpg" alt="Avatar" width={32} height={32} className="rounded-full" />
              <span className="font-medium text-gray-800">Username</span>
            </div>
            */}
          </div>
        </div>
      </header>

      {/* Layout with Sidebars */}
      <div className="relative flex min-h-screen">
        {/* Left Sidebar */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 flex flex-col gap-4 p-4 backdrop-blur-md bg-black/70 border-r border-black/30 shadow-lg z-40">
          {/* News Section */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-bold text-lg mb-2 text-blue-700">News</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  All News
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  CS2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Dota 2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Valorant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-600 transition"
                >
                  Other
                </a>
              </li>
            </ul>
          </div>
          {/* Twitter Feed */}
          <div className="flex-1 flex flex-col mt-4">
            <h2 className="font-bold text-lg mb-2 text-blue-700">Twitter</h2>
            <div className="bg-white/80 rounded-lg p-2 h-40 flex items-center justify-center text-gray-400 text-sm">
              {/* Здесь вставьте виджет Twitter или заглушку */}
              Twitter Feed
            </div>
          </div>
        </aside>

        {/* Right Sidebar */}
        <aside className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 flex flex-col gap-4 p-4 backdrop-blur-md bg-black/70 border-l border-black/30 shadow-lg z-40">
          {/* Live Matches */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-bold text-lg mb-2 text-green-700">
              Live Matches
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between">
                <span>Team A vs Team B</span>
                <span className="text-xs text-gray-500">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>Team C vs Team D</span>
                <span className="text-xs text-gray-500">LIVE</span>
              </li>
            </ul>
          </div>
          {/* Betting Odds */}
          <div className="flex-1 flex flex-col mt-4">
            <h2 className="font-bold text-lg mb-2 text-purple-700">
              Betting Odds
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between">
                <span>Team A</span>
                <span className="font-bold text-blue-700">1.85</span>
              </li>
              <li className="flex justify-between">
                <span>Team B</span>
                <span className="font-bold text-blue-700">2.10</span>
              </li>
            </ul>
            <div className="text-xs text-gray-400 mt-2">Partner: BetNow</div>
          </div>
          {/* Ranking */}
          <div className="flex-1 flex flex-col mt-4">
            <h2 className="font-bold text-lg mb-2 text-yellow-700">Ranking</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Team Alpha</li>
              <li>Team Bravo</li>
              <li>Team Charlie</li>
            </ol>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 mx-auto px-4 py-8 max-w-3xl w-full z-10"
          style={{
            marginLeft: '16rem',
            marginRight: '18rem',
            background: '#fff',
            borderRadius: '1rem',
            minHeight: '80vh',
          }}
        >
          {/* Главная новость */}
          <a
            href="/news/1"
            className="block relative w-full h-64 rounded-xl overflow-hidden shadow-lg mb-8 group"
            style={{ minHeight: 260 }}
          >
            <Image
              src="/main-news.jpg"
              alt="Main News"
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-y-0 right-0 w-2/3 bg-gradient-to-l from-black/80 to-transparent flex items-center">
              <h2 className="text-white text-2xl md:text-3xl font-bold px-8 py-4">
                Главная новость дня: Большой турнир стартует сегодня!
              </h2>
            </div>
          </a>

          {/* Сетка новостей */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((id) => (
              <a
                key={id}
                href={`/news/${id + 1}`}
                className="relative rounded-lg overflow-hidden shadow-md group h-48 flex"
              >
                <Image
                  src={`/news${id + 1}.jpg`}
                  alt={`News ${id + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <h3 className="text-white text-lg font-semibold">
                    Заголовок новости {id + 1}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>
    </>
  )
}
