/* eslint-disable */
export type Methods = {
  post: {
    status: 200

    reqBody: {
      id: string
      title: string
      tags?: (Partial<'hoge' & 'fuga'>)[]
    }
  }
}
