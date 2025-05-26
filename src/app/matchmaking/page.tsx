'use client'
import { useEffect, useState } from 'react'

interface Player {
  id: string
  name: string
  avatar: string
  isCaptain?: boolean
}

interface Map {
  name: string
  banned: boolean
}

interface Message {
  text: string
  sender: string
  team?: 'A' | 'B'
}

export default function MatchmakingPage() {
  const [lobbyPlayers, setLobbyPlayers] = useState<Player[]>([])
  const [captains, setCaptains] = useState<Player[]>([])
  const [teamA, setTeamA] = useState<Player[]>([])
  const [teamB, setTeamB] = useState<Player[]>([])
  const [maps, setMaps] = useState<Map[]>([
    { name: 'Dust II', banned: false },
    { name: 'Inferno', banned: false },
    { name: 'Mirage', banned: false },
    { name: 'Nuke', banned: false },
    { name: 'Overpass', banned: false },
  ])
  const [globalChat, setGlobalChat] = useState<Message[]>([])
  const [teamChat, setTeamChat] = useState<Message[]>([])
  const [messageInput, setMessageInput] = useState('')
  const [globalMessageInput, setGlobalMessageInput] = useState('')
  const [teamMessageInput, setTeamMessageInput] = useState('')

  // Mock players loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLobbyPlayers(
        Array(10)
          .fill(null)
          .map((_, i) => ({
            id: `player${i}`,
            name: `Player ${i + 1}`,
            avatar: `https://i.pravatar.cc/50?img=${i}`,
          }))
      )
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Select captains
  useEffect(() => {
    if (lobbyPlayers.length === 10 && captains.length === 0) {
      const shuffled = [...lobbyPlayers].sort(() => 0.5 - Math.random())
      setCaptains([shuffled[0], shuffled[1]])
    }
  }, [lobbyPlayers])

  const handleMapBan = (mapName: string) => {
    setMaps(maps.map((m) => (m.name === mapName ? { ...m, banned: true } : m)))
  }

  const handleSendMessage = (isGlobal: boolean) => {
    if (!messageInput.trim()) return

    const newMessage = {
      text: messageInput,
      sender: 'You',
      team: isGlobal ? undefined : 'A',
    }

    if (isGlobal) {
      setGlobalChat([...globalChat, newMessage])
    } else {
      setTeamChat([...teamChat, newMessage])
    }
    setMessageInput('')
  }

  return (
    <>
      <div className="min-h-screen bg-[#fafafa] text-[#333333]">
        <h1 className="text-4xl text-center py-8 font-extrabold text-blue-600">
          Lobby
        </h1>

        {/* Lobby Players Grid */}
        <div className="flex flex-wrap justify-center gap-4 p-4 max-w-4xl mx-auto">
          {Array(10)
            .fill(null)
            .map((_, i) => (
              <div
                key={i}
                className="w-20 h-20 rounded-full bg-white border-2 border-gray-300 
                  flex items-center justify-center overflow-hidden shadow-md"
              >
                {lobbyPlayers[i] ? (
                  <div className="relative">
                    <img
                      src={lobbyPlayers[i].avatar}
                      alt={lobbyPlayers[i].name}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                    {captains.some((c) => c.id === lobbyPlayers[i].id) && (
                      <div
                        className="absolute top-0 right-0 w-6 h-6 bg-yellow-400 
                      rounded-full flex items-center justify-center text-sm"
                      >
                        👑
                      </div>
                    )}
                  </div>
                ) : (
                  <span className="text-gray-500">Empty</span>
                )}
              </div>
            ))}
        </div>

        {/* Captain Selection Animation */}
        {captains.length > 0 && (
          <div className="text-center my-8 animate-pulse">
            <h2 className="text-2xl mb-4 text-green-500">Captains selected!</h2>
            <div className="flex justify-center gap-8">
              {captains.map((captain, i) => (
                <div key={captain.id} className="flex items-center gap-2">
                  <img
                    src={captain.avatar}
                    alt={captain.name}
                    className="w-12 h-12 rounded-full shadow-lg"
                  />
                  <span className="font-semibold text-lg">
                    Team {i === 0 ? 'A' : 'B'} Captain
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Teams Selection */}
        <div className="flex justify-center gap-8 my-8">
          <div className="w-96 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl text-blue-500 mb-4">Team A</h3>
            {teamA.map((player) => (
              <div
                key={player.id}
                className="flex items-center gap-2 p-2 bg-gray-100 mb-2 rounded shadow-sm"
              >
                <img src={player.avatar} className="w-8 h-8 rounded-full" />
                <span>{player.name}</span>
                {player.isCaptain && (
                  <span className="text-yellow-400">👑</span>
                )}
              </div>
            ))}
          </div>

          <div className="w-96 bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-2xl text-red-500 mb-4">Team B</h3>
            {teamB.map((player) => (
              <div
                key={player.id}
                className="flex items-center gap-2 p-2 bg-gray-100 mb-2 rounded shadow-sm"
              >
                <img src={player.avatar} className="w-8 h-8 rounded-full" />
                <span>{player.name}</span>
                {player.isCaptain && (
                  <span className="text-yellow-400">👑</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Map Banning */}
        <div className="max-w-4xl mx-auto my-8 p-4">
          <h2 className="text-2xl text-center mb-4 text-gray-700">
            Map Selection
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {maps.map((map) => (
              <button
                key={map.name}
                onClick={() => handleMapBan(map.name)}
                disabled={map.banned}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 
                ${
                  map.banned
                    ? 'bg-red-500 cursor-not-allowed'
                    : 'bg-blue-400 hover:bg-blue-500'
                }`}
              >
                {map.name} {map.banned && '❌'}
              </button>
            ))}
          </div>
        </div>

        {/* Chat System */}
        <div className="flex gap-8 max-w-6xl mx-auto p-4">
          <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
            <h3 className="text-xl mb-4 text-blue-500">Global Chat</h3>
            <div className="h-48 overflow-y-auto mb-4">
              {globalChat.map((msg, i) => (
                <div key={i} className="mb-2 text-gray-800">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={globalMessageInput}
                onChange={(e) => setGlobalMessageInput(e.target.value)}
                className="flex-1 bg-gray-100 rounded px-4 py-2 shadow-sm"
                placeholder="Type a message..."
              />
              <button
                onClick={() => handleSendMessage(true)}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded text-white"
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex-1 bg-white rounded-lg p-4 shadow-lg">
            <h3 className="text-xl mb-4 text-green-500">Team Chat</h3>
            <div className="h-48 overflow-y-auto mb-4">
              {teamChat.map((msg, i) => (
                <div key={i} className="mb-2 text-gray-800">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={teamMessageInput}
                onChange={(e) => setTeamMessageInput(e.target.value)}
                className="flex-1 bg-gray-100 rounded px-4 py-2 shadow-sm"
                placeholder="Type a team message..."
              />
              <button
                onClick={() => handleSendMessage(false)}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
