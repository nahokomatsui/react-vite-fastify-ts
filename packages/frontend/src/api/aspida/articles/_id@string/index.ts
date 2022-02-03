/* eslint-disable */
export type Methods = {
  get: {
    status: 200

    /** Default Response */
    resBody: {
      id: string
      title: string
      tags?: (Partial<'hoge' & 'fuga'>)[]
    }
  }
}
