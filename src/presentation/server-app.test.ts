import { CreateTable, SaveFile } from '../domain'
import { ServerApp } from './server-app'

describe('ServerApp', () => {
  test('should create serverApp instance', () => {
    const serverApp = new ServerApp()

    expect(serverApp).toBeInstanceOf(ServerApp)
    expect(typeof ServerApp.run).toBe('function')
  })

  test('should run serverApp with options', () => {
    const logSpy = jest.spyOn(console, 'log')
    const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute')
    const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')
    const options = {
      base: 2,
      limit: 10,
      isShowTable: true,
      fileName: 'test-name',
      fileDestination: 'test-destination'
    }
    ServerApp.run(options)

    expect(logSpy).toHaveBeenCalledTimes(3)
    expect(logSpy).toHaveBeenCalledWith('🚀 Server is running...')
    expect(logSpy).toHaveBeenCalledWith('File created!')
    expect(createTableSpy).toHaveBeenCalledTimes(1)
    expect(createTableSpy).toHaveBeenCalledWith({ base: 2, limit: 10 })
    expect(saveFileSpy).toHaveBeenCalledTimes(1)


    // expect
  })
})
