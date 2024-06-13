import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {
  const saveFile = new SaveFile()

  const options = {
    fileContent: 'Custom content',
    fileDestination: 'custom-outputs',
    fileName: 'custom-table-name'
  }
  const filePath = `${options.fileDestination}/${options.fileName}.txt`

  afterEach(() => {
    const isOutputsExist = fs.existsSync('outputs')
    if (isOutputsExist) fs.rmSync('outputs', { recursive: true })
  })
  test('should save file with default values', () => {
    const filePath = 'outputs/table.txt'
    const options = {
      fileContent: 'Hello World, this is a test'
    }

    const result = saveFile.execute(options)
    const isFileExist = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    expect(result).toBe(true)
    expect(isFileExist).toBe(true)
    expect(fileContent).toBe(options.fileContent)
  })

  test('should save file with custom values', () => {
    const result = saveFile.execute(options)
    const isFileExist = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    expect(result).toBe(true)
    expect(isFileExist).toBe(true)
    expect(fileContent).toBe(options.fileContent)
    fs.rmSync(options.fileDestination, { recursive: true })
  })
})
