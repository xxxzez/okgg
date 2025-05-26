export default function SidebarRight() {
  return (
    <aside className="fixed top-16 right-0 h-[calc(100vh-4rem)] w-72 flex flex-col gap-4 p-4 backdrop-blur-md bg-white/80 border-l border-black/10 shadow-lg z-40 text-gray-900 font-semibold tracking-wide">
      {/* Live Matches */}
      <div className="flex-1 flex flex-col">
        <h2 className="text-lg mb-2 text-green-700">Live Matches</h2>
        <ul className="flex flex-col gap-2">
          {[
            'NAVI vs CARDAN',
            'NAVI vs CARDAN',
            'NAVI vs CARDAN',
            'NAVI vs CARDAN',
            'NAVI vs CARDAN',
            'VITALITY vs MOUSESPORTS',
          ].map((match, index) => (
            <li key={index} className="flex justify-between">
              <span>{match}</span>
              <span className="text-xs text-green-600 ">LIVE</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Betting Odds */}
      <div className="flex-1 flex flex-col mt-4">
        <h2 className="text-lg mb-2 text-purple-700">Betting Odds</h2>
        <ul className="flex flex-col gap-2">
          {Array(6)
            .fill({ team: 'Team B', odds: '2.10' })
            .map((bet, index) => (
              <li key={index} className="flex justify-between">
                <span>{bet.team}</span>
                <span className="text-blue-700">{bet.odds}</span>
              </li>
            ))}
        </ul>
        <div className="text-xs text-gray-400 mt-2">Partner: BetNow</div>
      </div>

      {/* Ranking */}
      <div className="flex-1 flex flex-col mt-4">
        <h2 className="text-lg mb-2 text-yellow-700">Ranking</h2>
        <ol className="list-decimal list-inside text-gray-700">
          {[
            'NAVI',
            'FAZE CLAN',
            'CARDAN TEAM',
            'TOMMY TEAM',
            'IGOR TEAM',
            'VITALITY TEAM',
            'MOUSESPORTS',
            'NEMIGA GAMING',
          ].map((team) => (
            <li key={team}>{team}</li>
          ))}
        </ol>
      </div>
    </aside>
  )
}
