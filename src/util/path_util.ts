import path from 'path'
import { fileURLToPath } from 'url'

const scriptFilename = fileURLToPath(import.meta.url)

const scriptDirname = path.dirname(scriptFilename)

export {
  scriptFilename,
  scriptDirname,
}
