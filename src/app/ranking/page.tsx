'use client'

import Image from 'next/image'

const teams = [
  {
    rank: 1,
    name: 'Vitality',
    logo: '/vitality.png',
    players: ['apEX', 'ropz', 'ZywOo', 'flameZ', 'mezii'],
    points: 1000,
  },
  {
    rank: 2,
    name: 'Spirit',
    logo: '/spirit.png',
    players: ['chopper', 'sh1ro', 'magixx', 'zont1x', 'donk'],
    points: 562,
  },
  {
    rank: 3,
    name: 'MOUZ',
    logo: '/mouz.png',
    players: ['Brollan', 'torzsi', 'Spinx', 'Jimpphat', 'xertioN'],
    points: 530,
  },
  {
    rank: 4,
    name: 'Falcons',
    logo: '/falcons.png',
    players: ['NiKo', 'Magisk', 'TeSeS', 'm0NESY', 'kyxsan'],
    points: 403,
  },
  {
    rank: 5,
    name: 'Natus Vincere',
    logo: '/navi.png',
    players: ['Aleksib', 'iM', 'b1t', 'jL', 'w0nderful'],
    points: 363,
  },
  {
    rank: 6,
    name: 'Aurora',
    logo: '/aurora.png',
    players: ['MAJ3R', 'XANTARES', 'woxic', 'Wicadia', 'jottAAA'],
    points: 348,
  },
  {
    rank: 7,
    name: 'The MongolZ',
    logo: '/mongolz.png',
    players: ['bLitz', 'Techno', 'Senzu', 'mzinho', '910'],
    points: 335,
  },
  {
    rank: 8,
    name: 'G2',
    logo: '/g2.png',
    players: ['Snax', 'huNter-', 'malbsMd', 'hades', 'HeavyGod'],
    points: 286,
  },
  {
    rank: 9,
    name: 'FaZe',
    logo: '/faze.png',
    players: ['rain', 'karrigan', 'broky', 'ropz', 'jks'],
    points: 270,
  },
  {
    rank: 10,
    name: 'Heroic',
    logo: '/heroic.png',
    players: ['cadiaN', 'stavn', 'TeSeS', 'sjuush', 'k0nfig'],
    points: 250,
  },
  // Добавьте остальные команды по аналогии
]

export default function RankingPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <h1 className="text-4xl text-center py-8 font-bold">
        Топ-10 команд HLTV (май 2025)
      </h1>
      <div className="max-w-7xl mx-auto px-4">
        {teams.map((team) => (
          <div
            key={team.rank}
            className="flex items-center justify-between py-4 border-b border-gray-300"
          >
            <div className="flex items-center gap-4">
              <span className="text-xl font-semibold">{team.rank}.</span>
              <Image
                src={team.logo}
                alt={team.name}
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-lg">{team.name}</span>
            </div>
            <div>
              <span className="text-sm text-gray-500">{team.points} очков</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
