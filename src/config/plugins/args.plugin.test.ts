const originalArgv = process.argv

const runCommand = async (args: string[]) => {
  process.argv = [...process.argv, ...args]

  const { yarg } = await import('./args.plugin')
  return yarg
}

describe('ArgsPlugin', () => {
  beforeEach(() => {
    process.argv = originalArgv
    jest.resetModules()
  })
  test('should return default values', async () => {
    const argv = await runCommand(['-b', '5'])

    expect(argv).toEqual(
      expect.objectContaining({
        b: 5,
        l: 10,
        s: false,
        n: 'table',
        d: 'outputs'
      })
    )
  })


})
