#! /usr/bin/env node

import { Command } from 'commander'
import pkg from '@/util/package_util'
import * as ls from '@/command/ls'

const program = new Command()

program
  .name('project-starter-cli')
  .description('A CLI tool to generate project starter')
  .version(pkg.version, '-v, --version')

program.command(ls.name)
  .description(ls.description)
  .action(
    () => {
      ls.execute()
    },
  )

// program.exitOverride()

program.parse(process.argv)
