import Image from 'next/image'

export default function Home() {
  return (
    <>
      {/* Sticky Glassmorphism Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-black/30 shadow-sm text-white font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              className="rounded"
            />
            <span className="font-bold text-xl tracking-tight text-white">
              okgg
            </span>
          </div>
          <nav className="flex gap-6">
            {['News', 'Events', 'Results', 'Ranking', 'Matchmaking'].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-white hover:text-blue-400 font-semibold transition drop-shadow"
                >
                  {item}
                </a>
              )
            )}
          </nav>
          <div>
            <a
              href="/login"
              className="px-4 py-1 rounded-xs bg-blue-500 text-white font-medium hover:bg-blue-600 transition"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Layout with Sidebars and Centered Main */}
      <div className="relative min-h-screen flex flex-col items-center bg-transparent">
        {/* Left Sidebar */}
        <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 flex flex-col gap-4 p-4 backdrop-blur-md bg-white/80 border-r border-black/10 shadow-lg z-40 text-gray-900 font-semibold tracking-wide">
          {/* News Section */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-bold text-lg mb-2 text-blue-700">News</h2>
            <ul className="flex flex-col gap-2">
              {['All News', 'CS2', 'Dota 2', 'Valorant', 'Other'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-900 hover:text-blue-500 transition font-medium"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Twitter Feed */}
          <div className="flex-1 flex flex-col mt-4">
            <h2 className="font-bold text-lg mb-2 text-blue-700">Twitter</h2>
            <div className="bg-gray-100 rounded-lg p-2 h-40 flex items-center justify-center text-gray-400 text-sm">
              Twitter Feed
            </div>
          </div>
        </aside>

        {/* Right Sidebar */}
        <aside className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 flex flex-col gap-4 p-4 backdrop-blur-md bg-white/80 border-l border-black/10 shadow-lg z-40 text-gray-900 font-semibold tracking-wide">
          {/* Live Matches */}
          <div className="flex-1 flex flex-col">
            <h2 className="font-bold text-lg mb-2 text-green-700">
              Live Matches
            </h2>
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between">
                <span>NAVI vs CARDAN</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>NAVI vs CARDAN</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>NAVI vs CARDAN</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>NAVI vs CARDAN</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>NAVI vs CARDAN</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
              </li>
              <li className="flex justify-between">
                <span>VITALITY vs MOUSESPORTS</span>
                <span className="text-xs text-green-600 font-bold">LIVE</span>
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
              <li className="flex justify-between">
                <span>Team B</span>
                <span className="font-bold text-blue-700">2.10</span>
              </li>
              <li className="flex justify-between">
                <span>Team B</span>
                <span className="font-bold text-blue-700">2.10</span>
              </li>
              <li className="flex justify-between">
                <span>Team B</span>
                <span className="font-bold text-blue-700">2.10</span>
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
              <li>NAVI</li>
              <li>FAZE CLAN</li>
              <li>CARDAN TEAM</li>
              <li>TOMMY TEAM</li>
              <li>IGOR TEAM</li>
              <li>VITALITY TEAM</li>
              <li>MOUSESPORTS</li>
              <li>NEMIGA GAMING</li>
            </ol>
          </div>
        </aside>

        {/* Main Content */}
        <main
          className="mx-auto px-4 py-8 w-full max-w-3xl z-10"
          style={{
            minHeight: '80vh',
            marginLeft: '16rem',
            marginRight: '18rem',
          }}
        >
          {/* Главная новость */}
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
                  // src={`/spirit.jpg`}
                  alt={`News ${id + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4">
                  <h3 className="text-white text-lg font-semibold drop-shadow">
                    Spirit clinch PGL Astana trophy after 3-1 final against
                    Astralis {id + 1}
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
