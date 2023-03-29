import fs from 'fs'

export function readFile(path: string) {
  if (fs.existsSync(path)) {
    const data = fs.readFileSync(path, 'utf8')
    return data
  } else {
    return null
  }
}
