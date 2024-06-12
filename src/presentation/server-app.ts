interface RunOptions {
  base: number
  limit: number
  isShowTable: boolean
}

export class ServerApp {
  static run(options: RunOptions) {
    console.log("🚀 ~ ServerApp ~ run ~ options:", options)
    console.log('🚀 Server is runnning...')
  }
}
