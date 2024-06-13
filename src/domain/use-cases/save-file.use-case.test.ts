import fs from 'fs'
import { SaveFile } from './save-file.use-case'

describe('SaveFileUseCase', () => {
  const saveFile = new SaveFile()

  const customOptions = {
    fileContent: 'Custom content',
    fileDestination: 'custom-outputs',
    fileName: 'custom-table-name'
  }
  const filePath = `${customOptions.fileDestination}/${customOptions.fileName}.txt`

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
    const result = saveFile.execute(customOptions)
    const isFileExist = fs.existsSync(filePath)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })

    expect(result).toBe(true)
    expect(isFileExist).toBe(true)
    expect(fileContent).toBe(customOptions.fileContent)
    fs.rmSync(customOptions.fileDestination, { recursive: true })
  })

  test('should return false when directory could not be created', () => {
    // overwrite the mkdirSync method to throw an error
    const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => {
      throw new Error('Error creating directory')
    })

    const result = saveFile.execute(customOptions)
    expect(result).toBeFalsy()

    //restore the original method
    mkdirSpy.mockRestore()
  })
  test('should return false when file could not be created', () => {
    // overwrite the mkdirSync method to throw an error
    const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => {
      throw new Error('Error creating file')
    })
    const result = saveFile.execute({ fileContent: 'Hello' })
    expect(result).toBeFalsy()

    //restore the original method
    writeFileSpy.mockRestore()
  })
})
