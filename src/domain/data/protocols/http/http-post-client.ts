export type HttpPostParams = {
  url: string
}

export interface HttpPostClient {
  post (post: HttpPostParams): Promise<void>
}
