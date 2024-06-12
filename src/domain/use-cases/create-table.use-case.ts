// bussiness rules
interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string
}

export interface CreateTableOptions {
  base: number
  limit?: number
}

export class CreateTable implements CreateTableUseCase {
  constructor() {}
  // could be named execute, run, start, etc
  execute({ base, limit = 10 }: CreateTableOptions) {
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
    return finalMessage
  }
}
