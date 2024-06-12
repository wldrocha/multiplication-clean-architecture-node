import fs from 'fs'

const message: string = 'Hello, TypeScript!'

console.log(message)

let outputMessage: string = ''

const base = 5
const headerMultiplication = `
=================================
            Tabla del ${base}
=================================
`

for (let i = 1; i <= 10; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`
}

const finalMessage = headerMultiplication + outputMessage
console.log('🚀 ~ finalMessage:', finalMessage)

const outputPath = `outputs`

fs.mkdirSync(outputPath, { recursive: true })

fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, finalMessage)
