import { CreateTable } from './create-table.use-case'

describe('createTableUseCase', () => {
  test('should create table with default values', () => {
    const base = 2
    const createTable = new CreateTable()

    const table = createTable.execute({ base })
    const rows = table.split('\n')

    expect(createTable).toBeInstanceOf(CreateTable)
    expect(table).toContain('2 x 1 = 2')
    expect(rows.length).toBe(10)
  })

  test('should create table with custom limit', () => {
    const createTable = new CreateTable()

    const options = { base: 4, limit: 20 }

    const table = createTable.execute(options)
    const rows = table.split('\n').length
    expect(rows).toBe(options.limit)
    expect(table).toContain('4 x 11 = 44')
    expect(table).toContain('4 x 20 = 80')
  })
})
