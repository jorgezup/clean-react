import { HttpResponse } from './http-response'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<T, R> {
  post (post: HttpPostParams<T>): Promise<HttpResponse<R>>
}
