'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link' 

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-black/70 border-b border-black/30 shadow-sm text-white font-semibold tracking-wide">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <Link href="/">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-bold">ok</span>
              </div>
              <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                gg
              </span>
            </div>
          </div>
        </Link>
        <nav className="flex gap-6">
          {['News', 'Events', 'Results', 'Ranking', 'Matchmaking'].map(
            (item) => (
              <a
                key={item}
                href={`${item.toLowerCase()}`}
                className="hover:text-blue-400 transition drop-shadow"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div>
          {session ? (
            <div className="flex items-center gap-4">
              <img
                src={session.user?.image!}
                className="w-8 h-8 rounded-full"
                alt="Steam avatar"
              />
              <button
                onClick={() => signOut()}
                className="px-4 py-1 bg-red-500 text-white hover:bg-red-600 transition rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => signIn('steam')}
              className="px-4 py-1 bg-blue-500 text-white hover:bg-blue-600 transition rounded"
            >
              <img
                src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/steamworks_docs/english/sits_large_noborder.png"
                className="h-6 inline-block mr-2"
                alt="Steam logo"
              />
              Login via Steam
            </button>
          )}
        </div>
      </div>
    </header>
  )
}
