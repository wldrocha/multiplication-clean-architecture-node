import fs from 'fs'
import { yarg } from './config'

const { b: base, l: limit, s: isShowTable } = yarg

const message: string = 'Hello, TypeScript!'

console.log(message)

let outputMessage: string = ''

const headerMultiplication = `
=================================
            Tabla del ${base}
=================================
`

for (let i = 1; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}

const finalMessage = headerMultiplication + outputMessage
if (isShowTable) {
  console.log('🚀 ~ finalMessage:', finalMessage)
}

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, finalMessage)
