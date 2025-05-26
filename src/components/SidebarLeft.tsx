export default function SidebarLeft() {
  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 flex flex-col gap-4 p-4 backdrop-blur-md bg-white/80 border-r border-black/10 shadow-lg z-40 text-gray-900 font-semibold tracking-wide">
      {/* News Section */}
      <div className="flex-1 flex flex-col">
        <h2 className="font-bold text-lg mb-2 text-blue-700">News</h2>
        <ul className="flex flex-col gap-2">
          {['All News', 'CS2', 'Dota 2', 'Valorant', 'Other'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="text-gray-900 hover:text-blue-500 transition font-medium"
              >
                {item}
              </a>
            </li>
          ))}
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
  )
}
