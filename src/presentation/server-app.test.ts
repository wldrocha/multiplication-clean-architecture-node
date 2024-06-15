import { CreateTable, SaveFile } from '../domain'
import { ServerApp } from './server-app'

describe('ServerApp', () => {
  const options = {
    base: 2,
    limit: 10,
    isShowTable: true,
    fileName: 'test-name',
    fileDestination: 'test-destination'
  }

  test('should create serverApp instance', () => {
    const serverApp = new ServerApp()

    expect(serverApp).toBeInstanceOf(ServerApp)
    expect(typeof ServerApp.run).toBe('function')
  })

  test('should run serverApp with options', () => {
    // const logSpy = jest.spyOn(console, 'log')
    // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute')
    // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')
    // ServerApp.run(options)
    // expect(logSpy).toHaveBeenCalledTimes(3)
    // expect(logSpy).toHaveBeenCalledWith('🚀 Server is running...')
    // expect(logSpy).toHaveBeenCalledWith('File created!')
    // expect(createTableSpy).toHaveBeenCalledTimes(1)
    // expect(createTableSpy).toHaveBeenCalledWith({ base: 2, limit: 10 })
    // expect(saveFileSpy).toHaveBeenCalledTimes(1)
    // expect(saveFileSpy).toHaveBeenCalledWith({
    //   fileContent: expect.any(String),
    //   fileDestination: 'test-destination',
    //   fileName: 'test-name'
    // })
    // expect
  })

  test('should run with custom values mocked', () => {
    const logMock = jest.fn()
    const logErrorMock = jest.fn()
    const createdMock = jest.fn().mockReturnValue('1 x 2 = 2')
    const saveFileMock = jest.fn().mockReturnValue(true)

    global.console.error = logErrorMock
    global.console.log = logMock
    CreateTable.prototype.execute = createdMock
    SaveFile.prototype.execute = saveFileMock

    ServerApp.run(options)

    expect(logMock).toHaveBeenCalledWith('🚀 Server is running...')

    expect(createdMock).toHaveBeenCalledWith({ base: 2, limit: 10 })
    expect(saveFileMock).toHaveBeenCalledWith({
      fileContent: '1 x 2 = 2',
      fileDestination: options.fileDestination,
      fileName: options.fileName
    })
    expect(logMock).toHaveBeenCalledWith('File created!')
  })
})
