import NextAuth from 'next-auth'
import SteamProvider from '@/lib/steam-provider'

const handler = NextAuth({
  providers: [SteamProvider()],
  callbacks: {
    async jwt({ token, profile }) {
      if (profile) {
        token.id = profile.steamid
        token.avatar = profile.avatarfull
      }
      return token
    },
    async session({ session, token }) {
      session.user.id = token.id
      session.user.image = token.avatar
      return session
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET, handler as POST }
