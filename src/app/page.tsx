import SidebarLeft from '@/components/SidebarLeft'
import SidebarRight from '@/components/SidebarRight'
import NewsGrid from '@/components/NewsGrid'
import MainNews from '@/components/MainNews'

export default function Home() {
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
