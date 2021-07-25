export type HttpPostParams = {
  url: string
  body?: object
}

export interface HttpPostClient {
  post (post: HttpPostParams): Promise<void>
}
