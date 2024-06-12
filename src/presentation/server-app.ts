import { CreateTable, SaveFile } from '../domain'

interface RunOptions {
  base: number
  limit: number
  isShowTable: boolean
}

export class ServerApp {
  static run({ base, limit, isShowTable }: RunOptions) {
    console.log('🚀 Server is runnning...')

    const table = new CreateTable().execute({
      base,
      limit
    })
    const wasCreated = new SaveFile().execute({
      fileContent: table,
      destination: `outputs/table-${base}`
    })
    if (isShowTable) {
      console.log(table)
    }
    wasCreated ? console.log('File created!') : console.error('File not created!')
  }
}
