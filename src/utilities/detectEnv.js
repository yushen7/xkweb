const isPro = Object.is(process.env.NODE_ENV, 'production')

export default {
  baseUrl: isPro ? 'http://kuoteo.com/api' : '/api',
  prefixUrl: isPro ? '' : ''
}
