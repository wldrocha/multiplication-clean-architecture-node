import { CreateTable } from '../domain'

interface RunOptions {
  base: number
  limit: number
  isShowTable: boolean
}

export class ServerApp {
  static run({ base, limit, isShowTable }: RunOptions) {
    console.log('🚀 Server is runnning...')

    const table = new CreateTable().execute({ base, limit })
    if (isShowTable) {
      console.log(table)
    }
  }
}
