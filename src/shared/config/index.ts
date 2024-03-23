export const PRODUCTS_BASE_URL = getEnvVar('VITE_APP_PRODUCTS_API_URL')

function getEnvVar(key: string) {
  const envVar = import.meta.env[key]
  if (envVar === undefined) {
    throw new Error(`Env variable ${key} is required`)
  }
  return envVar
}