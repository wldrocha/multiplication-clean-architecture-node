import { yarg } from './config'
import { ServerApp } from './presentation'

(async () => {
  await main()
})()

async function main() {
  const { b: base, l: limit, s: isShowTable } = yarg

  ServerApp.run({ base, limit, isShowTable })
}
