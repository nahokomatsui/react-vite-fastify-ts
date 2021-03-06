/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** Default Response */
    resBody: {
      articles: {
        id: string
        title: string
        tags?: (Partial<'hoge' & 'fuga'>)[]
      }[]
    }
  }

  post: {
    status: 200

    reqBody: {
      title: string
      tags?: (Partial<'hoge' & 'fuga'>)[]
    }
  }
}
