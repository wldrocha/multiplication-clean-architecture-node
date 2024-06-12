import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

export const yarg = yargs(process.argv)
  .option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplication table base'
  })

  .option('l', {
    alias: 'list',
    type: 'number',
    default: 10,
    describe: 'MUltiplication table limit'
  })
  .option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Show the multiplication table'
  })
  .check((argv, options) => {
    if (argv.b < 1) throw 'The base must be greater than 0'
    return true
  })
  .parseSync()
