#! /usr/bin/env node

const { Command } = require('commander')

const program = new Command()
const pkg = require('../package.json')

program
  .name('project-starter-cli')
  .description('A CLI tool to generate project starter.')
  .version(pkg.version, '-v, --version')

program.command('split')
  .description('Split a string into substrings and display as an array')
  .argument('<string>', 'string to split')
  .option('--first', 'display just the first substring')
  .option('-s, --separator <char>', 'separator character', ',')
  .action((str: string, options: { first: any; separator: any }) => {
    const limit = options.first ? 1 : undefined
    console.log(str.split(options.separator, limit))
  })

// program.exitOverride()

program.parse(process.argv)
