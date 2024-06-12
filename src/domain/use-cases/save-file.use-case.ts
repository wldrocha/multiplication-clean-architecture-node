import fs from 'fs'

// how to functionally my use case

export interface SaveFileUseCase {
  execute: (options: Options) => boolean
}

export interface Options {
  fileContent: string
  destination?: string
  fileName?: string
}

export class SaveFile implements SaveFileUseCase {
  constructor() {}
  execute({ fileContent, destination = 'outputs', fileName = 'table.txt' }: Options) {
    try {
      fs.mkdirSync(destination, { recursive: true })

      fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent)
      return true
    } catch (error) {
      console.error('Error saving file', error)
      return false
    }
  }
}
