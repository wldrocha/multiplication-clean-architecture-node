import { yarg } from './config'
import { ServerApp } from './presentation'
;(async () => {
  await main()
})()

async function main() {
  const { b: base, l: limit, s: isShowTable, n: fileName, d: fileDestination } = yarg

  ServerApp.run({
    base,
    limit,
    isShowTable,
    fileName,
    fileDestination
  })
}
