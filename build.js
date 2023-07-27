import { readdirSync, writeFileSync, rmSync } from 'fs'
import { fileURLToPath } from 'url'
import { join } from 'path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

const srcPath = join(__dirname, 'src')
const indexPath = join(srcPath, 'index.ts')
const distPath = join(__dirname, 'dist')

readdirSync(distPath).forEach((path) => {
  rmSync(join(distPath, path))
})

const content = readdirSync(srcPath)
  .filter((path) => path !== 'index.ts')
  .map((path) => path.replace(/\.ts$/, ''))
  .map((filename) => `export * from './${filename}.js'`)
  .join('\n')

writeFileSync(indexPath, content)
