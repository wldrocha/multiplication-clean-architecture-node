import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {
  afterEach(() => {
    fs.rmSync('outputs', { recursive: true })
  })
  test('should save file with default values', () => {
    const saveFile = new SaveFile()
    const filePath = 'outputs/table.txt'
    const options = {
      fileContent: 'Hello World, this is a test'
    }

    const isFileExist = fs.existsSync(filePath)

    const result = saveFile.execute(options)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    expect(result).toBe(true)
    expect(isFileExist).toBe(true)
    expect(fileContent).toBe(options.fileContent)
  })
})
