import fs from 'fs'
import yaml from 'yaml'
import { scriptDirname } from '@/util/path_util'

const name = 'ls'
const description = 'List all available templates'

const tplPath = `${scriptDirname}/../templates`

const execute = () => {
  fs.readdir(tplPath, { withFileTypes: true }, (error, files) => {
    if (error != null) {
      console.log(error)
    } else {
      files
        .filter((item) => item.isDirectory())
        .map((item) => item.name)
        .forEach((value:string) => {
          try {
            const file = fs.readFileSync(`${tplPath}/${value}/config.yml`, 'utf8')
            const doc = yaml.parse(file)
            console.log(`${value}: ${doc.name} [${doc.description}]`)
          } catch (e) {
            // error
            console.log(`${value}: ${e}`)
          }
        })
    }
  })
}

export {
  name,
  description,
  execute,
}
