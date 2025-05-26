'use client'

import SidebarLeft from '@/components/SidebarLeft'
import SidebarRight from '@/components/SidebarRight'
import Header from '@/components/Header'
import NewsGrid from '@/components/NewsGrid'
import MainNews from '@/components/MainNews'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center bg-transparent">
        <SidebarLeft />
        <SidebarRight />
        <main
          className="mx-auto px-4 py-8 w-full max-w-3xl z-10"
          style={{
            minHeight: '80vh',
            marginLeft: '16rem',
            marginRight: '18rem',
          }}
        >
          <MainNews />
          <NewsGrid />
        </main>
      </div>
    </>
  )
}
