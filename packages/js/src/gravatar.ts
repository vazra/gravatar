import md5 from 'md5'

type IProtocol = 'http' | 'https'
const BASE_URL = '://www.gravatar.com/avatar/'

// when a protocol is not provided check. If the code is running in a browser with https protocol use 'https', else use 'http'
const getProtocol = (protocol?: IProtocol) => {
  if (protocol) return protocol
  if (window && window.location && (window.location.protocol === 'http' || window.location.protocol === 'https')) return window.location.protocol
  return 'http'
}

function getQueryStringWithOptions(options: IOptions) {
  const { size, defaultImage } = options
  let queryString = '?'
  if (size) queryString += `s=${size}&`
  if (defaultImage) queryString += `d=${defaultImage}&`
  if (queryString.endsWith('&') || queryString.endsWith('?')) {
    return queryString.substr(0, queryString.length - 1)
  }
  return queryString
}

type IOptions = {
  email: string
  md5Hash?: string // md5 hash or email is necessory, if md5Hash is given it will give first pref
  protocol?: IProtocol
  size: number // this should be between 1 & 2048
  defaultImage: '404' | 'mp' | 'identicon' | 'monsterid' | 'wavatar' | 'retro' | 'robohash' | 'blank'
}
export function Gravatar(options: IOptions) {
  const emailHash = options.md5Hash || md5(options.email.trim().toLowerCase())
  const urlProtocol = getProtocol(options.protocol)
  const queryString = getQueryStringWithOptions(options)
  return `${urlProtocol}${BASE_URL}${emailHash}${queryString}`
}
