import { instance } from './instance'
import type { TRequestParams } from './types'

export function getAll<T>(url : string, params?: TRequestParams) {
  return instance.get<T>(`${url}`, {params})
}

export function getSingleProduct<T>(id: number, params?: TRequestParams) {
  return instance.get<T>(`/${id}`, {params})
}