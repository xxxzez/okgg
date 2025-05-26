import type { OAuthConfig, Profile } from 'next-auth/providers'

const SteamProvider = (): OAuthConfig<Profile> => {
  return {
    id: 'steam',
    name: 'Steam',
    type: 'oauth',
    version: '2.0',
    idToken: false,
    checks: ['none'],
    authorization: {
      url: 'https://steamcommunity.com/openid/login',
      params: {
        'openid.ns': 'http://specs.openid.net/auth/2.0',
        'openid.mode': 'checkid_setup',
        'openid.return_to': `${process.env.NEXTAUTH_URL}/api/auth/callback/steam`,
        'openid.realm': process.env.NEXTAUTH_URL,
        'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
        'openid.claimed_id':
          'http://specs.openid.net/auth/2.0/identifier_select',
      },
    },
    clientId: '', // не нужен
    clientSecret: '', // не нужен
    profile(profile) {
      return {
        id: profile.steamid,
        name: profile.personaname,
        image: profile.avatarfull,
        email: null,
      }
    },
  }
}

export default SteamProvider
