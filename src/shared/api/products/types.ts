import type { IStringIdx } from '@/shared/lib/types/object'
export type TRequestParams = IStringIdx;

export interface IBaseQuery extends TRequestParams {
  sort?: string,
  limit?: number,
}

export type TExtraQuery<T extends IStringIdx> = IBaseQuery & T;

export interface IBaseGetResponse {
  sort: string,
  limit: number,
}