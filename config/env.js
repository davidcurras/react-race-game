// @flow

export type EnvState = {

  NODE_ENV: string,

  API_URL: string,
  ROOT_URL: string,
  SECURE_COOKIE: boolean,
  SHOW_ERRORS: boolean,

}


// Grab from env vars if they are set
const {

  NODE_ENV,

  API_URL,
  ROOT_URL,
  SECURE_COOKIE,
  SHOW_ERRORS,

} = process.env


// Set defaults
const env: EnvState = {

  // Since NODE_ENV is automatically used by many plugins, we can't ensure it
  // will produce dev/prod parity by itself. Consequently, we need to use
  // separate ENVs for apps.
  NODE_ENV: NODE_ENV || 'production',

  // App settings
  API_URL: API_URL || 'https://api.randomuser.me',
  ROOT_URL: ROOT_URL || 'http://localhost:3000',
  SECURE_COOKIE: SECURE_COOKIE === 'true' || false,
  SHOW_ERRORS: SHOW_ERRORS === 'true' || true,

}


export const isBrowser = (): boolean => {

  return Boolean(typeof window !== 'undefined' && window.document)

}


export default env
